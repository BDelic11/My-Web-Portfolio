import { Button } from "./button";

interface DownloadButtonProps {
  downloadFile: string;
  children: React.ReactNode;
}

const DownloadButton = ({ downloadFile, children }: DownloadButtonProps) => {
  return (
    <a href={downloadFile} download>
      <Button
        className=" bg-inherit md:text-sm"
        variant="outline"
        size="default"
      >
        {children}
      </Button>
    </a>
  );
};

export default DownloadButton;
