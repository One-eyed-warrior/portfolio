const whoamiObj = {
  "message": [
    [
      "I am Siddhanth Bhattacharyya,",
      "I like working on ML/Deep Learning models",
      "Can talk for hours about how Leclerc deserves a WDC or why Lebron deserves a 5th MVP",
      "",
      "Roses are red, Violets are blue,",
      "GANs are cool and so are you",
      "",
      "I mostly develop generative models (image and text)",
      "",
      "Probably listening to Alice in Chains or doing wonky math",
    ]
  ]
}



export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'></span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
