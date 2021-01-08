import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { NextPage } from "next";
import { StyledSocials } from "../styles/main-page-styles";

// import { mainPageStyles } from "../styles/style-constants";

interface Props {
  title: string;
  description: string;
  image: string;
  shareUrl: string;
}

const SocialMediaShare: NextPage<Props> = ({
  title,
  description,
  image,
  shareUrl,
}: Props) => {
  const size = 32;
  const fill = "none";
  // const iconColour = mainPageStyles.footer.socialMediaButtonColor;

  return (
    <StyledSocials>
      <FacebookShareButton url={shareUrl} quote={description}>
        <FacebookIcon
          size={size}
          round
          bgStyle={{ fill }}
          // iconFillColor={iconColour}
        />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon
          size={size}
          round
          bgStyle={{ fill }}
          // iconFillColor={iconColour}
        />
      </TwitterShareButton>

      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon
          size={size}
          round
          bgStyle={{ fill }}
          // iconFillColor={iconColour}
        />
      </TelegramShareButton>

      {image && (
        <PinterestShareButton
          url={shareUrl}
          description={description}
          media={image}
        >
          <PinterestIcon
            size={size}
            round
            bgStyle={{ fill }}
            // iconFillColor={iconColour}
          />
        </PinterestShareButton>
      )}

      <TumblrShareButton url={shareUrl} title={title} caption={description}>
        <TumblrIcon
          size={size}
          round
          bgStyle={{ fill }}
          // iconFillColor={iconColour}
        />
      </TumblrShareButton>
    </StyledSocials>
  );
};

export default SocialMediaShare;
