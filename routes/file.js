const express = require("express");
const router = express.Router();
const fs = require("fs");
const es = require("event-stream");


router.get("/add", function (req, res, next) {
  res.render("files/add");
});
router.post("/add", function (req, res, next) {
  let formValues = req.body;
  formValues.range3 = parseInt(formValues.range3)
  const readableStream = fs.createReadStream("C:/Users/shoba/Downloads/SampleFile_ToAutomate.txt");
  const writeableStream = fs.createWriteStream("C:/Users/shoba/Downloads/SampleFile_ToAutomate-copy.txt");
  console.log(formValues)
  var lineReader = require('readline').createInterface({
    input: readableStream
  });
  let firstLine = 0;
  lineReader.on('line', function (line) {
    if (firstLine !== 0) {
      writeableStream.write("\r\n");
      writeableStream.write(line);
      var lineArray = line.split(";");
      if (lineArray.indexOf(formValues.id) > -1) {
        for (var i = 0; i < formValues.range2; i++) {
          var newLine = "";
          for (var j = 0; j < lineArray.length; j++) {
            if (j === 9) {
              newLine = newLine + (parseInt(lineArray[j]) + parseInt(formValues.range1)) + ";"
            } else if (j === 16) {
              var newString = lineArray[j].substring(0, lineArray[j].length - ((formValues.range3).toString().length)) + (parseInt(lineArray[j].substring(lineArray[j].length - ((formValues.range3).toString().length), lineArray[j].length)) + parseInt(formValues.range3)).toString();
              newLine = newLine + newString + ";"
            } else {
              newLine = newLine + lineArray[j] + ";";
            }
          }
          formValues.range1 = parseInt(formValues.range1) + 1;
          formValues.range3++;
          writeableStream.write("\r\n");
          writeableStream.write(newLine);
          if (i === formValues.range2 - 1) {
            let success = "Automated successfully";
            res.render("files/add", {
              success
            });
          }
        }
      }

    } else {
      writeableStream.write(line);
      firstLine++;
    }
  });

});


module.exports = router;