"use server";

import { supabase } from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";
import { getUserToken } from "@/lib/userToken";
 
const fetchReactions = async (
  contentId: string,
  reactionType: Tables<"reactions">["reaction_type"]
) => {
  const { count } = await supabase
    .from("reactions")
    .select("*", { count: "exact" })
    .eq("content_id", contentId)
    .eq("reaction_type", reactionType);
 
  const userToken = await getUserToken();
  if (!userToken) {
    return {
      reactionCount: count || 0,
      hasReacted: false,
      comment: "",
    };
  }
  const { data } = await supabase
    .from("reactions")
    .select()
    .eq("content_id", contentId)
    .eq("reaction_type", reactionType)
    .eq("user_token", userToken)
    .single();
 
  return {
    reactionCount: count || 0,
    hasReacted: !!data,
    comment: data?.comment || "",
  };
};
 
export { fetchReactions };