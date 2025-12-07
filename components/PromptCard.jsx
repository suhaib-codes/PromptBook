"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");
  const [likes, setLikes] = useState(post.likes || 0);
  const [dislikes, setDislikes] = useState(post.dislikes || 0);
  const [hasLiked, setHasLiked] = useState(
    post.likedBy?.includes(session?.user?.id) || false
  );
  const [hasDisliked, setHasDisliked] = useState(
    post.dislikedBy?.includes(session?.user?.id) || false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = async () => {
    const shareText = `${post.prompt}\n\n#${post.tag}\n\n— Shared from PromptBook`;
    const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Prompt from PromptBook',
          text: shareText,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setShareMessage("Prompt copied to clipboard!");
        setTimeout(() => setShareMessage(""), 3000);
      }
    } catch (error) {
      // User cancelled share or error occurred
      if (error.name !== 'AbortError') {
        try {
          await navigator.clipboard.writeText(shareText);
          setShareMessage("Prompt copied to clipboard!");
          setTimeout(() => setShareMessage(""), 3000);
        } catch (clipboardError) {
          console.error("Failed to copy:", clipboardError);
        }
      }
    }
  };

  const handleLike = async () => {
    if (!session?.user) {
      alert("Please sign in to like prompts");
      return;
    }

    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(`/api/prompt/${post._id}/like`, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setHasLiked(data.hasLiked);
        setHasDisliked(data.hasDisliked);
      }
    } catch (error) {
      console.error("Error liking prompt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDislike = async () => {
    if (!session?.user) {
      alert("Please sign in to dislike prompts");
      return;
    }

    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(`/api/prompt/${post._id}/dislike`, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setHasLiked(data.hasLiked);
        setHasDisliked(data.hasDisliked);
      }
    } catch (error) {
      console.error("Error disliking prompt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image || '/assets/images/default-avatar.svg'}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      {/* Example Image */}
      {post.imageUrl && (
        <div className='my-4'>
          <img
            src={post.imageUrl}
            alt='prompt example'
            className='w-full max-h-64 object-cover rounded-lg'
          />
        </div>
      )}

      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {/* Like/Dislike/Share Buttons */}
      <div className='mt-4 flex items-center gap-4 border-t border-gray-100 pt-3'>
        <button
          onClick={handleLike}
          disabled={isLoading}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-all ${
            hasLiked
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600 hover:bg-green-50"
          }`}
        >
          <span>👍</span>
          <span>{likes}</span>
        </button>
        <button
          onClick={handleDislike}
          disabled={isLoading}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-all ${
            hasDisliked
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600 hover:bg-red-50"
          }`}
        >
          <span>👎</span>
          <span>{dislikes}</span>
        </button>
        <button
          onClick={handleShare}
          className='flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all'
        >
          <span>📤</span>
          <span>Share</span>
        </button>
      </div>

      {/* Share feedback message */}
      {shareMessage && (
        <div className='mt-2 text-sm text-green-600 text-center'>
          {shareMessage}
        </div>
      )}

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
