import { Tables } from "@/types/database.types";
import { fetchReactions } from "@/app/(pages)/(root)/post/[slug]/_utils/featchReactions";
import ReactionButton from "./reaction-btn";
import ReactionMemo from "./reaction-memo";
import { useState, useEffect } from "react";

const REACTION_TYPES: Tables<"reactions">["reaction_type"][] = [
  "heart",
  "memo",
];

const ReactionGroup = ({ contentId }: { contentId: string }) => {
  const [reactionStates, setReactionStates] = useState<
    Record<
      string,
      { reactionCount: number; hasReacted: boolean; comment: string }
    >
  >({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReactions = async () => {
      setIsLoading(true);
      const results = await Promise.all(
        REACTION_TYPES.map(async (type) => {
          const data = await fetchReactions(contentId, type);
          return { type, data };
        })
      );

      const newStates: Record<
        string,
        { reactionCount: number; hasReacted: boolean; comment: string }
      > = {};
      results.forEach(({ type, data }) => {
        newStates[type] = data;
      });

      setReactionStates(newStates);
      setIsLoading(false);
    };

    if (contentId) {
      loadReactions();
    }
  }, [contentId]);

  if (isLoading) {
    return <div className="h-6" />; // Loading placeholder
  }

  return (
    <div className=" mt-6  space-x-2 text-muted-foreground">
      {REACTION_TYPES.map((reactionType) => {
        const state = reactionStates[reactionType];
        if (!state) return null;

        if (reactionType === "memo") {
          return (
            <ReactionMemo
              key={reactionType}
              contentId={contentId}
              initialComment={state.comment || ""}
            />
          );
        }

        return (
          <ReactionButton
            key={reactionType}
            contentId={contentId}
            reactionType={reactionType}
            reactionCount={state.reactionCount}
            hasReacted={state.hasReacted}
          />
        );
      })}
    </div>
  );
};

export default ReactionGroup;