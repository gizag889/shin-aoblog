"use server";
 
import { supabase } from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";
import { getUserToken, setUserToken } from "@/lib/userToken";
 
type ReactionData = {
  contentId: string;
  reactionType: Tables<"reactions">["reaction_type"];
  comment?: string;
};
 
type prevState = {
  reactionCount: number;
  hasReacted: boolean;
  comment?: string;
};
 
export const updateReaction = async (
  prevState: prevState,
  reactiondata: ReactionData
) => {
  let userToken = await getUserToken();
 
  if (!userToken) {
    userToken = await setUserToken();
  }
 
  // memoの場合は、コメントを更新または追加
  if (reactiondata.reactionType === "memo") {
    const { data, error } = await supabase
      .from("reactions")
      .upsert(
        {
          user_token: userToken,
          content_id: reactiondata.contentId,
          reaction_type: reactiondata.reactionType,
          comment: reactiondata.comment,
        },
        { onConflict: "user_token, content_id, reaction_type" }
      )
      .select()
      .single();
 
    if (error) {
      console.error(error);
      return prevState;
    }
 
    return {
      reactionCount: prevState.reactionCount, // memoはカウントしない、あるいは常に1? 仕様確認が必要だが一旦そのまま
      hasReacted: true,
      comment: reactiondata.comment,
    };
  }
 
  // heartなどのトグル系リアクション
  if (prevState.hasReacted) {
    // リアクションを削除
    await supabase
      .from("reactions")
      .delete()
      .eq("content_id", reactiondata.contentId)
      .eq("reaction_type", reactiondata.reactionType)
      .eq("user_token", userToken);
 
    return {
      reactionCount: prevState.reactionCount - 1,
      hasReacted: !prevState.hasReacted,
    };
  } else {
    // リアクションを追加
    await supabase.from("reactions").insert({
      user_token: userToken,
      content_id: reactiondata.contentId,
      reaction_type: reactiondata.reactionType,
    });
 
    return {
      reactionCount: prevState.reactionCount + 1,
      hasReacted: !prevState.hasReacted,
    };
  }
};