import ShareIcon from "@heroicons/react/24/outline/ShareIcon";

interface SocialShareButtonProps {
  disabled: boolean;
  id?: string;
  onClick?: () => void;
}

export default function SocialShareButton(props: SocialShareButtonProps) {
  const { disabled, id, onClick } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      aria-label="share this job"
      className="h-[3rem] w-[3rem] border-[1.5px] border-solid border-primary rounded-full p-2 bg-tertiary hover:bg-background-grey items-center text-center inline-flex justify-center"
    >
      <ShareIcon className="w-6 h-6" />
    </button>
  );
}
