import styled from "styled-components";

export const PageWrapper = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Header = styled.section`
  margin-bottom: 2.5rem;
`;

export const EditVignetteWrapper = styled.div`
  height: auto;
  width: 100%;

  > * {
    margin-bottom: 3rem;
  }
`;

export const WritingSection = styled.section`
  height: auto;
  box-sizing: border-box;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  padding: 1rem;

  background-color: bisque;

  h2 {
    margin: 0;
  }

  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const WritingSectionFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CharacterCountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CounterSpan = styled.span<{
  color?: string;
}>`
  color: ${({ color }) => (color ? color : "inherit")};
`;

export const PromptSection = styled(WritingSection)`
  display: flex;
  flex-direction: column;
  background-color: honeydew;
  text-align: center;
  align-items: center;

  > :first-child {
    align-self: flex-end;
  }

  > :last-child {
    margin-top: 1rem;
  }
`;

export const StyledSpan = styled.span`
  background-color: pink;
`;

export const StyledTextArea = styled.textarea`
  font-size: 1.3rem;
  min-height: 10rem;
  width: 100%;
  resize: vertical;
  border: 1px solid lightsalmon;
  border-radius: 0.5rem;

  ::placeholder {
    color: darkgray;
    text-align: center;
    vertical-align: middle;
    line-height: 9.5rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.3rem;
  border: 1px solid lightsalmon;
  border-radius: 0.5rem;

  ::placeholder {
    padding-left: 1rem;
  }
`;

export const PastVignettesSection = styled(WritingSection)`
  background-color: cornsilk;
  text-align: left;
`;

export const StyledDetails = styled.details`
  border: 1px solid lightblue;
  border-radius: 0.5rem;
  padding: 1rem;

  summary {
    font-weight: 600;
  }

  :hover {
    background-color: lemonchiffon;
  }
`;
