const StringManipulation = (str) => {
  const elements = [];
  let eTag;
  const challengeToken = "aykdpvztf2c";
  const reversedChallengeToken = challengeToken.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      const j = i + 1;
      const closingIndex = str.indexOf(">", j);

      if (closingIndex !== -1) {
        const tag = str.substring(j, closingIndex);

        if (tag[0] === "/") {
          const openTag = elements.pop();

          if (!openTag || openTag !== tag.substring(1)) {
            eTag = openTag || tag.substring(1);
          }
        } else {
          elements.push(tag);
        }

        i = closingIndex;
      } else {
        eTag = str.substring(j - 1);
      }
    }
  }

  return elements.length === 0
    ? `${eTag.split("").reverse().join("")}:${reversedChallengeToken}`
    : `${elements
        .pop()
        .split("")
        .reverse()
        .join("")}:${reversedChallengeToken}`;
};

// Sample input "<div><div><b></b></div></p>" || "<div>abc</div><p><em><i>test test test</b></em></p>"
// console.log(StringChallenge(readline()));

export default StringManipulation;
