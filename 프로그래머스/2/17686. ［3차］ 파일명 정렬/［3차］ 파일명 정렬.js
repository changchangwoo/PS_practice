function solution(files) {
  var answer = [];
  const convertArr = [];
  const fileType = ["HEAD", "NUMBER", "TAIL"];
  files.forEach((file) => {
    let obj = {
      HEAD: "",
      NUMBER: "",
      TAIL: "",
      ORIGIN_NAME: file,
    };
    let str = "";
    let convertIdx = 0;
    for (let i = 0; i < file.length; i++) {
      if (convertIdx === 0) {
        if (!isNaN(file[i]) && file[i] !== " ") {
          obj[fileType[convertIdx]] = str.toLowerCase();
          str = file[i];
          convertIdx++;
        } else {
          str += file[i];
        }
      } else if (convertIdx === 1) {
        if (isNaN(file[i]) || str.length >= 5) {
          obj[fileType[convertIdx]] = parseInt(str, 10);
          str = file[i];
          convertIdx++;
        } else {
          str += file[i];
        }
      } else {
        str += file[i];
      }
    }
    if (str.length > 0) {
      obj[fileType[convertIdx]] = str;
    }
    convertArr.push(obj);
  });

  console.log(convertArr);

  convertArr.sort((a, b) => {
    if (a.HEAD === b.HEAD) {
      return a.NUMBER - b.NUMBER;
    }
    return a.HEAD.localeCompare(b.HEAD);
  });

  answer = convertArr.map((file) => file.ORIGIN_NAME);

  return answer;
}
