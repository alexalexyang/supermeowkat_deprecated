import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import TrailerModal from "../../styles/trailer-full-screen-modal";
import { useState } from "react";
interface TrailerProps {
  trailer: { type?: string; url?: string };
  num: number;
}

const FullScreen: NextPage<TrailerProps> = ({ trailer, num }: TrailerProps) => {
  const [fullScreen, setFullScreen] = useState(false);

  if (!trailer.url || !trailer.type) {
    return null;
  }

  const gofullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const trailerId = `full-screen-${trailer.url}`;

  const trailerLink =
    trailer.type === "youtube"
      ? `https://youtube.com/embed/${trailer.url}`
      : `https://player.vimeo.com/video/${trailer.url}`;

  return (
    <>
      <GenericButton onClick={() => gofullScreen()}>
        Trailer {num}
      </GenericButton>
      {fullScreen && (
        <TrailerModal.FullScreenModal
          trailerId={trailerId}
          onClick={() => gofullScreen()}
        >
          <TrailerModal.Centered id={trailerId}>
            <GenericButton onClick={() => gofullScreen()}>Exit</GenericButton>
            <iframe
              className="video"
              title={`Movie trailer`}
              src={trailerLink}
              allowFullScreen
            />
          </TrailerModal.Centered>
        </TrailerModal.FullScreenModal>
      )}
    </>
  );
};

export default FullScreen;
