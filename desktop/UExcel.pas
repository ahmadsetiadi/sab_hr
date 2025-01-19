unit UExcel;

interface

function prepareExcel(sheetName : string=''; fileName:string=''; isNewFile:Boolean=true) : boolean;


var
  {colExcel: array[1..10000] of string = ('A,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,'+es+
                          'BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ,'+es+
                          'CA,CB,CC,CD,CE,CF,CG,CH,CI,CJ,CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,'+es+
                          'DA,DB,DC,DD,DE,DF,DG,DH,DI,DJ,DK,DL,DM,DN,DO,DP,DQ,DR,DS,DT,DU,DV,DW,DX,DY,DZ,'+es+
                          'EA,EB,EC,ED,EE,EF,EG,EH,EI,EJ,EK,EL,EM,EN,EO,EP,EQ,ER,ES,ET,EU,EV,EW,EX,EY,EZ,'+es+
                          'FA,FB,FC,FD,FE,FF,FG,FH,FI,FJ,FK,FL,FM,FN,FO,FP,FQ,FR,FS,FT,FU,FV,FW,FX,FY,FZ,'+es+
                          'GA,GB,GC,GD,GE,GF,GG,GH,GI,GJ,GK,GL,GM,GN,GO,GP,GQ,GR,GS,GT,GU,GV,GW,GX,GY,GZ,'+es+
                          'HA,HB,HC,HD,HE,HF,HG,HH,HI,HJ,HK,HL,HM,HN,HO,HP,HQ,HR,HS,HT,HU,HV,HW,HX,HY,HZ')'' +
  }
  isNewFileExcel : Boolean;
implementation

function prepareExcel(sheetName : string=''; fileName:string=''; isNewFile:Boolean=true) : boolean;
var
  hasil : Boolean;

begin
  {
  isNewFileExcel := isnewFile;
  PathFileExcel = FileName

  Dim hasil As Boolean = True
  Dim x As Integer

  xlApp = New Microsoft.Office.Interop.Excel.Application()
  xlWorkSheet = New List(Of Excel.Worksheet)
  xlWorkSheet.Clear()
  If xlApp Is Nothing Then
      MsgError("Excel is not properly installed!!")
      xlApp = Nothing
      Return False
      Exit Function
  End If

  Dim sheetName As String = getValueFromString("sheetname", Properties)
  Dim words As String() = Split(sheetName, ",")

  If isNewFileExcel Then
      xlWorkBook = xlApp.Workbooks.Add(misValue)
      x = 1
      For Each sht In xlWorkBook.Worksheets
          If x >= 2 Then sht.delete()
          x += 1
      Next
      x = 0
      'MsgOK(words.Count)
      For Each word As String In words 'pengulangan sheet
          'MsgOK("x : " & x)
          If x = 0 Then
              xlWorkSheet.Add(xlWorkBook.Sheets("Sheet1"))
              If word.Trim <> "" Then xlWorkSheet(0).Name = word.Trim
          Else
              'MsgOK(word)
              If word.Trim <> "" Then
                  MsgOK("x : " & x & vbCrLf & _
                        "word : " & word)
                  xlWorkSheet.Add(CType(xlApp.Worksheets.Add(, xlApp.Sheets(xlApp.Sheets.Count), ), Excel.Worksheet))
                  xlWorkSheet(x).Name = word.Trim
              End If
          End If
          x += 1
      Next
  Else
      xlWorkBook = xlApp.Workbooks.Open(OpenPathFile)
      x = 1
      For Each word As String In words 'pengulangan sheet
          If word.Trim <> "" Then
              For Each sht In xlWorkBook.Worksheets
                  If LCase(word) = LCase(sht.name) Then sht.delete()
              Next
              xlWorkSheet.Add(CType(xlApp.Worksheets.Add(, xlApp.Sheets(xlApp.Sheets.Count), ), Excel.Worksheet))
              xlWorkSheet(x - 1).Name = word.Trim
          End If
          x += 1
      Next
  End If
  Return hasil
  }
end;

end.
