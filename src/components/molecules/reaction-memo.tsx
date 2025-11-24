"use client";

import { useActionState, useTransition } from "react";
import { Button } from "../atoms/Button";
import { updateReaction } from "@/app/(pages)/(root)/post/[slug]/_actions/updateReactions";

interface ReactionMemoProps {
  contentId: string;
  initialComment: string;
}

const ReactionMemo = ({ contentId, initialComment }: ReactionMemoProps) => {
  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useActionState(updateReaction, {
    reactionCount: 0,
    hasReacted: !!initialComment,
    comment: initialComment,
  });

  const handleSubmit = (formData: FormData) => {
    const comment = formData.get("comment") as string;
    startTransition(() => {
      formAction({
        contentId,
        reactionType: "memo",
        comment,
      });
    });
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-2 w-full max-w-md mt-6">
      <textarea
        name="comment"
        className="w-full p-2 border rounded-md text-sm min-h-[80px] bg-background text-foreground"
        placeholder="ひとことメモを残す..."
        defaultValue={state.comment || initialComment}
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isPending}
          size="sm"
          variant="outline"
        >
          {isPending ? "保存中..." : "保存"}
        </Button>
      </div>
    </form>
  );
};

export default ReactionMemo;
