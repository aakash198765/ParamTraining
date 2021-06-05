//Record Collection using Object(key : "value")


//Creating an empty record for college students to store their details required for library work
var studentRecord = {
  usn : ['17BTTCS001', '17BTTCS002', '17BTLCS007', '17BTRCS137'],
  name : ['Aakash Kumar', 'Palak Bansal', 'Saket Raman Jha', 'Asha Bhatta'],
  semester : [8, 7, 6, 8],
  
  library : {
            cateogries : ['Drama', 'Fictional', 'Bibliography', 'Dairy'],
            books : {
                      Drama : ['Dead End', 'Sunday Morning'],
                      Fictional : ["The night", "GreenLand"],
                      Bibliography : ["The Einstein", "Marry"],
                      Dairy : ["Hitler", "Brack Obamma", "Blogger"],
            }
          }
}

var usn = studentRecord.usn[0];
var name = studentRecord.name[0];
var semester = studentRecord.semester[0]
var bookGenre = studentRecord.library.cateogries[0];
var bookIssued = studentRecord.library.books[bookGenre][0];

console.log(usn + " " + name + " " + semester + " " + bookGenre + " " + bookIssued);


