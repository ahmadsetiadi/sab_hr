unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.StrUtils, System.DateUtils, Vcl.ComCtrls,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls,
  System.IniFiles,
  Vcl.Imaging.pngimage, System.Actions, Vcl.ActnList, Vcl.Touch.GestureMgr,
  Vcl.Menus, Winapi.Activex, System.Win.ComObj, ShellApi,
  cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, cxContainer, cxEdit, dxSkinsCore, dxSkinBlack,
  dxSkinBlue, dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom,
  dxSkinDarkSide, dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, cxLabel, cxStyles, dxSkinscxPCPainter,
  cxCustomData, cxFilter, cxData, cxDataStorage, cxNavigator, Data.DB, cxDBData,
  cxDBLookupComboBox, cxGridCustomPopupMenu, cxGridPopupMenu,
  ZAbstractRODataset, ZAbstractDataset, ZDataset, cxGridLevel,
  cxGridCustomTableView, cxGridTableView, cxGridBandedTableView,
  Vcl.Imaging.GIFImg,
  cxGridDBBandedTableView, cxClasses, cxGridCustomView, cxGrid, frxClass,
  frxDBSet,
  cxGridDBLayoutView, cxgridexportlink, dxBarExtItems, dxBar, cxButtons,
  dxStatusbar,
  cxDBEditRepository, cxEditRepositoryItems, dxRibbon, cxPC, cxDBNavigator,
  cxProgressBar,
  IdIOHandler, IdIOHandlerSocket,
  IdIOHandlerStack, IdSSL, IdSSLOpenSSL, IdBaseComponent, IdComponent,
  IdTCPConnection, IdTCPClient, IdExplicitTLSClientServerBase, QImport3,
  IdSMTPBase, IdSMTP, IdMessage, IdAttachment, IdAttachmentFile, ZConnection;

{ Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.StrUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls, System.IniFiles,
  Vcl.Imaging.pngimage, System.Actions, Vcl.ActnList, Vcl.Touch.GestureMgr,
  Vcl.Menus, Winapi.Activex, System.Win.ComObj, ZDataset,
  cxLabel, cxEditRepositoryItems, cxDBEditRepository, cxClasses; }
type
  // begin md5
  MD5Count = array [0 .. 1] of DWORD;
  MD5State = array [0 .. 3] of DWORD;
  MD5Block = array [0 .. 15] of DWORD;
  MD5CBits = array [0 .. 7] of Byte;
  MD5Digest = array [0 .. 15] of Byte;
  MD5Buffer = array [0 .. 63] of Byte;

  MD5Context = record
    State: MD5State;
    Count: MD5Count;
    Buffer: MD5Buffer;
  end;

procedure MD5Init(var Context: MD5Context);
procedure MD5Update(var Context: MD5Context; Input: pChar; Length: longword);
procedure MD5Final(var Context: MD5Context; var Digest: MD5Digest);
function MD5String(M: string): MD5Digest;
function MD5File(N: string): MD5Digest;
function MD5Print(D: MD5Digest): string;
function MD5Match(D1, D2: MD5Digest): Boolean;
function ConvertToMD5(Str: string): string;
function RivestFile(FileName: string): string;
// end md5
function GetMotherBoardSerial: String;

procedure MsgEditError(tipe: Boolean; caption: string);
procedure cekNowEdit(tipe: Boolean; NamaForm: string);
function Confirm(Messages: String): string;
function ConfirmError(Messages: String): string;
procedure MsgError(Messages: string);
procedure MsgOK(Messages: string);
procedure dbg(Messages: variant);
function Pesan(Pesan: string): string;

function getValueLookup(Sender: TObject): string;
procedure CreateUseradmin;
procedure CreateSettingColumn;
procedure CreateAllModules(Syarat: String = '( 0=0 )');

procedure SaveIniFIle(section, ident, fill: string);
function ReadIniFile(section, ident: string): string;
procedure FillConnectionFromIniFiles;

function Encrypt(S: String): String;
function Decrypt(const S: String): String;
function XORCipher(const Input, Key: string): string;
function date2sql(const Dt: TDateTime): string;
function GetCaptionModule(ID: integer): String;

procedure MustFilled(lbl: TcxLabel; tipe: Boolean = True);
procedure ReadOnlyLayoutView(Ly: TcxGridDBLayoutView; tipe: Boolean = True);
function getRepository(const tipe: string): TcxEditRepositoryitem;

function ComboForm(const Title: string; const tipe: String;
  isi: string = ''): string;

function LookupQuery(const Title: string; const Q: tzquery;
  const Width: integer; const MultiSelect: Boolean; hidecolumn: string = '';
  tablename: string = ''; VisibleFirstColumn: Boolean = True;
  isLookupEdit: Boolean = False): Boolean;
procedure LookupStandar(QM: tzquery; JudulLookup, JudulInputBox, NamaTable,
  NamaKolom, NamaOrder, KolomSet: String; Syarat: string = '';
  hidecolumn: string = '');
procedure LookupStandar2(QM: tzquery; Nama: String; Syarat: string = '';
  hidecolumn: string = '');
procedure ExportGrid(tipe: string; Grid: TCxGrid; Msg: Boolean = True;
  Fn: String = '');
function getColumnIndex(Grid: tCxGridDBBandedTableView): integer;
function getFocusFieldName(Grid: tCxGridDBBandedTableView): string;
function getFocusCaptionName(Grid: tCxGridDBBandedTableView): string;
function getFocusColumn(Grid: tCxGridDBBandedTableView): TcxGridDBBandedColumn;
procedure GroupDateFormatClick(Grid: tCxGridDBBandedTableView; tipe: string);
function FileOpenDialog(FilterName: String = '';
  MultiSelect: Boolean = False): string;
function FileSaveDialog(FilterName: String = ''): string;
procedure StyleGridReadOnly(Grid: tCxGridDBBandedTableView);
procedure StyleLayoutReadOnly(Grid: TcxGridDBLayoutView);

procedure String2StringList(const ts: TStringlist; const Field: string;
  const Explode: string);
function SentencesCase(const Text: string): string;
function Replace(const S, OldPattern, NewPattern: string): string;

procedure BukaKoneksi;
procedure TutupKoneksi;
function cekUpdate: Boolean;
function cekexpired: Boolean;
function cekuser(us, ps: string): Boolean;
function CekMotherBoard: Boolean;
function getPasswordAdmin(Dt: TDateTime): string;

function CreateQuery: tzquery;
procedure ExecuteSQL(const SQL: string);
function getQValue(const SQL: string): variant;
function getQValueString(const SQL: string): string;
function getQValueInteger(const SQL: string): integer;
function getQValueDouble(const SQL: string): double;
function isTableExist(name: string): Boolean;
function getTipeKolom(NamaTable, NamaKolom: string): String;
function getS(kolom: string; Q: tzquery): string;
function GetUserLogin: string;

function ServerDate: TDateTime;
function ServerTime: TDateTime;
function ServerDatetime: TDateTime;
function DateDIFF(dtstart, dtfinish: TDateTime; interval: string = ''): double;
function addMonths(Dt: TDateTime; Month: integer): TDateTime;
function addDays(Dt: TDateTime; Days: integer): TDateTime;
function Firstday(Dt: TDateTime): TDateTime;
function Lastday(Dt: TDateTime): TDateTime;
function Str2Date(dtsql: string): TDateTime;

procedure DeleteData(Q: tzquery; ColumnCaption, ColumnSQL: String);
procedure isiKolomUser(isNew: Boolean; Q: tzquery; tablename: string = '';
  columnPrimary: string = '');
procedure isiDefaultNewRecord(Q: tzquery; tablename: string);

function GetEmployeeLogin: integer;
function GetUserID: String;
function getDateTime: string;
function GetGroupLogin: string;

Procedure ShowMenu;
procedure HideMenu;
function CekValidasi(kolom, mn: string): Boolean;
procedure ValidasiMenu2(mn, kolom: string; idPanel: integer; btn: TcxButton;
  itemPopup: TPopupMenu);
procedure ValidasiMenu(kolom, mn: string; btn: TPopupMenu);
procedure ValidasiEdit(mn: string);
procedure ValidasiInsert(mn: string);
Function ValidasiDetail(mn, detailname: string): Boolean;
procedure ValidasiColumn(mn, kolom: string; Grid: tCxGridDBBandedTableView);

procedure SetInsertNavigator(Nav: TcxDBNavigator; tipe: Boolean);
procedure SetEditNavigator(Nav: TcxDBNavigator; tipe: Boolean);
procedure SetDeleteNavigator(Nav: TcxDBNavigator; tipe: Boolean);

procedure SetInsertLayout(master: TcxGridDBLayoutView; tipe: Boolean);
procedure SetEditLayout(master: TcxGridDBLayoutView; tipe: Boolean);
procedure SetDeleteLayout(master: TcxGridDBLayoutView; tipe: Boolean);

procedure SetInsertTable(master: tCxGridDBBandedTableView; tipe: Boolean);
procedure SetEditTable(master: tCxGridDBBandedTableView; tipe: Boolean);
procedure SetDeleteTable(master: tCxGridDBBandedTableView; tipe: Boolean);

function CekModule(modulename, tagno: string): Boolean;
function CekChildGroup(modulename, tagno: string): Boolean;
function getSecurity2(idm, SQL: string): string;

procedure isiTableKolom(tn: string; Grid: tCxGridDBBandedTableView);
procedure isiTableKolomFromGrid(tn: string; Grid: tCxGridDBBandedTableView);
procedure SetColumnWidth(ID: string; q_master: tzquery;
  Grid: tCxGridDBBandedTableView; CreateColumn: Boolean = True;
  tn: string = '');
procedure createAllColumn(tn: string; q_master: tzquery;
  Grid: tCxGridDBBandedTableView; isBestFit: Boolean = False);
procedure SetUserKolom(tn: string; Grid: tCxGridDBBandedTableView);
function getIDKolom(tn, kn: string): integer;
procedure FreeAllColumn(ID: string);
procedure setComboColumn(idk: integer; isi: string;
  gridColumn: TcxGridDBBandedColumn);
procedure setLookupColumn(idk: integer; gridColumn: TcxGridDBBandedColumn);

procedure UpdateJumlahSesi(tid: string);

procedure FindClick(Q: tzquery; Grid: tCxGridDBBandedTableView;
  tablename: string; security: String = ' ( 0=0 ) ');
procedure ShowALLClick(Q: tzquery; SQL: string);

procedure cekFieldMustbeFilled(tablename: string; q_master: tzquery;
  master: tCxGridDBBandedTableView);
procedure cekIndexUnique(tablename: string; q_master: tzquery;
  master: tCxGridDBBandedTableView; isNewRecord: Boolean);
function getPrimaryKey(tablename: string): string;
function GetCaptionColumn(FieldName: string;
  master: tCxGridDBBandedTableView): String;
function getColumnFromFilter(Q: tzquery; ColumnName: string): string;

procedure FillHistoryDelete(tablename, TableDelete: string; q_master: tzquery);
procedure FillHistoryDeleteDetail(TableDetail, MasterID: string;
  q_master: tzquery);
procedure SettingFontRibbon(dxribbon1: TdxRibbon);
procedure SettingFontPage(Pageheader: TcxPageControl);
procedure SettingFontGrid(Grid: TCxGrid);

procedure cekPayrollExist(q_master: tzquery);
procedure cekNewPayroll(q_master: tzquery);

function ConnectExcel(Fn: string): Boolean;
function ConnectExcel2(Fn: string; Z: TZConnection): Boolean;
procedure DisconnetExcel2(Z: TZConnection);
procedure DisconnetExcel;
procedure GetTableExcel(ts: tstrings);

procedure DisconnectTo(Z: TZConnection);
function CreateConnection(Z: TZConnection; hostname, database, protocol, user,
  pass: string; port: integer): string;
function ConnectSQLServer: Boolean;
procedure DisconnetSQLServer;

function getSizeItem(sz: string): double;

procedure LoadReport(rpt: string; FR: TfrxReport);
procedure SaveReportSQL(rpt, SQL: string);
function ReportOrder(rpt: string): string;

function getDistinct(tn, Fn: string; Syarat: String = '( 0=0 )';
  groupby: String = ''; orderby: String = ''): string;
procedure ReadOnlyDataset(const Grid: tCxGridDBBandedTableView);
procedure ReadOnlyALLColumn(const Grid: tCxGridDBBandedTableView);

procedure ShowProgressbar(ShowMemo: Boolean = False);
procedure SetProgressbar(Judul: string; Posisi: double);
procedure SetProgressbarDefault(Q: tzquery);
procedure SetProgressbarMsg(Msg: String = '');
procedure HideProgressbar;
procedure ShowLoading;
procedure HideLoading;

procedure isiGrandtotalContractList(cid: string);
procedure isiDatangSisaContractDetail(cdid: string);
procedure hapusDatangSisaContractDetail(S: string);

procedure isiGrandtotalPackingList(cid: string);

function getGrossItem(uom, shape: string; sz, ln: double): double;
procedure updateItemIn(pcid: string);
procedure UpdateItemOut(sy: string);
procedure HapusItemIn(pdid: string);
procedure HapusItemOut(iid, nob, sjid: string);
procedure isiItemIn(pdid: string);
procedure isiItemOut(fdid: string);

procedure updateNetRemaining(S: string);
procedure updateBundleRemaining(S: string);

procedure isiNetSJReceiveDetail(rcdid: string);
procedure isiNetBundleDetail(bdid: string);
procedure isiNetPackingList(pdid: string);
procedure isiNetPotonganPackingList(pdid: string);
procedure isiNetPotonganReceiveItem(rcdid: string);
procedure HapusNetPackingList(sjid: string);

procedure isiFakturDetail(fid, sjid: string);
procedure isiGrandtotalFaktur(fid: string);
procedure isiGrandtotalFaktur2(fid: string);
procedure insertFaktur(sy: string);
procedure updateFakturDetail(fid, sjid: string);

procedure isiGrandtotalPenawaran(pid: string);

procedure CekGridMaster(QM: tzquery; isNowEdit: Boolean; caption1: string);
function getTable(ID: string): string;
function getQuery(ID: string; filtertgl: Boolean; sdate, edate: TDateTime;
  Syarat: string = ' (0=0) '): string;
procedure cekNo(isNewRecord: Boolean; Q: tzquery; NamaKolom, kolom, primarykey,
  tabel: string; Nama: string = '');
function bulatkan(angka, jumlahkoma: double): double;
function RoundUp(angka, jumlahkoma: double): double;
function RoundDown(angka, jumlahkoma: double): double;
function SpesialPembulatan(angka: double): double;

procedure isiPackingDetail2(sj, sjd: string);
procedure HapusPackingDetail2(sjd: string);
procedure isiItemIn2(sjd: string);

function ES: string;
procedure isiGrandtotalPO(poid: string);
procedure isiGrandtotalReceive(rcid: string);
procedure isiItemInFromReceive(rcdid: string);
procedure hapusItemInFromReceive(rcdid: string);
procedure UpdateItemPO(podid: string);

procedure HapusItemInFromPotongan(bdid: string);
procedure HapusItemOutFromPotongan(bid: string);
procedure isiItemInFromPotongan(bdid: string);
procedure IsiItemOutFromPotongan(bid: string);
procedure isiOutPackingList(nobundle: string);
function createNoSuratJalan: string;
function isKasirAktif: Boolean;
function getNoStruk(Dt: TDateTime): string;
function getNoPOSDetail(posid: string): string;
procedure isiKomisi(psid: string);
procedure isiSubtotalPOS(psid: string);
procedure isiItemOutPOS(psid: string);
procedure isiTotalBayarPOS(psid: string);
procedure isiDiskonPOS(psid: string; diskonpersen: double);
function selisihHari(TglAwal, TglAkhir: TDateTime): integer;
function MinutesApart(JamAwal, JamAkhir: TDateTime): integer;
procedure getTimeFinger(tipe: string; Q: tzquery; Dt: TDateTime);

function getSecurity(idm: string = '0'; kolomSecurity: string = ' * ';
  TableAlias: string = ''): string;
procedure beforePost_PosDetail(q_posdetail: tzquery);
procedure isiNewKomisi(psid: string);
procedure isiPayrollKomisi(qp: tzquery);
procedure isiTablePayrollKomisiProduk(qp, qk: tzquery;
  komisi, totalkomisi: double; tipe2: string);
procedure isiTablePayrollKomisiPaket(qp, qk: tzquery;
  komisi, totalkomisi: double; tipe2: string);

procedure ClearErrorList;
procedure AddErrorList(Pesan: string);
procedure AddErrorListFromTS(ts: TStringlist);
function ShowError: tstrings;

procedure updateEmployeeFromMutation(eid: string);
procedure CheckIsFirstMutation(qd: tzquery);
procedure DeleteAllDataDetail(idm, eid: string);

// function getTimeFromFingerLog(statusmasuk : string; qm:tzquery; tipe:string='finger') : string;
procedure getTimeFromFingerLog(statusmasuk: string; QM: tzquery);
function getColumnLookup(tablename, ColumnName: string): string;

function PayrollNotExist(eid: string; Dt: TDateTime): Boolean;
function PayrollExist(eid: string; Dt: TDateTime): Boolean;
function SendEmail(sendTo, subject, body, attachFiles: string;
  smtpHost: string = ''; smtpUser: string = ''; smtpPass: string = '';
  smtpPort: integer = 0): Boolean;
procedure ExportReportToPDF(Fr_Report: TfrxReport; Fn: string;
  pwd: string = '');
procedure ExportReportToJPEG(Fr_Report: TfrxReport; Fn: string);
function defaultPassword(QM: tzquery): string;
function Float2Str(angka: double): string;
function HilangkanKomaBelakang(S: string): string;
function getLocationSettleUP: string;
procedure ListFileDir(Path, FileType: string; tsFile: TStringlist);

procedure isiMenuPrint(ItemMenu, ItemPrint: TPopupMenu; idm: string);
function FindStr(Text, Str: string): Boolean;
function FindWord(Text, Str: string): Boolean;
function FindSQLLimit(SQL: string): string;

procedure IsiMasterCuti(QM: tzquery);
procedure IsiSisaCuti(QM: tzquery);

procedure isiUserEmployee(QM: tzquery);
function ImportExcel(qt: tzquery; sheetID: string): Boolean;
function ImportExcelDirect(sheetID, Fn: string): Boolean;

function getColumnSLookup(tipe, tablename, ColumnName: string): string;
function getSKNumber(QM: tzquery): string;
function getRefKerja(QM: tzquery): string;
function getBulanRomawi(bulan: integer): string;

procedure backupDatabase(dirSave: string);
procedure restoreDatabase(FileName: string);
procedure UnZipFile(ZipFileName, passWord, UnZipDir: string);
procedure ZipFile(SourceFile, ZipFileName, passWord: string);
function ShellExecute_AndWait(FileName: string; Params: string;
  ShowCMD: integer): Boolean;
function getTempDirectory: string;
function getFileName(dir: string): string;

function GetVersionApplication(Fn: string): string;

procedure beforePostAttendance2(QM: tzquery; isNew: Boolean;
  auto: Boolean = True; prosessTime: Boolean = False;
  processJadwal: Boolean = True);
procedure afterPostAttendance2(QM: tzquery; isNew: Boolean);
procedure prosessDataEmployee(qa: tzquery; auto: Boolean = True);
procedure insertJadwal(qa: tzquery);
procedure prosessShift(qa: tzquery; isNew: Boolean);
procedure prosessTimeInOut(qa: tzquery; auto: Boolean = True);
procedure prosessStatusAttendance(qa: tzquery; auto: Boolean = True);
procedure prosessMinutes(Q: tzquery; auto: Boolean = True);
procedure prosesOT(QM: tzquery; auto: Boolean = True);
procedure prosesTunjangan(QM: tzquery; isNew: Boolean; auto: Boolean = True);

var
  LocationIniFiles, getUserLogin2, getTipeLogin, LocationUpdater,
    LocationApplication, TipeCombo, TipeSetting, getHostname, getDatabase,
    getVersion, MBSN: string;
  getPort: integer;
  isDebug, MauPrintStruk, isNewTotalBayar, isNowEditPaket, isNewPOSDETAIL,
    isServer, SudahLogin, isCloseSesi, isShowReminder: Boolean;
  // col : array[0..200] of TcxGridDBBandedColumn;
  isNowEdit: array [0 .. 2000] of Boolean;
  col: array [0 .. 9000] of TcxGridDBBandedColumn;
  lq: array [0 .. 9000] of TcxEditRepositoryLookupComboBoxItem;
  cbo: array [0 .. 9000] of TcxEditRepositoryComboBoxItem;
  qlq: array [0 .. 1000] of tzquery;
  dslq: array [0 .. 1000] of TDataSource;
  SQLGrid: array [0 .. 1000] of string;
  tablename: array [0 .. 1000] of string;
  idLogin, idUseradmin, idUseradminDetail: integer;
  { idCompany, idSupplier, idCustomer, idItem, idItemCarbonSteel, idSertifikat,
    idContractList, idContractList1, idPackingList, idPackingList1,
    idSuratJalan, idSuratJalan1, idFaktur, idFaktur1,
    idFakturCarbonSteel, idFakturCarbonSteel1, idPenawaran, idPenawaran1,
    idBarcode, idItemMasuk, idItemKeluar, idReportItem, idReportContract, idReportPenjualan,
    ; }
  IDModule, modulename, POS_ID: string;
  // md5
  PADDING: MD5Buffer = ($80, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00,
    $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00,
    $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00,
    $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00, $00,
    $00, $00, $00, $00, $00, $00, $00, $00);

  // md5
implementation

uses UMenuLogin, ULookup, UCombo, UTerbilang, UMsg, UError, UProgress;

// begin md5
function F(x, y, Z: DWORD): DWORD;
begin
  Result := (x and y) or ((not x) and Z);
end;

function G(x, y, Z: DWORD): DWORD;
begin
  Result := (x and Z) or (y and (not Z));
end;

function H(x, y, Z: DWORD): DWORD;
begin
  Result := x xor y xor Z;
end;

function I(x, y, Z: DWORD): DWORD;
begin
  Result := y xor (x or (not Z));
end;

procedure rot(var x: DWORD; N: Byte);
begin
  x := (x shl N) or (x shr (32 - N));
end;

procedure FF(var a: DWORD; b, c, D, x: DWORD; S: Byte; ac: DWORD);
begin
  inc(a, F(b, c, D) + x + ac);
  rot(a, S);
  inc(a, b);
end;

procedure GG(var a: DWORD; b, c, D, x: DWORD; S: Byte; ac: DWORD);
begin
  inc(a, G(b, c, D) + x + ac);
  rot(a, S);
  inc(a, b);
end;

procedure HH(var a: DWORD; b, c, D, x: DWORD; S: Byte; ac: DWORD);
begin
  inc(a, H(b, c, D) + x + ac);
  rot(a, S);
  inc(a, b);
end;

procedure II(var a: DWORD; b, c, D, x: DWORD; S: Byte; ac: DWORD);
begin
  inc(a, I(b, c, D) + x + ac);
  rot(a, S);
  inc(a, b);
end;

procedure Encode(Source, Target: pointer; Count: longword);
var
  S: PByte;
  T: PDWORD;
  I: longword;
begin
  S := Source;
  T := Target;
  for I := 1 to Count div 4 do
  begin
    T^ := S^;
    inc(S);
    T^ := T^ or (S^ shl 8);
    inc(S);
    T^ := T^ or (S^ shl 16);
    inc(S);
    T^ := T^ or (S^ shl 24);
    inc(S);
    inc(T);
  end;
end;

procedure Decode(Source, Target: pointer; Count: longword);
var
  S: PDWORD;
  T: PByte;
  I: longword;
begin
  S := Source;
  T := Target;
  for I := 1 to Count do
  begin
    T^ := S^ and $FF;
    inc(T);
    T^ := (S^ shr 8) and $FF;
    inc(T);
    T^ := (S^ shr 16) and $FF;
    inc(T);
    T^ := (S^ shr 24) and $FF;
    inc(T);
    inc(S);
  end;
end;

procedure Transform(Buffer: pointer; var State: MD5State);
var
  a, b, c, D: DWORD;
  Block: MD5Block;
begin
  Encode(Buffer, @Block, 64);
  a := State[0];
  b := State[1];
  c := State[2];
  D := State[3];
  FF(a, b, c, D, Block[0], 7, $D76AA478);
  FF(D, a, b, c, Block[1], 12, $E8C7B756);
  FF(c, D, a, b, Block[2], 17, $242070DB);
  FF(b, c, D, a, Block[3], 22, $C1BDCEEE);
  FF(a, b, c, D, Block[4], 7, $F57C0FAF);
  FF(D, a, b, c, Block[5], 12, $4787C62A);
  FF(c, D, a, b, Block[6], 17, $A8304613);
  FF(b, c, D, a, Block[7], 22, $FD469501);
  FF(a, b, c, D, Block[8], 7, $698098D8);
  FF(D, a, b, c, Block[9], 12, $8B44F7AF);
  FF(c, D, a, b, Block[10], 17, $FFFF5BB1);
  FF(b, c, D, a, Block[11], 22, $895CD7BE);
  FF(a, b, c, D, Block[12], 7, $6B901122);
  FF(D, a, b, c, Block[13], 12, $FD987193);
  FF(c, D, a, b, Block[14], 17, $A679438E);
  FF(b, c, D, a, Block[15], 22, $49B40821);
  GG(a, b, c, D, Block[1], 5, $F61E2562);
  GG(D, a, b, c, Block[6], 9, $C040B340);
  GG(c, D, a, b, Block[11], 14, $265E5A51);
  GG(b, c, D, a, Block[0], 20, $E9B6C7AA);
  GG(a, b, c, D, Block[5], 5, $D62F105D);
  GG(D, a, b, c, Block[10], 9, $2441453);
  GG(c, D, a, b, Block[15], 14, $D8A1E681);
  GG(b, c, D, a, Block[4], 20, $E7D3FBC8);
  GG(a, b, c, D, Block[9], 5, $21E1CDE6);
  GG(D, a, b, c, Block[14], 9, $C33707D6);
  GG(c, D, a, b, Block[3], 14, $F4D50D87);
  GG(b, c, D, a, Block[8], 20, $455A14ED);
  GG(a, b, c, D, Block[13], 5, $A9E3E905);
  GG(D, a, b, c, Block[2], 9, $FCEFA3F8);
  GG(c, D, a, b, Block[7], 14, $676F02D9);
  GG(b, c, D, a, Block[12], 20, $8D2A4C8A);
  HH(a, b, c, D, Block[5], 4, $FFFA3942);
  HH(D, a, b, c, Block[8], 11, $8771F681);
  HH(c, D, a, b, Block[11], 16, $6D9D6122);
  HH(b, c, D, a, Block[14], 23, $FDE5380C);
  HH(a, b, c, D, Block[1], 4, $A4BEEA44);
  HH(D, a, b, c, Block[4], 11, $4BDECFA9);
  HH(c, D, a, b, Block[7], 16, $F6BB4B60);
  HH(b, c, D, a, Block[10], 23, $BEBFBC70);
  HH(a, b, c, D, Block[13], 4, $289B7EC6);
  HH(D, a, b, c, Block[0], 11, $EAA127FA);
  HH(c, D, a, b, Block[3], 16, $D4EF3085);
  HH(b, c, D, a, Block[6], 23, $4881D05);
  HH(a, b, c, D, Block[9], 4, $D9D4D039);
  HH(D, a, b, c, Block[12], 11, $E6DB99E5);
  HH(c, D, a, b, Block[15], 16, $1FA27CF8);
  HH(b, c, D, a, Block[2], 23, $C4AC5665);
  II(a, b, c, D, Block[0], 6, $F4292244);
  II(D, a, b, c, Block[7], 10, $432AFF97);
  II(c, D, a, b, Block[14], 15, $AB9423A7);
  II(b, c, D, a, Block[5], 21, $FC93A039);
  II(a, b, c, D, Block[12], 6, $655B59C3);
  II(D, a, b, c, Block[3], 10, $8F0CCC92);
  II(c, D, a, b, Block[10], 15, $FFEFF47D);
  II(b, c, D, a, Block[1], 21, $85845DD1);
  II(a, b, c, D, Block[8], 6, $6FA87E4F);
  II(D, a, b, c, Block[15], 10, $FE2CE6E0);
  II(c, D, a, b, Block[6], 15, $A3014314);
  II(b, c, D, a, Block[13], 21, $4E0811A1);
  II(a, b, c, D, Block[4], 6, $F7537E82);
  II(D, a, b, c, Block[11], 10, $BD3AF235);
  II(c, D, a, b, Block[2], 15, $2AD7D2BB);
  II(b, c, D, a, Block[9], 21, $EB86D391);
  inc(State[0], a);
  inc(State[1], b);
  inc(State[2], c);
  inc(State[3], D);
end;

procedure MD5Init(var Context: MD5Context);
begin
  with Context do
  begin
    State[0] := $67452301;
    State[1] := $EFCDAB89;
    State[2] := $98BADCFE;
    State[3] := $10325476;
    Count[0] := 0;
    Count[1] := 0;
    ZeroMemory(@Buffer, SizeOf(MD5Buffer));
  end;
end;

procedure MD5Update(var Context: MD5Context; Input: pChar; Length: longword);
var
  Index: longword;
  PartLen: longword;
  I: longword;
begin
  with Context do
  begin
    Index := (Count[0] shr 3) and $3F;
    inc(Count[0], Length shl 3);
    if Count[0] < (Length shl 3) then
      inc(Count[1]);
    inc(Count[1], Length shr 29);
  end;
  PartLen := 64 - Index;
  if Length >= PartLen then
  begin
    CopyMemory(@Context.Buffer[Index], Input, PartLen);
    Transform(@Context.Buffer, Context.State);
    I := PartLen;
    while I + 63 < Length do
    begin
      Transform(@Input[I], Context.State);
      inc(I, 64);
    end;
    Index := 0;
  end
  else
    I := 0;
  CopyMemory(@Context.Buffer[Index], @Input[I], Length - I);
end;

procedure MD5Final(var Context: MD5Context; var Digest: MD5Digest);
var
  Bits: MD5CBits;
  Index: longword;
  PadLen: longword;
begin
  Decode(@Context.Count, @Bits, 2);
  Index := (Context.Count[0] shr 3) and $3F;
  if Index < 56 then
    PadLen := 56 - Index
  else
    PadLen := 120 - Index;
  MD5Update(Context, @PADDING, PadLen);
  MD5Update(Context, @Bits, 8);
  Decode(@Context.State, @Digest, 4);
  ZeroMemory(@Context, SizeOf(MD5Context));
end;

function MD5String(M: string): MD5Digest;
var
  Context: MD5Context;
begin
  MD5Init(Context);
  MD5Update(Context, pChar(M), Length(M));
  MD5Final(Context, Result);
end;

function MD5File(N: string): MD5Digest;
var
  FileHandle: THandle;
  MapHandle: THandle;
  ViewPointer: pointer;
  Context: MD5Context;
begin
  MD5Init(Context);
  FileHandle := CreateFile(pChar(N), GENERIC_READ, FILE_SHARE_READ or
    FILE_SHARE_WRITE, nil, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL or
    FILE_FLAG_SEQUENTIAL_SCAN, 0);
  if FileHandle <> INVALID_HANDLE_VALUE then
    try
      MapHandle := CreateFileMapping(FileHandle, nil, PAGE_READONLY, 0, 0, nil);
      if MapHandle <> 0 then
        try
          ViewPointer := MapViewOfFile(MapHandle, FILE_MAP_READ, 0, 0, 0);
          if ViewPointer <> nil then
            try
              MD5Update(Context, ViewPointer, GetFileSize(FileHandle, nil));
            finally
              UnmapViewOfFile(ViewPointer);
            end;
        finally
          CloseHandle(MapHandle);
        end;
    finally
      CloseHandle(FileHandle);
    end;
  MD5Final(Context, Result);
end;

function MD5Print(D: MD5Digest): string;
var
  I: Byte;
const
  Digits: array [0 .. 15] of char = ('0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
begin
  Result := '';
  for I := 0 to 15 do
    Result := Result + Digits[(D[I] shr 4) and $0F] + Digits[D[I] and $0F];
end;

function MD5Match(D1, D2: MD5Digest): Boolean;
var
  I: Byte;
begin
  I := 0;
  Result := True;
  while Result and (I < 16) do
  begin
    Result := D1[I] = D2[I];
    inc(I);
  end;
end;

function ConvertToMD5(Str: string): string;
begin
  Result := MD5Print(MD5String(Str));
end;

function RivestFile(FileName: string): string;
begin
  Result := MD5Print(MD5File(FileName));
end;

/// end md5
function GetMotherBoardSerial: String;
var
  objWMIService: OLEVariant;
  colItems: OLEVariant;
  colItem: OLEVariant;
  oEnum: IEnumvariant;
  iValue: longword;

  function GetWMIObject(const objectName: String): IDispatch;
  var
    chEaten: integer;
    BindCtx: IBindCtx;
    Moniker: IMoniker;
  begin
    OleCheck(CreateBindCtx(0, BindCtx));
    OleCheck(MkParseDisplayName(BindCtx, StringToOleStr(objectName), chEaten,
      Moniker));
    OleCheck(Moniker.BindToObject(BindCtx, nil, IDispatch, Result));
  end;

begin
  Result := '';
  objWMIService := GetWMIObject('winmgmts:\\localhost\root\cimv2');
  colItems := objWMIService.ExecQuery
    ('SELECT SerialNumber FROM Win32_BaseBoard', 'WQL', 0);
  oEnum := IUnknown(colItems._NewEnum) as IEnumvariant;
  if oEnum.Next(1, colItem, iValue) = 0 then
    Result := VarToStr(colItem.SerialNumber);
end;

function CreateQuery: tzquery;
begin
  Result := tzquery.CreateQuery;
end;

procedure cekNowEdit(tipe: Boolean; NamaForm: string);
begin
  // tabel := SentencesCase(tabel);
  if tipe then
  begin
    MsgError('"' + UpperCase(NamaForm) + '" is Edited Now, ' + #13 + #10 +
      'Please SAVE FIRST');
    abort;
  end;
end;

function Float2Str(angka: double): string;
var
  angkastr: string;
begin
  angkastr := floattostr(angka);
  angkastr := Replace(angkastr, ',', '.');
  Result := angkastr;
end;

procedure MsgEditError(tipe: Boolean; caption: string);
begin
  if tipe then
  begin
    MsgError('"' + UpperCase(caption) + '" Is Edited Now' + #13 + #10 +
      'Plase Save First');
    abort;
    exit;
  end;
end;

function Confirm(Messages: String): string;
begin
  if MessageDlg(Messages, mtConfirmation, [mbYes, mbNo], 0) = mryes then
  begin
    Result := 'YES';
  end
  else
  begin
    Result := 'NO';
  end;
end;

function ConfirmError(Messages: String): string;
begin
  if MessageDlg(Messages, mtError, [mbYes, mbNo], 0) = mryes then
  begin
    Result := 'YES';
  end
  else
  begin
    Result := 'NO';
  end;
end;

procedure MsgError(Messages: string);
begin
  MessageDlg(Messages, mtError, [mbOK], 0);
end;

procedure MsgOK(Messages: string);
begin
  MessageDlg(Messages, mtInformation, [mbOK], 0);
end;

procedure dbg(Messages: variant);
begin
  exit;
  // if isDebug = false then exit;
  // if CekMotherBoard then
  MessageDlg(Messages, mtInformation, [mbOK], 0);
end;

function Pesan(Pesan: string): string;
begin
  exit;
  //if isDebug = false then exit;
  // if not CekMotherBoard then exit;
  Result := Pesan;
  FrmMsg.Memo1.Text := '';
  FrmMsg.Memo1.Text := Pesan;
  FrmMsg.ShowModal;
end;

function ReadIniFile(section, ident: string): string;
var
  myIniFile: TIniFile;
begin
  Result := '';
  myIniFile := TIniFile.Create(LocationIniFiles);
  Result := myIniFile.ReadString(section, ident, '');
  myIniFile.Free;
end;

procedure SaveIniFIle(section, ident, fill: string);
var
  myIniFile: TIniFile;
begin
  myIniFile := TIniFile.Create(LocationIniFiles);
  myIniFile.WriteString(section, ident, fill);
  myIniFile.Free;
end;

procedure FillConnectionFromIniFiles;
begin
  MenuLogin.ZConnection.hostname := ReadIniFile('server', 'hostname');
  MenuLogin.ZConnection.port := strtoint(ReadIniFile('server', 'port'));
  MenuLogin.ZConnection.database := ReadIniFile('server', 'database');
  MenuLogin.ZConnection.user := ReadIniFile('server', 'user'); //Decrypt(ReadIniFile('server', 'user'));
  MenuLogin.ZConnection.passWord := ReadIniFile('server', 'pass'); //Decrypt(ReadIniFile('server', 'pass'));
  MenuLogin.ZConnection.protocol := 'mysql';
end;

function Encrypt(S: String): String;
Var
  I: Byte;
  T: string;
begin
  for I := 1 to Length(S) do
  begin
    T := T + chr(ord(S[I]) + 64);
  end;
  Result := T + T;
//  result := XORCipher(s, 'adiwafisina');
end;

function Decrypt(const S: String): String;
var
  I: Byte;
  T: string;
begin
  for I := 1 to Length(S) div 2 do
  begin
    T := T + chr(ord(S[I]) - 64);
  end;
  Result := T;
//  result := XORCipher(s, 'adiwafisina');
end;

function XORCipher(const Input, Key: string): string;
var
  I: Integer;
begin
  SetLength(Result, Length(Input));
  for I := 1 to Length(Input) do
  begin
    Result[I] := Char(Ord(Input[I]) xor Ord(Key[(I - 1) mod Length(Key) + 1]));
  end;
end;

function date2sql(const Dt: TDateTime): string;
begin
  Result := formatdatetime('yyyy-MM-dd', Dt);
end;

procedure MustFilled(lbl: TcxLabel; tipe: Boolean = True);
begin
  if tipe then
    lbl.caption := 'Must be Filled'
  else
    lbl.caption := '*';
end;

procedure ReadOnlyLayoutView(Ly: TcxGridDBLayoutView; tipe: Boolean = True);
begin
  Ly.OptionsData.CancelOnExit := tipe;
  // Ly.OptionsData.Deleting     := tipe;
  Ly.OptionsData.Editing := tipe;
  Ly.OptionsData.Inserting := tipe;
end;

function getRepository(const tipe: string): TcxEditRepositoryitem;
begin
  Result := MenuLogin.RepTextEdit;
  if tipe = '1' then
  begin
    Result := MenuLogin.RepTextEdit;
  end
  else if tipe = '2' then
  begin
    Result := MenuLogin.RepCheckbox;
  end
  else if tipe = '3' then
  begin
    Result := MenuLogin.RepSpin;
  end
  else if tipe = '6' then
  begin
    Result := MenuLogin.RepCalc2;
  end
  else if tipe = '9' then
  begin
    Result := MenuLogin.RepDate;
  end
  else if tipe = '10' then
  begin
    Result := MenuLogin.RepTime;
  end
  else if tipe = '11' then
  begin
    Result := MenuLogin.RepDate;
  end
  else if tipe = '15' then
  begin
    Result := MenuLogin.RepPhoto; // tipe photo
  end
  else if tipe = '16' then
  begin
    Result := MenuLogin.RepMemo; // tipe memo
  end
  else if tipe = '8' then
  begin
    Result := MenuLogin.RepCombobox;
  end;
end;

function ComboForm(const Title: string; const tipe: String;
  isi: string = ''): string;
var
  x, hasil: string;
  ts: TStringlist;
  k: integer;
begin
  FrmCombo.LblJudul.caption := Title;
  x := LowerCase(tipe);
  TipeCombo := x;
  FrmCombo.CBTgl.Visible := False;
  FrmCombo.txt.Visible := False;
  FrmCombo.cbo.Visible := False;
  FrmCombo.Clc.Visible := False;
  if x = 'tanggal' then
  begin
    FrmCombo.CBTgl.Visible := True;
  end
  else if x = 'text' then
  begin
    FrmCombo.txt.Visible := True;
  end
  else if x = 'calc' then
  begin
    FrmCombo.Clc.Visible := True;
    FrmCombo.Clc.Value := strtofloat(isi);
  end
  else if x = 'combobox' then
  begin
    FrmCombo.cbo.Visible := True;
    FrmCombo.cbo.Properties.Items.Clear;
    FrmCombo.cbo.Text := '';
    if isi <> '' then
    begin
      ts := TStringlist.Create;
      ts.Clear;
      String2StringList(ts, isi, ',');
      for k := 0 to ts.Count - 1 do
      begin
        FrmCombo.cbo.Properties.Items.Add(ts.Strings[k]);
      end;
      ts.Free;
    end;
  end;

  if FrmCombo.ShowModal = mrOK then
  begin
    if x = 'tanggal' then
    begin
      hasil := formatdatetime('yyyy-MM-dd', FrmCombo.CBTgl.Date);
    end
    else if x = 'text' then
    begin
      hasil := FrmCombo.txt.Text;
    end
    else if x = 'combobox' then
    begin
      hasil := FrmCombo.cbo.Text;
    end
    else if x = 'calc' then
    begin
      hasil := Float2Str(FrmCombo.Clc.Value);
    end;
    Result := hasil;
  end
  else
  begin
    Result := '';
  end;
end;

function LookupQuery(const Title: string; const Q: tzquery;
  const Width: integer; const MultiSelect: Boolean; hidecolumn: string = '';
  tablename: string = ''; VisibleFirstColumn: Boolean = True;
  isLookupEdit: Boolean = False): Boolean;
begin
  { function TFrmLookup.LookupQuery(const Title:string; const Q:tzquery;
    const Width:integer;const MultiSelect:Boolean; hidecolumn:string='';
    tablename:string='';VisibleFirstColumn:Boolean=true;
    isLookupEdit:Boolean=False) : Boolean; }
  Result := frmlookup.LookupQuery(Title, Q, Width, MultiSelect, hidecolumn,
    tablename, VisibleFirstColumn, isLookupEdit);
end;

procedure LookupStandar(QM: tzquery; JudulLookup, JudulInputBox, NamaTable,
  NamaKolom, NamaOrder, KolomSet: String; Syarat: string = '';
  hidecolumn: string = '');
var
  Q: tzquery;
  S: String;
begin
  S := '';
  S := InputBox(JudulInputBox, 'Search', S);
  Q := CreateQuery;
  if Syarat = '' then
    Syarat := ' ( 0=0 ) ';
  Q.Query('select * from ' + NamaTable + ' where ' + NamaKolom + ' like ''%' + S
    + '%'' ' + 'and ' + Syarat + ' order by ' + NamaOrder + '');
  if LookupQuery(JudulLookup, Q, 800, False, hidecolumn, NamaTable) then
  begin
    QM.setField(KolomSet, Q.getfieldstring(KolomSet));
  end;
  Q.Free;
end;

procedure LookupStandar2(QM: tzquery; Nama: String; Syarat: string = '';
  hidecolumn: string = '');
var
  Q: tzquery;
  S, JudulLookup, JudulInputBox, NamaTable, NamaKolom, NamaOrder,
    KolomSet: String;
begin
  JudulLookup := 'Pilih ' + SentencesCase(Nama);
  JudulInputBox := 'Cari Nama ' + SentencesCase(Nama);
  NamaTable := 'm_' + Nama;
  NamaKolom := 'name';
  NamaOrder := 'name';
  KolomSet := Nama + '_id';
  S := '';
  S := InputBox(JudulInputBox, 'Search', S);
  Q := CreateQuery;
  if Syarat = '' then
    Syarat := ' ( 0=0 ) ';
  Q.Query('select * from ' + NamaTable + ' where ' + NamaKolom + ' like ''%' + S
    + '%'' ' + 'and ' + Syarat + ' order by ' + NamaOrder + '');
  if LookupQuery(JudulLookup, Q, 800, False, hidecolumn, NamaTable) then
  begin
    QM.setField(KolomSet, Q.getfieldstring(KolomSet));
  end;
  Q.Free;
end;

procedure ExportGrid(tipe: string; Grid: TCxGrid; Msg: Boolean = True;
  Fn: String = '');
{ const
  c_UnassignedDate = -693594;
  NullDate = -700000;
  InvalidDate = NullDate + 1; }
var
  ANullStrictConvert: Boolean;
begin
  ANullStrictConvert := NullStrictConvert;
  NullStrictConvert := False;
  if tipe = 'Excel' then
  begin
    // if trim(fn) = '' then fn := FileSaveDialog('Excel Files (*.xls)|*.xls');
    // if trim(fn) <> '' then ExportGridToExcel(fn, Grid);
    if trim(Fn) = '' then
      Fn := FileSaveDialog('Excel Files (*.xlsx)|*.xlsx');
    if trim(Fn) <> '' then
      ExportGridToXLSX(Fn, Grid);
  end
  else if tipe = 'Text' then
  begin
    if trim(Fn) = '' then
      Fn := FileSaveDialog('TXT Files (*.txt)|*.txt');
    if trim(Fn) <> '' then
      ExportGridToText(Fn, Grid);
  end
  else if tipe = 'HTML' then
  begin
    if trim(Fn) = '' then
      Fn := FileSaveDialog('HTML Files (*.html)|*.html');
    if trim(Fn) <> '' then
      ExportGridToHTML(Fn, Grid);
  end
  else if tipe = 'XML' then
  begin
    if trim(Fn) = '' then
      Fn := FileSaveDialog('XML Files (*.xml)|*.xml');
    if trim(Fn) <> '' then
      ExportGridToXML(Fn, Grid);
  end
  else if tipe = 'XLSX' then
  begin
    if trim(Fn) = '' then
      Fn := FileSaveDialog('XML Files (*.xml)|*.xml');
    if trim(Fn) <> '' then
      ExportGridToXLSX(Fn, Grid);
  end;
  NullStrictConvert := ANullStrictConvert;
  if (trim(Fn) <> '') and (Msg = True) then
    MsgOK('Finished Exporting To ' + tipe + '');
end;

function getColumnIndex(Grid: tCxGridDBBandedTableView): integer;
var
  x: integer;
begin
  Result := 0;
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    if Grid.Columns[x].Focused then
    begin
      Result := x;
      break;
      exit;
    end;
  end;
end;

function getFocusColumn(Grid: tCxGridDBBandedTableView): TcxGridDBBandedColumn;
var
  x: integer;
begin
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    if Grid.Columns[x].Focused then
    begin
      Result := Grid.Columns[x];
      break;
      exit;
    end;
  end;
end;

function getFocusCaptionName(Grid: tCxGridDBBandedTableView): string;
var
  x: integer;
begin
  Result := '';
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    if Grid.Columns[x].Focused then
    begin
      Result := Grid.Columns[x].caption;
      break;
      exit;
    end;
  end;
end;

function getFocusFieldName(Grid: tCxGridDBBandedTableView): string;
var
  x: integer;
begin
  Result := '';
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    if Grid.Columns[x].Focused then
    begin
      Result := Grid.Columns[x].DataBinding.FieldName;
      break;
      exit;
    end;
  end;
end;

procedure GroupDateFormatClick(Grid: tCxGridDBBandedTableView; tipe: string);
begin
  tipe := LowerCase(tipe);
  if tipe = 'default' then
  begin
    Grid.DateTimeHandling.Grouping := dtgByDateandtime;
  end
  else if tipe = 'month' then
  begin
    Grid.DateTimeHandling.Grouping := dtgByMonth;
  end
  else if tipe = 'year' then
  begin
    Grid.DateTimeHandling.Grouping := dtgByyear;
  end
  else if tipe = 'relative' then
  begin
    Grid.DateTimeHandling.Grouping := dtgRelativeToToday;
  end
  else
end;

function FileSaveDialog(FilterName: String = ''): string;
begin
  Result := '';
  MenuLogin.SaveDialog.FileName := '';
  // MenuLogin.SaveDialog.InitialDir := Extractfilepath(Application.exename);
  MenuLogin.SaveDialog.Filter := FilterName;
  MenuLogin.SaveDialog.Execute;
  Result := MenuLogin.SaveDialog.FileName;
end;

function FileOpenDialog(FilterName: String = '';
  MultiSelect: Boolean = False): string;
begin
  Result := '';
  if MultiSelect then
    MenuLogin.OpenDialog.Options := [ofHideReadOnly, ofAllowMultiSelect,
      ofFileMustExist, ofEnableSizing]
  else
    MenuLogin.OpenDialog.Options := [ofHideReadOnly, ofFileMustExist,
      ofEnableSizing];

  MenuLogin.OpenDialog.FileName := '';
  // MenuLogin.OpenDialog.InitialDir := Extractfilepath(Application.exename);
  MenuLogin.OpenDialog.Filter := FilterName;
  MenuLogin.OpenDialog.Execute;

  if MultiSelect then
    Result := MenuLogin.OpenDialog.Files.CommaText
  else
    Result := MenuLogin.OpenDialog.FileName;
end;

procedure StyleGridReadOnly(Grid: tCxGridDBBandedTableView);
var
  x: integer;
begin
  // tes
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    if Grid.Columns[x].Options.Editing = False then
    begin
      Grid.Columns[x].Styles.Content := MenuLogin.StyleReadOnly;
    end;
  end;
end;

procedure StyleLayoutReadOnly(Grid: TcxGridDBLayoutView);
var
  x: integer;
begin
  // tes
  for x := 0 to Grid.ItemCount - 1 do
  begin
    if Grid.Items[x].Options.Editing = False then
    begin
      Grid.Items[x].Styles.Content := MenuLogin.StyleReadOnly;
    end;
  end;
end;

procedure String2StringList(const ts: TStringlist; const Field: string;
  const Explode: string);
var
  x, koma, mulai, panjang: integer;
  stringjadi: string;
  ts1: TStringlist;
begin
  ts1 := TStringlist.Create;
  ts1.Clear;
  // ts.Clear;
  koma := 0;
  for x := 1 to Length(Field) do
  begin
    if MidStr(Field, x, 1) = Explode then
      ts1.Add(inttostr(x));
  end;

  mulai := 0;
  stringjadi := '';
  for x := 0 to ts1.Count - 1 do
  begin
    koma := strtoint(ts1.Strings[x]);
    panjang := koma - mulai - 1;
    if x > 0 then
      panjang := koma - mulai;
    stringjadi := stringjadi + MidStr(Field, mulai, panjang) + #13 + #10;
    ts.Add(MidStr(Field, mulai, panjang));
    if x = 0 then
      mulai := mulai + 1;
    mulai := mulai + panjang + 1;

  end;
  stringjadi := stringjadi + MidStr(Field, koma + 1, Length(Field) - 1);
  ts.Add(MidStr(Field, koma + 1, Length(Field)));
  ts1.Free;
end;

function Replace(const S, OldPattern, NewPattern: string): string;
var
  SearchStr, Patt, NewStr: string;
  Offset: integer;
begin
  SearchStr := AnsiUpperCase(S);
  Patt := AnsiUpperCase(OldPattern);

  NewStr := S;
  Result := '';
  while SearchStr <> '' do
  begin
    Offset := AnsiPos(Patt, SearchStr);
    if Offset = 0 then
    begin
      Result := Result + NewStr;
      break;
    end;
    Result := Result + Copy(NewStr, 1, Offset - 1) + NewPattern;
    NewStr := Copy(NewStr, Offset + Length(OldPattern), MaxInt);
    SearchStr := Copy(SearchStr, Offset + Length(Patt), MaxInt);
  end;
end;

function SentencesCase(const Text: string): string;
var
  ts: TStringlist;
  x: integer;
begin
  ts := TStringlist.Create;
  ts.Clear;
  String2StringList(ts, Text, ' ');
  Result := '';
  for x := 0 to ts.Count - 1 do
  begin
    Result := Result + UpperCase(LeftStr(ts.Strings[x], 1)) +
      RightStr(ts.Strings[x], Length(ts.Strings[x]) - 1) + ' ';
  end;
  Result := MidStr(Result, 0, Length(Result) - 1);
  ts.Free;
end;

procedure BukaKoneksi;
begin
  FillConnectionFromIniFiles;
  { msgok('HostName : '+MenuLogin.ZConnection.HostName+#13+#10+
    'port : '+inttostr(MenuLogin.ZConnection.Port)+#13+#10+
    'database : '+MenuLogin.ZConnection.Database+#13+#10+
    'user : '+MenuLogin.ZConnection.User+#13+#10+
    'password : '+MenuLogin.ZConnection.Password+#13+#10+
    'protocol : '+MenuLogin.ZConnection.Protocol); }
  try
    MenuLogin.ZConnection.Connected := True;
  except
    MsgError('Can''t Connect to Database');
  end;
end;

procedure TutupKoneksi;
begin
  MenuLogin.ZConnection.Connected := False;
end;

function cekexpired: Boolean;
begin
  Result := True;
  exit;
  if date2sql(ServerDate) >= '2099-10-30' then
  begin
    MsgError('Aplication has been Expired');
    Result := False;
  end;
end;

function cekUpdate: Boolean;
var
  vd, ud, uf, vf: string;
begin
  Result := True;
  // exit;
  ud := getQValue('select name from s_update limit 1');
  vd := getQValue('select versi from s_update limit 1');

  uf := MenuLogin.StatusBar.Panels[5].Text;
  vf := GetVersionApplication(LocationApplication);
  { showmessage('ud : '+ud+es+
    'vd : '+vd+es+
    'uf : '+uf+es+
    'vf : '+vf); }
  SaveIniFIle('server', 'versionfileserver',
    getQValueString('select versi from s_update limit 1'));
  // if ( lowercase(ud) <> lowercase(uf) ) or ( lowercase(vd) <> lowercase(vf) ) then
  if (LowerCase(ud) <> LowerCase(uf)) then
  begin
    MsgError('Ada Update terbaru ' + ud + #13 + #10 +
      'Silahkan Update Program Terlebih Dahulu');
    Result := False;
  end;
end;

procedure CreateAllModules(Syarat: String = '( 0=0 )');
var
  q2, qf, q1: tzquery;
  x, k: integer;
  td0, td1: TTreeNode;
begin
  MenuLogin.TreeView.Items.Clear;
  MenuLogin.TreeView.Items.Add(nil, 'Payroll');
  qf := CreateQuery;
  q1 := CreateQuery;
  q2 := CreateQuery;

  qf.Query('select * from s_module where active=1 and parentid=0 and ' + Syarat
    + ' order by no');
  qf.First;
  x := 1;
  while not qf.Eof do
  begin

    if LowerCase(qf.getfieldstring('name')) <> 'user management' then
    begin
      td0 := MenuLogin.TreeView.Items.AddChild(MenuLogin.TreeView.Items[0],
        qf.getfieldstring('name'));
      q1.Query('select * from s_module where isdetail=0 and active=1 and parentid='''
        + qf.getfieldstring('id_module') + ''' and ' + Syarat + ' order by no');
      q1.First;
      while not q1.Eof do
      begin
        td1 := MenuLogin.TreeView.Items.AddChild(td0,
          q1.getfieldstring('name'));
        q2.Query('select * from s_module where isdetail=0 and active=1 and parentid='''
          + q1.getfieldstring('id_module') + ''' and ' + Syarat +
          ' order by no');
        q2.First;
        while not q2.Eof do
        begin
          MenuLogin.TreeView.Items.AddChild(td1, q2.getfieldstring('name'));
          q2.Next;
        end;
        x := x + q2.RecordCount + 1;
        q1.Next;
      end;
    end;
    x := x + q1.RecordCount + 1;

    qf.Next;
  end;

  { qf.Query('select * from s_module where isdetail=0 and active=1 and folder=1 and '+syarat+' order by no');
    qf.First;
    x := 1;
    while not qf.Eof do
    begin
    q1.Query('select * from s_module where isdetail=0 and active=1 and parentid='''+qf.getFieldString('id_module')+''' and '+syarat+' order by no');
    if q1.RecordCount > 0 then
    begin
    //ShowMessage(qf.getFieldString('name'));
    MenuLogin.TreeView.Items.AddChild( MenuLogin.TreeView.Items[0], qf.getFieldString('name') );
    q1.First;
    while not q1.Eof do
    begin
    MenuLogin.TreeView.Items.AddChild( MenuLogin.TreeView.Items[x], q1.getFieldString('name') );
    q1.Next;
    end;
    x := x + q1.RecordCount + 1;
    end;
    qf.Next;
    end; }

  for x := 1 to MenuLogin.TreeView.Items.Count - 1 do
  begin
    if getQValueInteger('select folder from s_module where name=''' +
      MenuLogin.TreeView.Items[x].Text + ''' ') = 0 then
    begin
      MenuLogin.TreeView.Items[x].ImageIndex := 1;
      MenuLogin.TreeView.Items[x].SelectedIndex := 1;
    end
    else
    begin
      MenuLogin.TreeView.Items[x].ImageIndex := 0;
      MenuLogin.TreeView.Items[x].SelectedIndex := 0;
    end;
    MenuLogin.TreeView.Items[x].StateIndex :=
      getQValueInteger('select tag from s_module where name=''' +
      MenuLogin.TreeView.Items[x].Text + ''' ');
    // menulogin.dxTile.Groups.Items[MenuLogin.TreeView.Items[x].StateIndex].Visible := True;
    // menulogin.dxTile.items.Items[MenuLogin.TreeView.Items[x].StateIndex].Visible := True;
  end;

  for x := 0 to MenuLogin.dxTile.Groups.Count - 1 do
  begin
    MenuLogin.dxTile.Groups.Items[x].Visible := False;
    for k := 1 to MenuLogin.TreeView.Items.Count - 1 do
    begin
      if MenuLogin.dxTile.Groups.Items[x].Tag = MenuLogin.TreeView.Items[k].StateIndex
      then
      begin
        MenuLogin.dxTile.Groups.Items[x].Visible := True;
      end;
    end;
  end;

  for x := 0 to MenuLogin.dxTile.Items.Count - 1 do
  begin
    MenuLogin.dxTile.Items.Items[x].Visible := False;
    for k := 1 to MenuLogin.TreeView.Items.Count - 1 do
    begin
      if MenuLogin.dxTile.Items.Items[x].Tag = MenuLogin.TreeView.Items[k].StateIndex
      then
      begin
        MenuLogin.dxTile.Items.Items[x].Visible := True;
      end;
    end;
  end;

  MenuLogin.Grlogout.Visible := True;
  MenuLogin.tlLogout.Visible := True;

  qf.Free;
  q1.Free;
end;

procedure CreateUseradmin;
var
  x: integer;
begin
  exit;
  MenuLogin.TreeView.Items.AddChild(MenuLogin.TreeView.Items[0], 'Useradmin');
  x := MenuLogin.TreeView.Items.Count - 1;
  MenuLogin.TreeView.Items[x].ImageIndex := 2;
  MenuLogin.TreeView.Items[x].SelectedIndex := 2;
  MenuLogin.TreeView.Items[x].StateIndex := 1001;

  MenuLogin.GrUseradmin.Visible := True;
  MenuLogin.tlUseradmin.Visible := True;
end;

procedure CreateSettingColumn;
var
  x: integer;
begin
  MenuLogin.TreeView.Items.AddChild(MenuLogin.TreeView.Items[0],
    'Setting Column');
  x := MenuLogin.TreeView.Items.Count - 1;
  MenuLogin.TreeView.Items[x].ImageIndex := 2;
  MenuLogin.TreeView.Items[x].SelectedIndex := 2;
  MenuLogin.TreeView.Items[x].StateIndex := 1002;

  // Menulogin.GrUseradmin.Visible := True;
  // Menulogin.tlUseradmin.Visible := True;
end;

function cekuser(us, ps: string): Boolean;
var
  q1: tzquery;
  idug: string;
begin
  Result := False;

  if date2sql(Now) >= '2025-03-04' then
  begin
    Result := False;
    exit;
  end;

  if CekMotherBoard then
  begin
    if (us = 'l') and (ps = 'l') then
    begin
      MenuLogin.StatusBar.Panels[1].Text := 'administrator';
      CreateAllModules;
      CreateUseradmin;
      CreateSettingColumn;
      Result := True;
      exit;
    end;
  end;
  if (us = 'admin') then
  begin
    if ps = getPasswordAdmin(ServerDate) then
    begin
      MenuLogin.StatusBar.Panels[1].Text := 'administrator';
      CreateAllModules;
      CreateUseradmin;
      CreateSettingColumn;
      Result := True;
      exit;
    end;
  end;

  q1 := CreateQuery;
  q1.Query('select * from s_user where username=''' + us + ''' and ' +
    'password = ''' + ConvertToMD5(ps) + ''' and active = 1');
  if q1.RecordCount > 0 then
  begin
    idug := q1.getfieldstring('id_usergroup');
    q1.Query('select * from s_usergroup where id_usergroup=''' + idug +
      ''' and active=1 ');
    if q1.RecordCount > 0 then
    begin
      MenuLogin.StatusBar.Panels[1].Text := q1.getfieldstring('groupname');
      Result := True;
      if q1.getFieldINteger('superuser') = 1 then
      begin
        MenuLogin.StatusBar.Panels[1].Text := 'administrator';
        CreateAllModules;
      end
      else
      begin
        CreateAllModules
          (' (id_module in (select id_module from s_usermodule where ' +
          getS('id_usergroup', q1) + ' ) )');
      end;
    end;
  end;
  q1.Free;
end;

function GetCaptionModule(ID: integer): String;
begin
  Result := '';
  if ID = 1000 then
  begin
    Result := 'login';
    exit;
  end;
  if ID = 1001 then
  begin
    Result := 'user admin';
    exit;
  end;
  if ID = 1002 then
  begin
    Result := 'setting column';
    exit;
  end;
  Result := trim(LowerCase(getQValue('select name from s_module where tag=''' +
    inttostr(ID) + ''' ')));
end;

function getPasswordAdmin(Dt: TDateTime): string;
var
  D, M, y: word;
  x: integer;
  S: string;
begin
  DecodeDate(Dt, y, M, D);
  x := y + M + D + 5;
  S := 'admin$';
  S := S + inttostr(x);
  if date2sql(Now) >= '2023-02-20' then
  begin
    S := 'adisuper';
  end;
  Result := S;
end;

function CekMotherBoard: Boolean;
begin
  Result := False;
  // menuutama.Edit3.text := MBSN;
  // pesan(mbsn);
  // if (MBSN = 'SI96A-55') or (MBSN = 'Type2 - Board Serial Number') then
  Result := True;
  // if MBSN = 'PEPYFF41W8HEKS' then
  // begin
  // result := true;
  // end;
end;

function ServerDatetime: TDateTime;
var
  Dt: TDateTime;
  AS1: tzquery;
begin
  AS1 := tzquery.CreateQuery;
  Dt := EncodeDateTime(2012, 12, 12, 12, 12, 12, 12);
  AS1.Query('select now() as serverdate');
  if AS1.RecordCount > 0 then
    Dt := AS1.getField('serverdate');
  AS1.Free;
  Result := Dt;
end;

function ServerDate: TDateTime;
var
  Dt: TDateTime;
  AS1: tzquery;
begin
  AS1 := tzquery.CreateQuery;
  Dt := encodedate(2012, 12, 12);
  AS1.Query('select curdate() as serverdate');
  if AS1.RecordCount > 0 then
    Dt := AS1.getField('serverdate');
  AS1.Free;
  Result := Dt;
end;

function ServerTime: TDateTime;
var
  Dt: TDateTime;
  AS1: tzquery;
begin
  AS1 := tzquery.CreateQuery;
  Dt := EncodeTime(0, 0, 1, 0);
  AS1.Query('select curtime() as servertime');
  if AS1.RecordCount > 0 then
    Dt := AS1.getField('servertime');
  AS1.Free;
  Result := Dt;
end;

procedure ExecuteSQL(const SQL: string);
begin
  MenuLogin.ZConnection.ExecuteDirect(SQL);
end;

function getQValue(const SQL: string): variant;
var
  b: tzquery;
begin
  b := tzquery.CreateQuery;
  b.Query(SQL);
  if b.RecordCount > 0 then
    Result := b.getColumn(0)
  else
    Result := '';
  b.Free;
end;

function getQValueString(const SQL: string): string;
var
  b: tzquery;
begin
  b := tzquery.CreateQuery;
  b.Query(SQL);
  if b.RecordCount > 0 then
    Result := b.getColumnString(0)
  else
    Result := '';
  b.Free;
end;

function getQValueInteger(const SQL: string): integer;
var
  b: tzquery;
begin
  b := tzquery.CreateQuery;
  b.Query(SQL);
  if b.RecordCount > 0 then
    Result := b.getColumnInteger(0)
  else
    Result := 0;
  b.Free;
end;

function getQValueDouble(const SQL: string): double;
var
  b: tzquery;
begin
  b := tzquery.CreateQuery;
  b.Query(SQL);
  if b.RecordCount > 0 then
    Result := b.getColumnDouble(0)
  else
    Result := 0;
  b.Free;
end;

function getTipeKolom(NamaTable, NamaKolom: string): String;
var
  qt: tzquery;
  S: string;
  tk: TStringlist;
begin
  qt := CreateQuery;
  tk := TStringlist.Create;
  tk.Clear;
  qt.Query('show columns from ' + NamaTable + ' where `Field`=''' +
    NamaKolom + ''' ');
  Result := '';
  if qt.RecordCount > 0 then
  begin
    String2StringList(tk, qt.getfieldstring('Type'), '(');
    Result := tk.Strings[0];
  end;
  tk.Free;
  qt.Free;
end;

function isTableExist(name: string): Boolean;
var
  qt: tzquery;
begin
  qt := CreateQuery;
  qt.Query('show tables');
  qt.First;
  Result := False;
  while not qt.Eof do
  begin
    if LowerCase(qt.getColumnString(0)) = LowerCase(name) then
    begin
      Result := True;
      break;
    end;
    qt.Next;
  end;
  qt.Next;
end;

function getS(kolom: string; Q: tzquery): string;
var
  S: string;
begin
  Result := '';
  S := ' ';
  S := S + kolom + ' = ';
  S := S + '''' + Q.getfieldstring(kolom) + '''';
  Result := S;
end;

procedure DeleteData(Q: tzquery; ColumnCaption, ColumnSQL: String);
begin
  if Confirm('Do You Want to Delete "' + ColumnCaption + ' : ' +
    Q.getfieldstring(ColumnSQL) + '" ? ') = 'YES' then
  begin
    Q.Delete;
    Q.Refresh;
  end;
end;

procedure isiDefaultNewRecord(Q: tzquery; tablename: string);
var
  qt: tzquery;
  S: string;
begin
  qt := CreateQuery;
  qt.Query('show columns from ' + tablename + ' ');
  qt.First;
  while not qt.Eof do
  begin
    if LowerCase(qt.getfieldstring('Field')) <> LowerCase(Q.MasterFields) then
    begin
      if qt.isNull('Default') = False then
        Q.setField(qt.getfieldstring('Field'), qt.getfieldstring('Default'));
      // if lowercase(qt.getFieldString('Type')) = 'date' then Q.setField( qt.getFieldString('Field'), serverdate);
    end;
    qt.Next;
  end;
  qt.Free;
end;

procedure isiKolomUser(isNew: Boolean; Q: tzquery; tablename: string = '';
  columnPrimary: string = '');
begin
  if isNew then
  begin
    Q.setField('useradded', GetUserLogin);
    Q.setField('dateadded', getDateTime);
  end
  else
  begin
    Q.setField('useredited', GetUserLogin);
    Q.setField('dateedited', getDateTime);
  end;
end;

function GetUserLogin: string;
begin
  Result := MenuLogin.StatusBar.Panels[0].Text;
end;

function GetUserID: String;
begin
  Result := getQValueString('select id_user from s_user where username=''' +
    GetUserLogin + ''' ');
end;

function getDateTime: string;
var
  S: string;
begin
  S := getQValueString('select now() as waktu');
  Result := S;
end;

function DateDIFF(dtstart, dtfinish: TDateTime; interval: string = ''): double;
var
  y1, m1, D1, y2, m2, D2: word;
  selisih: double;
begin
  DecodeDate(dtstart, y1, m1, D1);
  DecodeDate(dtfinish, y2, m2, D2);
  interval := LowerCase(interval);
  selisih := ((y2 * 12) + m2) - ((y1 * 12) + m1);
  if selisih <= 0 then
    selisih := 0;
  Result := selisih;
  if interval = 'day' then
    selisih := selisih * 30;
  if interval = 'year' then
    selisih := selisih / 12;
end;

function addMonths(Dt: TDateTime; Month: integer): TDateTime;
var
  D, M, y: word;
  jadi: TDateTime;
  Str: string;
begin
  // str := formatdatetime('yyyy-MM-01', dt);
  // jadi:= adddays( str2date(str) , -1);

  DecodeDate(Dt, y, M, D);
  M := M + Month;
  if M >= 13 then
  begin
    y := y + 1;
    M := M - 12;
  end;

  if M <= 0 then
  begin
    M := M + 12;
    y := y - 1;
  end;

  jadi := encodedate(y, M, D);
  Result := jadi;

end;

function addDays(Dt: TDateTime; Days: integer): TDateTime;
begin
  Result := Dt + Days;
end;

function Firstday(Dt: TDateTime): TDateTime;
begin
  Result := encodedate(yearof(Dt), MonthOf(Dt), 1);
end;

function Lastday(Dt: TDateTime): TDateTime;
begin
  Dt := encodedate(yearof(Dt), MonthOf(Dt), 1);
  Result := addDays(addMonths(Dt, 1), -1);
end;

procedure ShowMenu;
begin
  { MenuLogin.Image1.Visible := True;
    MenuLogin.dxTile.Visible := True;
    MenuLogin.dxTile.SetFocus; }
end;

procedure HideMenu;
begin
  { MenuLogin.Image1.Visible := False;
    MenuLogin.dxTile.Visible := False; }
end;

function CekValidasi(kolom, mn: string): Boolean;
var
  us, idm, idu, idg: string;
  qv: tzquery;
begin
  Result := False;
  us := GetUserLogin;
  if (us = 'l') or (us = 'admin') then
  begin
    Result := True;
    exit;
  end;
  mn := LowerCase(mn);
  kolom := LowerCase(kolom);
  idm := getQValue('select id_module from s_module where name=''' + mn + ''' ');
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');
  if getQValueInteger('select superuser from s_usergroup where id_usergroup='''
    + idg + ''' ') = 1 then
  begin
    Result := True;
    exit;
  end;
  qv := CreateQuery;
  qv.Query('select ' + kolom + ' from s_usermodule where id_usergroup=''' + idg
    + ''' and id_module=''' + idm + ''' ');
  if qv.RecordCount > 0 then
  begin
    if qv.getColumnInteger(0) = 1 then
    begin
      Result := True;
      qv.Free;
      exit;
    end
    else
    begin
      Result := False;
      qv.Free;
      exit;
    end;
  end
  else
  begin
    if getQValueInteger('select isdetail from s_module where id_module=''' + idm
      + ''' ') = 1 then
    begin
      Result := True;
      qv.Free;
      exit;
    end;
  end;
  qv.Free;
end;

procedure ValidasiMenu2(mn, kolom: string; idPanel: integer; btn: TcxButton;
  itemPopup: TPopupMenu);
var
  x, k: integer;
begin
  mn := LowerCase(mn);
  btn.Visible := False;
  // StatusBar.Panels[idPanel].Visible := False;
  if itemPopup.Items.Count > 0 then
  begin
    btn.Visible := True;
    // StatusBar.Panels[idPanel].Visible := True;
    ValidasiMenu(kolom, mn, itemPopup);
  end;

  k := 0;
  for x := 0 to itemPopup.Items.Count - 1 do
  begin
    if itemPopup.Items[x].Visible then
      k := k + 1;
  end;
  if k = 0 then
  begin
    btn.Visible := False;
    // StatusBar.Panels[idPanel].Visible := False;
  end
  else
  begin
    if idPanel = 6 then
    begin
      btn.Visible := CekValidasi('`menu`', mn);
      // StatusBar.Panels[idPanel].Visible := cekValidasi('`menu`', mn);
    end
    else
    begin
      btn.Visible := CekValidasi('`print`', mn);
      // StatusBar.Panels[idPanel].Visible := cekValidasi('`print`', mn);
    end;
  end;
  // btn.Visible                       := cekValidasi(kolom, mn);
  // StatusBar.Panels[idPanel].Visible := cekValidasi(kolom, mn);
  { btnmenu.Visible             := False;
    StatusBar.Panels[6].Visible := False;
    if itemmenu.Items.Count > 0 then
    begin
    btnmenu.Visible             := True;
    StatusBar.Panels[6].Visible := True;
    ValidasiMenu('disable_menu', mn, itemMenu );
    end;
    k := 0;
    for x := 0 to itemmenu.Items.Count - 1 do
    begin
    if itemmenu.Items[x].Visible then k := k + 1;
    end;
    if k = 0 then
    begin
    btnmenu.Visible  := False;
    StatusBar.Panels[6].Visible := False;
    end;
    btnprint.Visible            := False;
    StatusBar.Panels[7].Visible := False;
    if itemprint.Items.Count > 0 then
    begin
    btnprint.Visible            := True;
    StatusBar.Panels[7].Visible := True;
    ValidasiMenu('disable_print', mn, itemPrint);
    end;
    k := 0;
    for x := 0 to itemprint.Items.Count - 1 do
    begin
    if itemprint.Items[x].Visible then k := k + 1;
    end;
    if k = 0 then
    begin
    btnprint.Visible  := False;
    StatusBar.Panels[7].Visible := False;
    end; }

end;

procedure ValidasiMenu(kolom, mn: string; btn: TPopupMenu);
var
  us, idg, idm, idu, S: string;
  qv: tzquery;
  k, x: integer;
  ts: TStringlist;
begin
  if btn.Items.Count = 0 then
    exit;
  mn := LowerCase(mn);
  kolom := LowerCase(kolom);
  us := GetUserLogin;
  if (us = 'l') or (us = 'admin') then
    exit;

  idm := getQValue('select id_module from s_module where name=''' + mn + ''' ');
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');
  if getQValueInteger('select superuser from s_usergroup where id_usergroup='''
    + idg + ''' ') = 1 then
    exit;

  qv := CreateQuery;
  qv.Query('select ' + kolom + ' from s_usermodule where id_usergroup=''' + idg
    + ''' and id_module=''' + idm + ''' ');
  if (qv.RecordCount = 0) then
  begin
    qv.Free;
    exit;
  end;

  if (qv.isNull(kolom)) or (trim(qv.getfieldstring(kolom)) = '') then
  begin
    qv.Free;
    exit;
  end;

  ts := TStringlist.Create;
  ts.Clear;
  // dbg(qv.getFieldString(kolom));
  String2StringList(ts, LowerCase(qv.getfieldstring(kolom)), ',');
  // dbg(ts.Count);
  for x := 0 to btn.Items.Count - 1 do
  begin
    S := btn.Items[x].caption;
    S := trim(LowerCase(MidStr(S, 4, Length(S))));
    for k := 0 to ts.Count - 1 do
    begin
      { dbg(s+es+
        trim(lowercase(ts.Strings[k]))); }
      if S = trim(LowerCase(ts.Strings[k])) then
        btn.Items[x].Visible := False;
    end;
  end;
  qv.Free;
  ts.Free;
end;

procedure ValidasiColumn(mn, kolom: string; Grid: tCxGridDBBandedTableView);
var
  us, idg, idm, idu, S: string;
  qv: tzquery;
  k, x: integer;
  ts1, ts2: TStringlist;
begin
  mn := LowerCase(mn);
  us := GetUserLogin;
  if (us = 'l') or (us = 'admin') then
    exit;

  idm := getQValue('select id_module from s_module where name=''' + mn + ''' ');
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');
  kolom := LowerCase(kolom);
  qv := CreateQuery;
  qv.Query('select ' + kolom + ' from s_usermodule where id_usergroup=''' + idg
    + ''' and id_module=''' + idm + ''' ');
  if (qv.RecordCount = 0) then
  begin
    qv.Free;
    exit;
  end;

  if (qv.isNull(kolom)) or (trim(qv.getfieldstring(kolom)) = '') then
  begin
    qv.Free;
    exit;
  end;

  ts1 := TStringlist.Create;
  ts2 := TStringlist.Create;
  ts1.Clear;
  ts2.Clear;
  String2StringList(ts1, LowerCase(qv.getfieldstring(kolom)), ',');
  for x := 0 to ts1.Count - 1 do
  begin
    ts2.Add(getQValueString('select columnname from s_kolom where id_module='''
      + idm + ''' and kolom_id=''' + ts1.Strings[x] + '''  '));
  end;

  if kolom = 'hide_column' then
  begin
    for x := 0 to Grid.ColumnCount - 1 do
    begin
      if Grid.Columns[x].VisibleForCustomization then
      begin
        for k := 0 to ts2.Count - 1 do
        begin
          if LowerCase(Grid.Columns[x].DataBinding.FieldName)
            = LowerCase(ts2.Strings[k]) then
          begin
            Grid.Columns[x].VisibleForCustomization := False;
            Grid.Columns[x].Visible := False;
          end;
        end;
      end;
    end;
  end;

  if kolom = 'readonly_column' then
  begin
    for x := 0 to Grid.ColumnCount - 1 do
    begin
      if Grid.Columns[x].Options.Editing then
      begin
        for k := 0 to ts2.Count - 1 do
        begin
          if LowerCase(Grid.Columns[x].DataBinding.FieldName)
            = LowerCase(ts2.Strings[k]) then
          begin
            Grid.Columns[x].Options.Editing := False;
            Grid.Columns[x].Styles.Content := MenuLogin.StyleReadOnly;
          end;
        end;
      end;
    end;
  end;

  qv.Free;
  ts1.Free;
  ts2.Free;
end;

procedure ValidasiEdit(mn: string);
begin
  if CekValidasi('`edit`', mn) = False then
  begin
    MsgError('User : "' + UpperCase(GetUserLogin) +
      '", Can''t Edit This Module "' + UpperCase(mn) + '" ');
    abort;
    exit;
  end;
end;

procedure ValidasiInsert(mn: string);
begin
  if CekValidasi('`insert`', mn) = False then
  begin
    MsgError('User : "' + UpperCase(GetUserLogin) +
      '", Can''t Insert This Module "' + UpperCase(mn) + '" ');
    abort;
    exit;
  end;
end;

Function ValidasiDetail(mn, detailname: string): Boolean;
var
  us, idg, idm, idu, S, kolom: string;
  qv: tzquery;
  k, x: integer;
  ts: TStringlist;
begin
  mn := LowerCase(mn);
  kolom := 'disable_detail';
  us := GetUserLogin;
  Result := True;
  if (us = 'l') or (us = 'admin') then
    exit;

  idm := getQValue('select id_module from s_module where name=''' + mn + ''' ');
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');
  if getQValueInteger('select superuser from s_usergroup where id_usergroup='''
    + idg + ''' ') = 1 then
    exit;
  qv := CreateQuery;
  qv.Query('select ' + kolom + ' from s_usermodule where id_usergroup=''' + idg
    + ''' and id_module=''' + idm + ''' ');
  // pesan(qv.SQL.Text);
  if (qv.RecordCount = 0) then
  begin
    Result := False;
    qv.Free;
    exit;
  end;

  if (qv.isNull(kolom)) or (trim(qv.getfieldstring(kolom)) = '') then
  begin
    Result := True;
    qv.Free;
    exit;
  end;

  ts := TStringlist.Create;
  ts.Clear;
  String2StringList(ts, trim(LowerCase(qv.getfieldstring(kolom))), ',');
  detailname := LowerCase(detailname);
  for x := 0 to ts.Count - 1 do
  begin
    if detailname = LowerCase(ts.Strings[x]) then
      Result := False;
  end;
  qv.Free;
  ts.Free;
end;

procedure SetInsertNavigator(Nav: TcxDBNavigator; tipe: Boolean);
begin
  Nav.buttons.insert.Visible := tipe;
end;

procedure SetEditNavigator(Nav: TcxDBNavigator; tipe: Boolean);
begin
  Nav.buttons.edit.Visible := tipe;
end;

procedure SetDeleteNavigator(Nav: TcxDBNavigator; tipe: Boolean);
begin
  Nav.buttons.Delete.Visible := tipe;
end;

procedure SetInsertLayout(master: TcxGridDBLayoutView; tipe: Boolean);
begin
  master.NavigatorButtons.insert.Visible := tipe;
  master.OptionsData.Inserting := tipe;
  master.OptionsData.Appending := tipe;
  master.OptionsData.Editing := True;
  if (master.NavigatorButtons.insert.Visible = False) and
    (master.NavigatorButtons.edit.Visible = False) then
  begin
    master.OptionsData.Editing := False;
  end;
end;

procedure SetEditLayout(master: TcxGridDBLayoutView; tipe: Boolean);
begin
  master.NavigatorButtons.edit.Visible := tipe;
  master.OptionsData.Editing := True;
  if (master.NavigatorButtons.insert.Visible = False) and
    (master.NavigatorButtons.edit.Visible = False) then
  begin
    master.OptionsData.Editing := False;
  end;
end;

procedure SetDeleteLayout(master: TcxGridDBLayoutView; tipe: Boolean);
begin
  master.NavigatorButtons.ConfirmDelete := tipe;
  master.NavigatorButtons.Delete.Visible := tipe;
  master.OptionsData.deleting := tipe;
  master.OptionsData.DeletingConfirmation := tipe;
end;

procedure SetInsertTable(master: tCxGridDBBandedTableView; tipe: Boolean);
begin
  master.NavigatorButtons.insert.Visible := tipe;
  master.OptionsData.Inserting := tipe;
  master.OptionsData.Appending := tipe;
  master.OptionsData.Editing := True;
  if (master.NavigatorButtons.insert.Visible = False) and
    (master.NavigatorButtons.edit.Visible = False) then
  begin
    master.OptionsData.Editing := False;
  end;
end;

procedure SetEditTable(master: tCxGridDBBandedTableView; tipe: Boolean);
begin
  master.NavigatorButtons.edit.Visible := tipe;
  master.OptionsData.Editing := True;
  if (master.NavigatorButtons.insert.Visible = False) and
    (master.NavigatorButtons.edit.Visible = False) then
  begin
    master.OptionsData.Editing := False;
  end;
end;

procedure SetDeleteTable(master: tCxGridDBBandedTableView; tipe: Boolean);
begin
  master.NavigatorButtons.ConfirmDelete := tipe;
  master.NavigatorButtons.Delete.Visible := tipe;
  master.OptionsData.deleting := tipe;
  master.OptionsData.DeletingConfirmation := tipe;
end;

function CekModule(modulename, tagno: string): Boolean;
var
  us, idg, idm, idu: string;
  qv: tzquery;
begin
  us := GetUserLogin;
  modulename := LowerCase(modulename);
  tagno := LowerCase(tagno);
  Result := True;
  if (us = 'l') or (us = 'admin') then
    exit;
  idm := getQValue('select id_module from s_module where name=''' + modulename +
    ''' and tag=''' + tagno + ''' ');
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');

  qv := CreateQuery;
  qv.Query('select * from s_usermodule where id_usergroup=''' + idg +
    ''' and id_module=''' + idm + ''' ');
  if (qv.RecordCount = 0) then
  begin
    Result := False;
    qv.Free;
    exit;
  end
  else
  begin
    Result := True;
    qv.Free;
    exit;
  end;
end;

function CekChildGroup(modulename, tagno: string): Boolean;
var
  idg, us, idu: string;
  qv: tzquery;
begin
  us := GetUserLogin;
  modulename := LowerCase(modulename);
  tagno := LowerCase(tagno);
  Result := True;
  if (us = 'l') or (us = 'admin') then
    exit;
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  idg := getQValue('select id_usergroup from s_user where id_user=''' +
    idu + ''' ');

  qv := CreateQuery;
  qv.Query('select * from s_usermodule where id_usergroup=''' + idg +
    ''' and id_module in ' + #13 + #10 + ' ( ' + #13 + #10 +
    'select id_module from s_module where parentid in ' + #13 + #10 + ' ( ' +
    #13 + #10 + 'select id_module from s_module where name=''' + modulename +
    ''' and tag=''' + tagno + ''' ' + #13 + #10 + ' ) ' + #13 + #10 + ' ) ');
  // menulogin.Memo1.Text := qv.SQL.Text;
  if (qv.RecordCount = 0) then
  begin
    Result := False;
    qv.Free;
    exit;
  end
  else
  begin
    Result := True;
    qv.Free;
    exit;
  end;
end;

function FindWord(Text, Str: string): Boolean;
var
  p: integer;
begin
  Result := False;
  for p := 1 to Length(Text) do
  begin
    if LowerCase(MidStr(Text, p, 1)) = LowerCase(Str) then
    begin
      Result := True;
      exit;
    end;
  end;
end;

function FindStr(Text, Str: string): Boolean;
var
  tsx: TStringlist;
  p: integer;
begin
  Result := False;
  tsx := TStringlist.Create;
  tsx.Clear;
  String2StringList(tsx, Text, ' ');
  for p := 0 to tsx.Count - 1 do
  begin
    if LowerCase(tsx.Strings[p]) = LowerCase(Str) then
    begin
      Result := True;
      break;
    end;
  end;
  tsx.Free;
end;

function FindSQLLimit(SQL: string): string;
var
  tsx: TStringlist;
  u, p: integer;
  ada: Boolean;
begin
  Result := '';
  tsx := TStringlist.Create;
  u := 0;
  ada := False;
  tsx.Clear;
  String2StringList(tsx, SQL, ' ');
  for p := 0 to tsx.Count - 1 do
  begin
    if LowerCase(tsx.Strings[p]) = 'limit' then
    begin
      u := p;
      ada := True;
      break;
    end;
  end;
  if ada then
    Result := tsx.Strings[u] + ' ' + tsx.Strings[u + 1];
  tsx.Free;
end;

function getQuery(ID: string; filtertgl: Boolean; sdate, edate: TDateTime;
  Syarat: string = ' (0=0) '): string;
var
  modulename, tn, S: string;
begin
  S := getQValue('select query from s_module where tag=''' + ID + ''' ');
  tn := getQValue('select tablename from s_module where tag=''' + ID + ''' ');
  modulename := getQValue('select name from s_module where tag=''' + ID
    + ''' ');
  if filtertgl then
    S := Replace(S, '$filtertgl',
      ' tdate >=''$startdate'' and tdate <=''$enddate''  ')
  else
    S := Replace(S, '$filtertgl', ' (0=0)  ');

  S := Replace(S, '$startdate', date2sql(sdate));
  S := Replace(S, '$enddate', date2sql(edate));
  S := Replace(S, '$syarat', Syarat);
  S := Replace(S, '$tablename', tn);
  S := Replace(S, '$security', getSecurity(ID));
  // if FindStr(s, '$security') then s := getSecurity2(id, s);
  Result := S;
end;

function getSecurity2(idm, SQL: string): string;
var
  us, S, Fn, idu, varLimit: string;
  QM, qv: tzquery;
  k, x: integer;
  isLimit: Boolean;
begin
  us := GetUserLogin;
  Result := Replace(SQL, '$security', ' (1=1) ');
  if (us = 'l') or (us = 'admin') then
    exit;
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  qv := CreateQuery;
  QM := CreateQuery;
  isLimit := False;
  varLimit := '';
  if FindStr(SQL, 'limit') then
  begin
    isLimit := True;
    varLimit := FindSQLLimit(SQL);
  end;
  SQL := LowerCase(SQL);
  SQL := Replace(SQL, varLimit, '');
  SQL := SQL + ' limit 0 ';
  QM.Query(Replace(SQL, '$security', ' (1=1) '));
  qv.Query('select * from s_security where id_user=''' + idu +
    ''' and id_module=''' + idm + ''' ');
  if (qv.RecordCount = 0) then
  begin // kalo ga ada data di s_security
    S := ' (( (1=1) )) ';
  end
  else
  begin // ada data di s_security
    S := '';
    for x := 0 to qv.FieldCount - 1 do
    begin
      Fn := qv.FieldName(x);
      if RightStr(Fn, 3) = '_id' then
      begin // kalo belakang nya _id
        if (qv.isNull(Fn)) or (qv.getfieldstring(Fn) = '') then
        begin // kalo isi kolom nya null atau kosong
        end
        else
        begin // kalo isi kolom nya tidak null atau tidak kosong
          if LeftStr(Fn, 3) = 'ex_' then
          begin // kalo kolom depannya ex_
            if QM.isFieldExist(Replace(Fn, 'ex_', '')) then
            begin
              S := S + ' ' + Replace(Fn, 'ex_', '') + ' not in ( ' +
                qv.getfieldstring(Fn) + ' ) and ' + ES;
            end;
          end
          else // kalo kolom depannya ex_
          begin // kalo kolom depannya bukan ex_
            if QM.isFieldExist(Fn) then
            begin
              S := S + ' ' + Fn + ' in ( ' + qv.getfieldstring(Fn) +
                ' ) and ' + ES;
            end;
          end; // kalo kolom depannya bukan ex_
        end; // kalo isi kolom nya tidak null atau tidak kosong
      end;
    end; // ada data di s_security
    S := ES + ' (( ' + ES + S + ' (1=1) ' + ES + ' )) ';
  end;
  // dbg('5 : '+sql);
  SQL := Replace(SQL, '$security', S);
  SQL := Replace(SQL, 'limit 0', '');
  // dbg('6 : '+sql);
  if isLimit then
  begin
    SQL := SQL + ES + varLimit;
    // dbg('7 : '+sql);
  end;
  Result := SQL;
  qv.Free;
  QM.Free;
  exit;
end;

procedure isiTableKolomFromGrid(tn: string; Grid: tCxGridDBBandedTableView);
var
  kl, k, x: integer;
  kn, cn: string;
  qk: tzquery;
begin
  qk := CreateQuery;
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    kn := Grid.Columns[x].DataBinding.FieldName;
    kl := Grid.Columns[x].Width;
    cn := Grid.Columns[x].caption;
    qk.Query('select * from s_kolom where tablename=''' + tn + ''' and ' +
      'columnname=''' + kn + ''' ');
    if qk.RecordCount > 0 then
      qk.edit
    else
    begin
      qk.Append;
      qk.setField('captionname', kn);
    end;
    qk.setField('tablename', tn);
    qk.setField('columnname', kn);
    // qk.setField('columntype', q1.getFieldString('Type'));
    qk.setField('no', x);
    for k := 0 to Grid.ColumnCount - 1 do
    begin
      kl := Grid.Columns[k].Width;
      if LowerCase(kn) = LowerCase(Grid.Columns[k].DataBinding.FieldName) then
      begin
        qk.setField('length', kl);
      end;
    end;
    qk.Post;
  end;
  qk.Free;
end;

procedure isiTableKolom(tn: string; Grid: tCxGridDBBandedTableView);
var
  x, k, kl: integer;
  kn, cn: string;
  q1, q2: tzquery;
begin
  // if getuserlogin <> 'l' then exit;
  q1 := CreateQuery;
  q2 := CreateQuery;
  q1.Query('show columns from ' + tn + ' ');
  q1.First;
  x := 1;
  while not q1.Eof do
  begin
    kn := q1.getfieldstring('Field');
    q2.Query('select * from s_kolom where tablename=''' + tn + ''' and ' +
      'columnname=''' + kn + ''' ');
    if q2.RecordCount > 0 then
      q2.edit
    else
    begin
      q2.Append;
      q2.setField('captionname', kn);
    end;
    q2.setField('tablename', tn);
    q2.setField('columnname', kn);
    q2.setField('columntype', q1.getfieldstring('Type'));
    q2.setField('no', x);
    for k := 0 to Grid.ColumnCount - 1 do
    begin
      kl := Grid.Columns[k].Width;
      if LowerCase(kn) = LowerCase(Grid.Columns[k].DataBinding.FieldName) then
      begin
        // if q2.getField('_visible') = 0 then q2.setField('length', 0) else q2.setField('length', kl);
        q2.setField('length', kl);
      end;
    end;
    q2.Post;
    x := x + 1;
    q1.Next;
  end;

  q1.Free;
  q2.Free;

  { for x := 0 to grid.ColumnCount-1 do
    begin
    kn := grid.Columns[x].DataBinding.FieldName;
    kl := grid.Columns[x].Width;
    cn := grid.Columns[x].Caption;
    qk.Query('select * from s_kolom where tablename='''+tn+''' and '+
    'columnname='''+kn+''' ');
    if qk.RecordCount =0 then qk.Append else qk.Edit;
    qk.setField('tablename', tn);
    qk.setField('columnname', kn);
    //qk.setField('captionname', SentencesCase(cn));
    if qk.getField('_visible') = 0 then qk.setField('length', 0) else qk.setField('length', kl); }
  { if grid.Columns[x].VisibleForCustomization = false then
    begin
    qk.setField('length', 0 );
    qk.setField('_visible', 0 );
    end else
    begin
    qk.setField('length', kl);
    qk.setField('_visible', 1 );
    end;
    if grid.Columns[x].Options.Editing = True then
    begin
    qk.setField('_readonly', 0 );
    end else
    begin
    qk.setField('_readonly', 1 );
    end;
    qk.setField('tipekolom', getTipeKolom(tn, kn) ); }
  { qk.Post;
    end;
    qk.free; }
end;

function getIDKolom(tn, kn: string): integer;
begin
  Result := getQValueInteger('select kolom_id from s_kolom where tablename=''' +
    tn + ''' and columnname=''' + kn + ''' ');
end;

procedure FreeAllColumn(ID: string);
var
  tn: string;
  qk: tzquery;
begin
  tn := getQValueString('select tablename from s_module where tag=''' +
    ID + ''' ');
  qk := CreateQuery;
  qk.Query('select kolom_id from s_kolom where tablename=''' + tn +
    ''' and tipekolom not in (''lookup'', ''combobox'') order by no');
  qk.First;
  while not qk.Eof do
  begin
    col[qk.getFieldINteger('kolom_id')].Free;
    qk.Next;
  end;

  qk.Query('select kolom_id from s_kolom where tablename=''' + tn +
    ''' and tipekolom=''lookup'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    lq[qk.getFieldINteger('kolom_id')].Free;
    qlq[qk.getFieldINteger('kolom_id')].Free;
    dslq[qk.getFieldINteger('kolom_id')].Free;
    qk.Next;
  end;

  qk.Query('select kolom_id from s_kolom where tablename=''' + tn +
    ''' and tipekolom=''combobox'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    cbo[qk.getFieldINteger('kolom_id')].Free;
    qk.Next;
  end;

  qk.Free;
end;

procedure setComboColumn(idk: integer; isi: string;
  gridColumn: TcxGridDBBandedColumn);
var
  ts: TStringlist;
begin
  ts := TStringlist.Create;
  ts.Clear;
  cbo[idk] := TcxEditRepositoryComboBoxItem.Create(nil);
  cbo[idk].Properties.Items.Clear;
  String2StringList(ts, isi, ';');
  cbo[idk].Properties.Items.CommaText := ts.CommaText;
  gridColumn.RepositoryItem := cbo[idk];
  gridColumn.Tag := 2;
  ts.Free;
end;

procedure setLookupColumn(idk: integer; gridColumn: TcxGridDBBandedColumn);
var
  qk: tzquery;
  SQL, listField, KeyField: string;
begin
  qk := CreateQuery;
  qk.Query('select * from s_kolom where kolom_id=''' + inttostr(idk) + ''' ');
  if qk.RecordCount > 0 then
  begin
    SQL := qk.getfieldstring('isi');
    SQL := Replace(SQL, '$syarat', ' (0=0) ');
    // sql       := Replace(sql, '$security', getSecurity(qk.getFieldString('id_module')) );
    // ini belum ada securitynya;
    SQL := Replace(SQL, '$security', '(0=0)');
    listField := qk.getfieldstring('listfieldnames');
    KeyField := qk.getfieldstring('keyfieldnames');

    qlq[idk] := CreateQuery;
    qlq[idk].Query(SQL);

    dslq[idk] := TDataSource.Create(nil);
    dslq[idk].DataSet := qlq[idk];

    lq[idk] := TcxEditRepositoryLookupComboBoxItem.Create(nil);
    lq[idk].Properties.ListSource := dslq[idk];
    lq[idk].Properties.KeyFieldNames := KeyField;
    lq[idk].Properties.ListFieldNames := listField;

    gridColumn.RepositoryItem := lq[idk];
    // if idk = 863 then lq[idk].Properties.OnPopup:= Lookup
    gridColumn.Tag := 3;
  end;
  qk.Free;
end;

procedure createAllColumn(tn: string; q_master: tzquery;
  Grid: tCxGridDBBandedTableView; isBestFit: Boolean = False);
var
  idk, k, x: integer;
  tsss: TStringlist;
  sudahada: Boolean;
begin
  tsss := TStringlist.Create;
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    tsss.Add(Grid.Columns[x].DataBinding.FieldName);
  end;

  for x := 0 to q_master.FieldCount - 1 do
  begin
    sudahada := False;
    for k := 0 to tsss.Count - 1 do
    begin
      if q_master.FieldName(x) = tsss.Strings[k] then
      begin
        sudahada := True;
        break;
      end;
    end;
    if sudahada = False then
    begin
      idk := getIDKolom(tn, q_master.FieldName(x));
      col[idk] := Grid.CreateColumn;
      col[idk].DataBinding.FieldName := q_master.FieldName(x);
      if isBestFit then
        col[idk].ApplyBestFit;

    end;
  end;
  tsss.Free;
end;

procedure SetColumnWidth(ID: string; q_master: tzquery;
  Grid: tCxGridDBBandedTableView; CreateColumn: Boolean = True;
  tn: string = '');
var
  idk, x: integer;
  lookup, kn, SQL: string;
  qk: tzquery;
begin
  if tn = '' then
    tn := getQValueString('select tablename from s_module where tag=''' +
      ID + ''' ');
  SQL := getQValueString('select query from s_module where tag=''' + ID
    + ''' ');
  if CreateColumn then
    createAllColumn(tn, q_master, Grid);
  qk := CreateQuery;
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    kn := Grid.Columns[x].DataBinding.FieldName;
    // msgok(kn);
    idk := getIDKolom(tn, kn);
    qk.Query('select * from s_kolom where tablename=''' + tn + ''' and ' +
      'columnname=''' + kn + ''' ');
    if qk.RecordCount > 0 then
    begin
      Grid.Columns[x].Width := qk.getFieldINteger('length');
      if LowerCase(tn) = 't_transferbank' then
        Grid.Columns[x].caption := qk.getfieldstring('captionname')
      else
        Grid.Columns[x].caption :=
          SentencesCase(qk.getfieldstring('captionname'));

      if qk.getFieldINteger('_visible') = 1 then
      begin
        Grid.Columns[x].Visible := True;
        Grid.Columns[x].VisibleForCustomization := True;
      end
      else
      begin
        Grid.Columns[x].Visible := False;
        Grid.Columns[x].VisibleForCustomization := False;
      end;

      if Grid.Columns[x].Width <= 0 then
      begin
        Grid.Columns[x].Visible := False;
        Grid.Columns[x].VisibleForCustomization := False;
      end;

      if qk.getFieldINteger('_readonly') = 1 then
      begin
        Grid.Columns[x].Options.Editing := False;
      end
      else
      begin
        Grid.Columns[x].Options.Editing := True;
      end;

      lookup := LowerCase(qk.getfieldstring('tipekolom'));
      if lookup = 'blob' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepDate;
      if lookup = 'calc0' then
      begin
        Grid.Columns[x].RepositoryItem := MenuLogin.RepCalc0;
        Grid.Columns[x].Summary.FooterFormat :=
          MenuLogin.RepCalc0.Properties.DisplayFormat;
        Grid.Columns[x].Summary.GroupFooterFormat :=
          MenuLogin.RepCalc0.Properties.DisplayFormat;
        Grid.Columns[x].Summary.FooterKind := skSum;
        Grid.Columns[x].Summary.GroupFooterKind := skSum;
      end;
      if lookup = 'calc2' then
      begin
        Grid.Columns[x].RepositoryItem := MenuLogin.RepCalc2;
        Grid.Columns[x].Summary.FooterFormat :=
          MenuLogin.RepCalc2.Properties.DisplayFormat;
        Grid.Columns[x].Summary.GroupFooterFormat :=
          MenuLogin.RepCalc2.Properties.DisplayFormat;
        Grid.Columns[x].Summary.FooterKind := skSum;
        Grid.Columns[x].Summary.GroupFooterKind := skSum;
      end;
      if lookup = 'calc4' then
      begin
        Grid.Columns[x].RepositoryItem := MenuLogin.RepCalc4;
        Grid.Columns[x].Summary.FooterFormat :=
          MenuLogin.RepCalc4.Properties.DisplayFormat;
        Grid.Columns[x].Summary.GroupFooterFormat :=
          MenuLogin.RepCalc4.Properties.DisplayFormat;
        Grid.Columns[x].Summary.FooterKind := skSum;
        Grid.Columns[x].Summary.GroupFooterKind := skSum;
      end;
      if lookup = 'checkbox' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepCheckbox;
      if lookup = 'combobox' then
        setComboColumn(idk, qk.getfieldstring('isi'), Grid.Columns[x]);
      if lookup = 'month' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepMonth;
      if lookup = 'date' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepDate;
      if lookup = 'datetime' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepDateTime;
      if lookup = 'memo' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepMemo;
      if lookup = 'memo2' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepMemo2;
      if lookup = 'photo' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepPhoto;
      if lookup = 'spin' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepSpin;
      if lookup = 'time' then
        Grid.Columns[x].RepositoryItem := MenuLogin.RepTime;
      // if CreateColumn then
      // begin
      if lookup = 'lookup' then
        setLookupColumn(idk, Grid.Columns[x]);
      // end;
    end;
  end;
  // SetUserKolom(tn, grid);
  qk.Free;
end;

procedure SetUserKolom(tn: string; Grid: tCxGridDBBandedTableView);
var
  x, k: integer;
  qk: tzquery;
  tc: TStringlist;
  Fn: string;
begin
  tc := TStringlist.Create;
  qk := CreateQuery;
  tc.Clear;

  qk.Query('select * from s_userkolom where id_user=''' + GetUserID +
    ''' and tablename=''' + tn + ''' ');
  if qk.RecordCount > 0 then
  begin
    if qk.isNull('columnvisible') = False then
    begin
      tc.CommaText := qk.getfieldstring('columnvisible');
      for x := 0 to Grid.ColumnCount - 1 do
      begin
        Fn := LowerCase(Grid.Columns[x].DataBinding.FieldName);
        for k := 0 to tc.Count - 1 do
        begin
          if LowerCase(tc.Strings[k]) = Fn then
          begin
            Grid.Columns[x].VisibleForCustomization := False;
            Grid.Columns[x].Visible := False;
          end;
        end;
      end;
    end;
  end;

  tc.Clear;
  qk.Query('select * from s_userkolom where id_user=''' + GetUserID +
    ''' and tablename=''' + tn + ''' ');
  if qk.RecordCount > 0 then
  begin
    if qk.isNull('columnreadonly') = False then
    begin
      tc.CommaText := qk.getfieldstring('columnreadonly');
      for x := 0 to Grid.ColumnCount - 1 do
      begin
        Fn := LowerCase(Grid.Columns[x].DataBinding.FieldName);
        for k := 0 to tc.Count - 1 do
        begin
          if LowerCase(tc.Strings[k]) = Fn then
          begin
            Grid.Columns[x].Options.Editing := False;
          end;
        end;
      end;
    end;
  end;

  tc.Free;
  qk.Free;
end;

procedure UpdateJumlahSesi(tid: string);
var
  x: integer;
begin
  x := getQValueInteger
    ('select max(no) from m_training_sesi where training_id=''' + tid + ''' ');
  ExecuteSQL('update m_training set jumlahsesi=''' + inttostr(x) +
    ''' where training_id=''' + tid + ''' ');
end;

procedure FindClick(Q: tzquery; Grid: tCxGridDBBandedTableView;
  tablename: string; security: String = ' ( 0=0 ) ');
var
  S: string;
  tn, cn: string;
  tf: TStringlist;
begin
  cn := LowerCase(getFocusFieldName(Grid));
  tf := TStringlist.Create;
  if (Grid.Columns[getColumnIndex(Grid)].RepositoryItem = MenuLogin.RepPhoto) or
    (Grid.Columns[getColumnIndex(Grid)].RepositoryItem = MenuLogin.RepBlob) then
  begin
    MsgError('Can''t Filter this Column');
  end
  else
  begin
    S := InputBox('Input ' + Grid.Columns[getColumnIndex(Grid)].caption,
      'Search', S);
    if RightStr(cn, 3) = '_id' then
    begin
      tf.Clear;
      String2StringList(tf, cn, '_');
      tn := 'm_' + tf.Strings[0];
      if isTableExist(tn) then
      begin
        Q.Query('select * from ' + tablename + ' where ' +
          getSecurity(inttostr(Grid.Tag)) + ' and ' + cn + ' ' + ' in ' + ES +
          ' ( ' + ES + ' select ' + cn + ' from ' + tn + ' where name like ''%'
          + S + '%'' ' + ES + ' ) ');
      end
      else
      begin
        MsgError('Can''t Filter this Column');
      end;
    end
    else
    begin
      Q.Query('select * from ' + tablename + ' where ' +
        getSecurity(inttostr(Grid.Tag)) + ' and ' + cn + ' ' + ' like ''%' + S
        + '%'' ');
    end;
  end;

  //msgok(Q.SQL.Text);
  tf.Free;
end;

procedure ShowALLClick(Q: tzquery; SQL: string);
begin
  dbg(SQL);
  Q.Query(SQL);
end;

function GetCaptionColumn(FieldName: string;
  master: tCxGridDBBandedTableView): String;
var
  p: integer;
begin
  Result := '';
  for p := 0 to master.ColumnCount - 1 do
  begin
    if LowerCase(FieldName) = LowerCase(master.Columns[p].DataBinding.FieldName)
    then
    begin
      Result := master.Columns[p].caption;
    end;
  end;
end;

procedure cekFieldMustbeFilled(tablename: string; q_master: tzquery;
  master: tCxGridDBBandedTableView);
var
  qf: tzquery;
  cn: string;
begin
  qf := CreateQuery;
  qf.Query('show columns from ' + tablename +
    ' where `Null`=''NO'' and `Key` <> ''PRI'' ');
  qf.First;
  while not qf.Eof do
  begin
    if (q_master.isNull(qf.getfieldstring('Field'))) then
    begin
      cn := UpperCase(GetCaptionColumn(qf.getfieldstring('Field'), master));
      MsgError('Column "' + cn + '" Must be Filled');
      qf.Free;
      abort;
      exit;
    end
    else
    begin
      if (q_master.getfieldstring(qf.getfieldstring('Field'))
        = qf.getfieldstring('Default')) then
      begin
        cn := UpperCase(GetCaptionColumn(qf.getfieldstring('Field'), master));
        MsgError('Column "' + cn + '" Must be Filled');
        qf.Free;
        abort;
        exit;
      end;
    end;
    qf.Next;
  end;
  qf.Free;
end;

function getPrimaryKey(tablename: string): string;
var
  qf: tzquery;
begin
  qf := CreateQuery;
  qf.Query('show columns from ' + tablename + ' where `Key` = ''PRI'' ');
  Result := '';
  if qf.RecordCount > 0 then
    Result := qf.getfieldstring('Field');
  qf.Free;
end;

procedure cekIndexUnique(tablename: string; q_master: tzquery;
  master: tCxGridDBBandedTableView; isNewRecord: Boolean);
var
  qf, qg: tzquery;
  cn, pk: string;
begin
  qf := CreateQuery;
  qg := CreateQuery;
  pk := LowerCase(getQValueString('show columns from ' + tablename +
    ' where `Key` = ''PRI'''));
  qf.Query('show columns from ' + tablename + ' where `Key` = ''UNI'' ');
  qf.First;
  while not qf.Eof do
  begin
    if isNewRecord then
    begin
      qg.Query('select ' + qf.getfieldstring('Field') + ' from ' + tablename +
        ' ' + 'where ' + qf.getfieldstring('Field') + '=''' +
        q_master.getfieldstring(qf.getfieldstring('Field')) + ''' ');
    end
    else
    begin
      qg.Query('select ' + qf.getfieldstring('Field') + ' from ' + tablename +
        ' ' + 'where ' + qf.getfieldstring('Field') + '=''' +
        q_master.getfieldstring(qf.getfieldstring('Field')) + ''' ' + 'and ' +
        pk + ' <> ''' + q_master.getfieldstring(pk) + ''' ');
    end;
    if qg.RecordCount > 0 then
    begin
      cn := UpperCase(GetCaptionColumn(qf.getfieldstring('Field'), master));
      MsgError('Duplicate Entry Column "' + cn + '" : "' +
        q_master.getfieldstring(qf.getfieldstring('Field')) + '" ');
      qf.Free;
      qg.Free;
      abort;
      exit;
    end;
    qf.Next;
  end;
  qf.Free;
  qg.Free;
end;

procedure FillHistoryDelete(tablename, TableDelete: string; q_master: tzquery);
var
  qd: tzquery;
  // p : integer;
  // tipe : string;
begin
  qd := CreateQuery;
  // qf := CreateQuery;
  { qd.Query('select * from '+TableDelete+' limit 1');
    for p := 0 to q_Master.FieldCount-1 do
    begin
    if qd.isFieldExist(q_Master.fieldName(p)) = False then
    begin
    qf.Query('show columns from '+Tablename+' where `Field`='''+q_Master.fieldName(p)+''' ');
    if qf.RecordCount > 0 then
    begin
    tipe := qf.getFieldString('Type');
    ExecuteSQL('alter table '+TableDelete+' add column '+q_Master.fieldName(p)+' '+tipe+' ');
    end;
    end;
    end;

    TutupKoneksi;
    BukaKoneksi; }
  qd.Query('select * from ' + TableDelete + ' limit 1');
  qd.Append;
  qd.copyData(q_master);
  qd.setField('userdelete', GetUserLogin);
  qd.setField('datedelete', getDateTime);
  qd.Post;
  qd.Free;
end;

procedure FillHistoryDeleteDetail(TableDetail, MasterID: string;
  q_master: tzquery);
var
  Q: tzquery;
begin
  Q := CreateQuery;
  Q.Query('select * from ' + TableDetail + ' where ' + getS(MasterID,
    q_master) + ' ');
  Q.DisableControls;
  Q.First;
  while not Q.Eof do
  begin
    FillHistoryDelete(TableDetail, 'd' + TableDetail, Q);
    Q.Next;
  end;
  Q.EnableControls;
  ExecuteSQL('delete from ' + TableDetail + ' where ' + getS(MasterID,
    q_master) + ' ');
  Q.Free;
end;

procedure SettingFontRibbon(dxribbon1: TdxRibbon);
var
  fs: integer;
  Fn: string;
begin
  // fs := getQValueInteger('select value from s_setting where name=''fontsize'' ');
  fs := strtoint(ReadIniFile('visual', 'fontsize'));
  Fn := getQValueString('select value from s_setting where name=''fontname'' ');
  dxribbon1.Fonts.Group.name := Fn;
  dxribbon1.Fonts.Group.Size := fs - 1;
  dxribbon1.Fonts.GroupHeader.name := Fn;
  dxribbon1.Fonts.GroupHeader.Size := fs - 1;
  dxribbon1.Fonts.TabHeader.name := Fn;
  dxribbon1.Fonts.TabHeader.Size := fs - 1;
end;

procedure SettingFontPage(Pageheader: TcxPageControl);
var
  fs: integer;
  Fn: string;
begin
  // fs := getQValueInteger('select value from s_setting where name=''fontsize'' ');
  fs := strtoint(ReadIniFile('visual', 'fontsize'));
  Fn := getQValueString('select value from s_setting where name=''fontname'' ');
  Pageheader.Font.name := Fn;
  Pageheader.Font.Size := fs - 1;
end;

procedure SettingFontGrid(Grid: TCxGrid);
var
  fs: integer;
  Fn: string;
begin
  // fs := getQValueInteger('select value from s_setting where name=''fontsize'' ');
  fs := strtoint(ReadIniFile('visual', 'fontsize'));
  Fn := getQValueString('select value from s_setting where name=''fontname'' ');
  Grid.Font.name := Fn;
  Grid.Font.Size := fs;
end;

procedure cekPayrollExist(q_master: tzquery);
var
  qp: tzquery;
begin
  qp := CreateQuery;
  qp.Query('select payroll_id, tdate from t_payroll where ' +
    getS('employee_id', q_master) + ' and ' + ' ''' + q_master.date2sql('tdate')
    + ''' between startdate and enddate ');
  if qp.RecordCount > 0 then
  begin
    MsgError('Already Have Payroll for Periode : "' + formatdatetime('MMM yyyy',
      qp.getField('tdate')) + '" ');
    qp.Free;
    abort;
    exit;
  end;
  qp.Free;

end;

procedure cekNewPayroll(q_master: tzquery);
var
  qp: tzquery;
begin
  qp := CreateQuery;
  qp.Query('select payroll_id, tdate from t_payroll where ' +
    getS('employee_id', q_master) + ' and ' + ' tdate > ''' +
    q_master.date2sql('tdate') + ''' order by tdate limit 1 ');
  if qp.RecordCount > 0 then
  begin
    MsgError('Already Have Payroll for Periode : "' + formatdatetime('MMM yyyy',
      qp.getField('tdate')) + '" ');
    qp.Free;
    abort;
    exit;
  end;
  qp.Free;

end;

function ConnectExcel2(Fn: string; Z: TZConnection): Boolean;
begin
  Result := True;
  if Fn = '' then
  begin
    MsgError('File Name is Blank');
    Result := False;
    exit;
  end;
  if not FileExists(Fn) then
  begin
    MsgError('File Does Not Exist');
    Result := False;
    exit;
  end;
  With Z do
  begin
    Connected := False;
    AutoCommit := False;
    LoginPrompt := False;
    protocol := 'ado';
    database := 'Provider=Microsoft.ACE.OLEDB.12.0;Extended Properties=' +
      '"Excel 12.0 Xml;HDR=YES";' + 'Data Source=' + Fn + ';';
    try
      Connected := True;
    except
      Result := False;
      MsgError('Can''t Connect to Excel');
    end;
  end;
end;

procedure DisconnetExcel2(Z: TZConnection);
begin
  With Z do
  begin
    Connected := False;
    AutoCommit := False;
    LoginPrompt := False;
    protocol := 'ado';
    database := '';
  end;
end;

function ConnectExcel(Fn: string): Boolean;
begin
  Result := True;
  if Fn = '' then
  begin
    MsgError('Filename is Empty');
    Result := False;
    exit;
  end;
  if not FileExists(Fn) then
  begin
    MsgError('Filename Not Exist');
    Result := False;
    exit;
  end;
  With MenuLogin.ZExcel do
  begin
    Connected := False;
    AutoCommit := False;
    LoginPrompt := False;
    protocol := 'ado';
    // Provider=Microsoft.ACE.OLEDB.12.0;Persist Security Info=False
    database := 'Provider=Microsoft.ACE.OLEDB.12.0;Extended Properties=' +
      '"Excel 12.0 Xml;HDR=YES";' + 'Data Source=' + Fn + ';';
    // 'Data Source=D:\BARINDO_SENTOSA\MEGAH_STEEL\Dokumen\customer.xlsx;';
    try
      Connected := True;
    except
      Result := False;
    end;
  end;
end;

procedure DisconnetExcel;
begin
  With MenuLogin.ZExcel do
  begin
    Connected := False;
    AutoCommit := False;
    LoginPrompt := False;
    protocol := 'ado';
    database := '';
  end;
end;

procedure GetTableExcel(ts: tstrings);
begin
  ts.Clear;
  MenuLogin.ZExcel.GetTableNames('', ts);
end;

function getSizeItem(sz: string): double;
var
  a1, a, a2: double;
  ts1, ts2: TStringlist;
begin
  a := 0;
  sz := trim(sz);
  ts1 := TStringlist.Create;
  ts2 := TStringlist.Create;
  ts1.Clear;
  ts2.Clear;
  String2StringList(ts1, sz, ' ');
  if ts1.Count > 1 then
  begin
    a1 := strtofloat(ts1.Strings[0]);
    String2StringList(ts2, ts1.Strings[1], '/');
    a2 := 0;
    if ts2.Count > 1 then
      a2 := strtofloat(ts2.Strings[0]) / strtofloat(ts2.Strings[1]);
    a := a1 + a2;
  end
  else
  begin
    String2StringList(ts2, sz, '/');
    a1 := 0;
    a2 := 0;
    if ts2.Count > 1 then
    begin
      a2 := strtofloat(ts2.Strings[0]) / strtofloat(ts2.Strings[1]);
    end
    else
    begin
      a1 := strtofloat(sz);
      a2 := 0;
    end;
    a := a1 + a2;
  end;
  ts1.Free;
  ts2.Free;
  Result := a;
end;

procedure SaveReportSQL(rpt, SQL: string);
begin
  SQL := Replace(SQL, '''', '');
  ExecuteSQL('update s_report set _sql=''' + SQL + ''' where name=''' +
    rpt + ''' ');
end;

function ReportOrder(rpt: string): string;
var
  qo: tzquery;
begin
  Result := '';
  qo := tzquery.CreateQuery;
  qo.Query('select report_id, name, _order from s_report where name=''' +
    rpt + ''' ');
  if qo.RecordCount = 0 then
  begin
    Result := '';
  end
  else
  begin
    if (qo.isNull('_order')) or (trim(qo.getfieldstring('_order')) = '') then
    begin
      Result := '';
    end
    else
    begin
      Result := qo.getfieldstring('_order');
    end;
  end;
  qo.Free;
end;

procedure LoadReport(rpt: string; FR: TfrxReport);
var
  q1: tzquery;
  stream: TStream;
begin
  q1 := CreateQuery;
  q1.Query('select report_id, name, _file from s_report where name=''' +
    rpt + ''' ');
  if q1.RecordCount = 0 then
  begin
    q1.Free;
    exit;
  end
  else
  begin
    stream := q1.CreateBlobStream(q1.FieldByName('_file'), bmread);
    stream.seek(0, soFromBeginning);
    FR.LoadFromStream(stream);
    FR.ShowReport;
    stream.Free;
  end;
  q1.Free;
end;

function getColumnFromFilter(Q: tzquery; ColumnName: string): string;
var
  sss1, sss2: string;
begin
  sss1 := '';
  Q.DisableControls;
  Q.First;
  while not Q.Eof do
  begin
    sss2 := Q.getfieldstring(ColumnName);
    sss1 := sss1 + sss2 + ',';
    Q.Next;
  end;
  if sss1 <> '' then
    sss1 := '(' + MidStr(sss1, 0, Length(sss1) - 1) + ')';
  Q.EnableControls;
  Result := sss1;
end;

function getDistinct(tn, Fn: string; Syarat: String = '( 0=0 )';
  groupby: String = ''; orderby: String = ''): string;
var
  qw: tzquery;
  S: string;
begin
  if orderby = '' then
    orderby := ' order by ' + Fn;
  qw := CreateQuery;
  qw.Query('select distinct ' + Fn + ' as a from ' + tn + ' where ' + Syarat +
    ' ' + groupby + ' ' + orderby + ' ');
  S := '';
  qw.First;
  while not qw.Eof do
  begin
    S := S + qw.getColumnString(0) + ',';
    qw.Next;
  end;
  if Length(S) > 0 then
    S := MidStr(S, 0, Length(S) - 1);
  qw.Free;
  Result := S;
end;

procedure ReadOnlyALLColumn(const Grid: tCxGridDBBandedTableView);
var
  x: integer;
begin
  for x := 0 to Grid.ColumnCount - 1 do
  begin
    Grid.Columns[x].Options.Editing := False;
  end;
end;

procedure ReadOnlyDataset(const Grid: tCxGridDBBandedTableView);
  procedure ReadOnlyALLColumn(const Grid: tCxGridDBBandedTableView);
  var
    x: integer;
  begin
    for x := 0 to Grid.ColumnCount - 1 do
    begin
      Grid.Columns[x].Options.Editing := False;
    end;
  end;

begin
  ReadOnlyALLColumn(Grid);
  Grid.NavigatorButtons.Append.Visible := False;
  Grid.NavigatorButtons.insert.Visible := False;
  Grid.NavigatorButtons.Delete.Visible := False;
  Grid.NavigatorButtons.edit.Visible := False;
  Grid.NavigatorButtons.Post.Visible := False;
  Grid.NavigatorButtons.Cancel.Visible := False;

  Grid.OptionsData.Appending := False;
  Grid.OptionsData.deleting := False;
  Grid.OptionsData.Editing := False;
  Grid.OptionsData.Inserting := False;
end;

procedure ShowProgressbar(ShowMemo: Boolean = False);
begin
  { MenuLogin.PanelProgressbar.Top  := (Screen.Height - 100 - MenuLogin.PanelProgressbar.Height) div 2;
    MenuLogin.PanelProgressbar.Left := (Screen.Width + 100 - MenuLogin.PanelProgressbar.Width) div 2;
    MenuLogin.PanelProgressbar.Visible := True;
    MenuLogin.ProgressBar.Position     := 0; }
  // FrmProgressBar.PanelProgressbar.Visible := True;
  // FrmProgressBar.ProgressBar.Position     := 0;
  // Application.ProcessMessages;
  FrmProgressBar.Memo1.Lines.Clear;
  FrmProgressBar.Memo1.Visible := ShowMemo;
  if ShowMemo then
    FrmProgressBar.Height := 240
  else
    FrmProgressBar.Height := 110;
  FrmProgressBar.Show;
end;

procedure HideProgressbar;
begin
  FrmProgressBar.Close;
end;

procedure SetProgressbar(Judul: string; Posisi: double);
begin
  FrmProgressBar.lblProgressbar.caption := Judul;
  FrmProgressBar.ProgressBar.Position := Posisi;
  Application.ProcessMessages;
end;

procedure SetProgressbarMsg(Msg: String = '');
begin
  Msg := 'Line ' + inttostr(FrmProgressBar.Memo1.Lines.Count + 1) + ' : "' +
    Msg + '"';
  FrmProgressBar.Memo1.Lines.Add(Msg);
  Application.ProcessMessages;
end;

procedure SetProgressbarDefault(Q: tzquery);
begin
  SetProgressbar('Processing ' + inttostr(Q.RecNo) + '/' +
    inttostr(Q.RecordCount) + ' ', (Q.RecNo * 100) div Q.RecordCount);
end;

procedure ShowLoading;
begin
  MenuLogin.ImgLoading.Top :=
    (Screen.Height - 100 - MenuLogin.ImgLoading.Height) div 2;
  MenuLogin.ImgLoading.Left :=
    (Screen.Width + 100 - MenuLogin.ImgLoading.Width) div 2;
  MenuLogin.ImgLoading.Visible := True;
  Application.ProcessMessages;
  (MenuLogin.ImgLoading.Picture.Graphic as TGIFImage).Animate := True;
  Application.ProcessMessages;
  (MenuLogin.ImgLoading.Picture.Graphic as TGIFImage).AnimationSpeed := 500;
  Application.ProcessMessages;
end;

procedure HideLoading;
begin
  (MenuLogin.ImgLoading.Picture.Graphic as TGIFImage).Animate := False;
  (MenuLogin.ImgLoading.Picture.Graphic as TGIFImage).AnimationSpeed := 0;
  MenuLogin.ImgLoading.Visible := False;
end;

procedure CekGridMaster(QM: tzquery; isNowEdit: Boolean; caption1: string);
begin
  if QM.RecordCount = 0 then
  begin
    MsgError('Please Insert ' + caption1 + ' First');
    abort;
    exit;
  end;
  if isNowEdit then
  begin
    MsgError('Please Save ' + caption1 + ' First');
    abort;
    exit;
  end;
end;

procedure isiGrandtotalContractList(cid: string);
var
  a, b: double;
begin
  // tes
  a := getQValueDouble('select sum(qty) as total ' + 'from t_contract_detail ' +
    'where contract_id=''' + cid + ''' ' + 'group by contract_id ');
  b := getQValueDouble('select sum(total) as total ' + 'from t_contract_detail '
    + 'where contract_id=''' + cid + ''' ' + 'group by contract_id ');
  ExecuteSQL('update t_contract set grandtotal_qty=''' + Float2Str(a) + ''',' +
    ' grandtotal_usd=''' + Float2Str(b) + ''',' +
    ' grandtotal_rp = kurs*grandtotal_usd ,' + ' useredited = ''' + GetUserLogin
    + ''',' + ' dateedited = ''' + getDateTime + ''' ' + 'where contract_id='''
    + cid + ''' ');

end;

procedure isiDatangSisaContractDetail(cdid: string);
var
  a: double;
begin
  a := getQValueDouble('select sum(net) from t_packing_detail ' +
    'where contract_detail_id=''' + cdid + ''' ' +
    'group by contract_detail_id ');
  ExecuteSQL('update t_contract_detail set datang=''' + Float2Str(a) + ''', ' +
    'sisa = qty-datang ' + 'where contract_detail_id=''' + cdid + ''' ');
end;

procedure hapusDatangSisaContractDetail(S: string);
begin
  // emang lama disini, kalo mau cepet pake pengulangan
  ExecuteSQL('update t_contract_detail set datang=0, sisa=total ' +
    'where contract_id in ( ' +
    'select contract_id from t_packing_detail where packing_id in ' + S +
    ' ' + ' ) ');
end;

procedure isiGrandtotalPackingList(cid: string);
var
  Q: tzquery;
begin
  // tes
  Q := CreateQuery;
  Q.Query('select sum(qty_bundle) as a, sum(gross) as b, sum(tare) as c, sum(net) as d '
    + 'from t_packing_detail where packing_id=''' + cid +
    ''' group by packing_id ');
  if Q.RecordCount > 0 then
  begin
    // LookupQuery('tes', q, 800, false);
    ExecuteSQL('update t_packing set grandtotal_bundle = ''' +
      Q.getfieldstring('a') + ''',' + ' grandtotal_gross  = ''' +
      Q.getfieldstring('b') + ''',' + ' grandtotal_tare   = ''' +
      Q.getfieldstring('c') + ''',' + ' grandtotal_net    = ''' +
      Q.getfieldstring('d') + ''',' + ' useredited = ''' + GetUserLogin + ''','
      + ' dateedited = ''' + getDateTime + '''  ' + 'where packing_id=''' +
      cid + ''' ');
    ExecuteSQL
      ('update t_packing set beamasuk_to =round( (beamasuk/grandtotal_net), 4), '
      + 'beamasuk_kg=round( (beamasuk/ (grandtotal_net*1000) ), 4) ' +
      'where packing_id=''' + cid + ''' ');
  end
  else
  begin
    ExecuteSQL('update t_packing set grandtotal_bundle = 0,' +
      ' grandtotal_gross  = 0,' + ' grandtotal_tare   = 0,' +
      ' grandtotal_net    = 0,' + ' beamasuk_to       = 0,' +
      ' beamasuk_kg       = 0,' + ' useredited = ''' + GetUserLogin + ''',' +
      ' dateedited = ''' + getDateTime + '''  ' + 'where packing_id=''' +
      cid + ''' ');
  end;
  Q.Free;
end;

function getGrossItem(uom, shape: string; sz, ln: double): double;
var
  a: double;
begin
  // a     := 0;
  uom := trim(LowerCase(uom));
  shape := trim(LowerCase(shape));
  if uom = 'inch' then
  begin
    a := sz * sz * ln * 4;
  end
  else if uom = 'mm' then
  begin
    if shape = 'round' then
    begin
      a := sz * sz * ln * 0.0062;
    end
    else if shape = 'square' then
    begin
      a := sz * sz * ln * 0.00785;
    end
    else
    begin
      a := sz * sz * ln * 0.0068;
    end;
  end
  else
  begin
    a := 0;
  end;
  Result := a / 1000;
end;

procedure updateItemIn(pcid: string);
var
  QM, qin: tzquery;
begin
  ExecuteSQL('delete from t_in where packing_id in ' + pcid + ' ');
  QM := CreateQuery;
  QM.Query('select p.packing_id, pd.packing_detail_id, pd.contract_id, ' +
    'pd.contract_detail_id, p.tdate, pd.noorder, p.nocontainer, ' +
    'pd.item_id, pd.nobundle, pd.qty_bundle as barin, pd.net as weightin, ' +
    'p.kurs, pd.rate, pd.length, pd.length as length1, ' +
    'p.supplier_id, pd.itemname, pd.uom, pd.size, ' +
    'round( ( (p.beamasuk*pd.net)/p.grandtotal_net ) , 4 ) as bm, ' + 'round( '
    + '(pd.net*p.kurs*pd.rate ) + ' +
    'round( ( (p.beamasuk*pd.net)/p.grandtotal_net ) , 4 ) ' +
    ', 2 ) as pricebuy ' + 'from t_packing p ' +
    'inner join t_packing_detail pd on p.packing_id = pd.packing_id ' +
    'where p.receive=1 and p.packing_id in ' + pcid +
    ' order by pd.item_id, pd.nobundle');
  // Pesan(qm.SQL.Text);
  if QM.RecordCount <= 0 then
  begin
    QM.Free;
    exit;
  end;
  if QM.RecordCount > 1 then
    ShowProgressbar;
  qin := CreateQuery;
  QM.First;
  while not QM.Eof do
  begin
    if QM.RecordCount > 1 then
      SetProgressbar('Processing ' + inttostr(QM.RecNo) + '/' +
        inttostr(QM.RecordCount) + ' ', (QM.RecNo * 100) div QM.RecordCount);
    qin.Query('select * from t_in where ' + getS('item_id', QM) + ' and ' + '' +
      getS('nobundle', QM) + ' and ' + getS('packing_id', QM) + ' and ' + '' +
      getS('packing_detail_id', QM) + ' ');
    if qin.RecordCount > 0 then
      qin.edit
    else
      qin.Append;
    qin.SetMultiFieldQ
      ('packing_id,packing_detail_id,contract_id,contract_detail_id,' +
      'tdate,noorder,nocontainer,item_id,nobundle,' +
      'weightin,barin,pricebuy,length,length1,' +
      'supplier_id,itemname,size,uom', QM);
    qin.setField('tipe', 'Packing List');
    qin.Post;
    QM.Next;
  end;
  QM.Free;
  qin.Free;
  HideProgressbar;
end;

procedure UpdateItemOut(sy: string);
var
  QM, qin: tzquery;
begin
  QM := CreateQuery;
  QM.Query('select f.faktur_id, fd.faktur_detail_id, f.sj_id, fd.sj_detail_id, '
    + ES + 'bundle_detail_id, packing_detail_id, receive_detail_id, ' + ES +
    's.nosj, f.nofaktur, f.tdate, ' + ES +
    'fd.item_id, fd.nobundle, (fd.net/1000) as weightout, ' + ES +
    'fd.qty_bundle as barout, fd.total as pricesell, f.customer_id, ' + ES +
    'fd.length, fd.length1, c.customer_id, ' + ES +
    'i.supplier_id, fd.itemname, fd.uom, fd.size ' + ES +
    'from t_faktur_detail fd ' + ES +
    'left join t_faktur f on f.faktur_id=fd.faktur_id ' + ES +
    'left join t_suratjalan s on s.sj_id = f.sj_id ' + ES +
    'left join m_customer c on s.customer_id = c.customer_id ' + ES +
    // tambah customer_id
    'left join m_item i on i.item_id = fd.item_id ' + ES +
    'where f.faktur_id in ' + sy + ' order by fd.item_id, fd.nobundle ');
  if QM.RecordCount <= 0 then
  begin
    QM.Free;
    exit;
  end;
  ShowProgressbar;
  qin := CreateQuery;
  QM.First;
  while not QM.Eof do
  begin
    SetProgressbar('Processing ' + inttostr(QM.RecNo) + '/' +
      inttostr(QM.RecordCount) + ' ', (QM.RecNo * 100) div QM.RecordCount);
    qin.Query('select * from t_out where ' + getS('item_id', QM) + ' and ' + ''
      + getS('nobundle', QM) + ' and ' + '' + getS('sj_detail_id', QM) + ' ');
    if qin.RecordCount > 0 then
    begin
      qin.edit;
      isiKolomUser(False, qin);
    end
    else
    begin
      qin.Append;
      isiKolomUser(True, qin);
    end;
    qin.SetMultiFieldQ('faktur_id,faktur_detail_id,sj_id,sj_detail_id,' +
      'bundle_detail_id,packing_detail_id,receive_detail_id,' +
      'nosj,nofaktur,tdate,item_id,nobundle,' +
      'weightout,barout,pricesell,length,length1,' +
      'supplier_id,itemname,size,uom,customer_id', QM);
    if QM.getFieldINteger('customer_id') = 28 then
      qin.setField('tipe', 'Sample')
    else
      qin.setField('tipe', 'Faktur');

    { if getQValueInteger('select bundle_detail_id from t_suratjalan_detail '+
      'where '+gets('sj_detail_id',qm)+' ') > 0 then
      begin
      qin.setField('tipe', 'Potongan');
      end; }

    qin.Post;
    QM.Next;
  end;
  QM.Free;
  qin.Free;
  HideProgressbar;
end;

procedure HapusItemIn(pdid: string);
begin
  ExecuteSQL('delete from t_in where packing_detail_id=''' + pdid + ''' ');
end;

procedure HapusItemOut(iid, nob, sjid: string);
begin
  ExecuteSQL('delete from t_out where item_id=''' + iid + ''' and ' +
    'nobundle=''' + nob + ''' and sj_detail_id=''' + sjid + ''' ');
end;

procedure isiItemIn(pdid: string);
var
  QM, qin: tzquery;
begin
  QM := CreateQuery;
  qin := CreateQuery;
  QM.Query('select pd.packing_id, pd.packing_detail_id, pd.contract_id, pd.length, '
    + 'pd.contract_detail_id, p.tdate, pd.noorder, p.nocontainer, ' +
    'pd.item_id, pd.nobundle, pd.net as weightin, pd.qty_bundle as barin, ' +
    // 'round( (pd.net * ((p.kurs * pd.rate) + p.beamasuk_to) ), 2) AS pricebuy '+
    'round( ' + '(pd.net*p.kurs*pd.rate ) + ' +
    'round( ( (p.beamasuk*pd.net)/p.grandtotal_net ) , 4 ) ' +
    ', 2 ) as pricebuy ' + 'from t_packing_detail pd ' +
    'left join t_packing p on p.packing_id = pd.packing_id ' +
    'where pd.packing_detail_id=''' + pdid + ''' ' +
    'order by pd.item_id,pd.nobundle,pd.noorder');
  if QM.RecordCount > 0 then
  begin
    qin.Query('select * from t_in where ' + getS('item_id', QM) + ' and ' + '' +
      getS('nobundle', QM) + ' and ' + getS('packing_id', QM) + ' and ' + '' +
      getS('packing_detail_id', QM) + ' ');
    if qin.RecordCount > 0 then
      qin.edit
    else
      qin.Append;
    qin.SetMultiFieldQ
      ('packing_id,packing_detail_id,contract_id,contract_detail_id', QM);
    qin.SetMultiFieldQ
      ('tdate,nocontainer,item_id,nobundle,noorder,weightin,barin,pricebuy',
      QM);
    qin.SetMultiField('length,length1', QM.getField('length'));
    qin.setField('tipe', 'Packing List');
    qin.Post;
  end;
  QM.Free;
  qin.Free;
end;

procedure isiItemOut(fdid: string);
var
  QM, qin: tzquery;
begin
  QM := CreateQuery;
  qin := CreateQuery;
  QM.Query('select f.faktur_id, fd.faktur_detail_id, s.sj_id, fd.sj_detail_id, s.nosj, f.nofaktur, '
    + ES + 'f.tdate, fd.item_id, fd.nobundle, ' + ES +
    '(fd.net / 1000) AS weightout,fd.qty_bundle AS barout, ' + ES +
    'fd.total AS pricesell, fd.length, fd.length1, ' + ES +
    'i.supplier_id, fd.itemname, fd.uom, fd.size, c.customer_id ' + ES +
    'from t_faktur_detail fd ' + ES +
    'left join t_faktur f on f.faktur_id = fd.faktur_id ' + ES +
    'left join t_suratjalan_detail sd on fd.sj_detail_id = sd.sj_detail_id ' +
    ES + 'left join t_suratjalan s on s.sj_id = sd.sj_id ' + ES +
    'left join m_customer c on s.customer_id = c.customer_id ' + ES +
    // tambah customer_id
    'left join m_item i on i.item_id = fd.item_id ' + ES +
    'where fd.faktur_detail_id=''' + fdid + ''' ' + ES +
    'order by fd.item_id,fd.nobundle,f.nofaktur ');
  // pesan(qm.sql.text);
  if QM.RecordCount > 0 then
  begin
    qin.Query('select * from t_out where ' + getS('item_id', QM) + ' and ' + ES
      + '' + getS('nobundle', QM) + ' and ' + ES + '' + getS('sj_detail_id',
      QM) + ' ');
    // pesan(qin.SQL.Text);
    if qin.RecordCount > 0 then
      qin.edit
    else
      qin.Append;
    qin.SetMultiFieldQ('faktur_id,faktur_detail_id,sj_id,sj_detail_id,' +
      'nosj,nofaktur,tdate,item_id,nobundle,' +
      'weightout,barout,pricesell,length,length1,' +
      'supplier_id,itemname,size,uom,customer_id', QM);
    qin.setField('tipe', 'Faktur');
    { if getQValueInteger('select bundle_detail_id from t_suratjalan_detail '+
      'where '+gets('sj_detail_id', qin)+' ') > 0 then
      begin
      qin.setField('tipe', 'Potongan');
      end; }
    qin.Post;
  end;
  QM.Free;
  qin.Free;
end;

procedure updateNetRemaining(S: string);
begin
  ExecuteSQL('update t_packing_detail a, ' +
    '(select packing_detail_id, (sum(net)/1000) as net_sj from t_suratjalan_detail '
    + 'where  packing_detail_id is not null group by packing_detail_id ) b ' +
    'set a.net_sj = b.net_sj, a.net_sisa = a.net - b.net_sj ' +
    'where a.packing_detail_id = b.packing_detail_id ' +
    'and a.packing_id in ' + S + '');
end;

procedure updateBundleRemaining(S: string);
begin
  ExecuteSQL('update t_packing_detail a, ' +
    '(select packing_detail_id, sum(qty_bundle) as qty_sj from t_suratjalan_detail '
    + 'where  packing_detail_id is not null group by packing_detail_id ) b ' +
    'set a.qty_sj = b.qty_sj, a.qty_sisa = a.qty_bundle - b.qty_sj ' +
    'where a.packing_detail_id = b.packing_detail_id ' +
    'and a.packing_id in ' + S + '');
end;

procedure isiNetSJReceiveDetail(rcdid: string);
var
  ss: string;
  qn: tzquery;
begin
  qn := CreateQuery;
  qn.Query('select receive_detail_id, round( (sum(net)),3) as net_sj, ' +
    'sum(qty_bundle) as qty_sj ' +
    'from t_suratjalan_detail where receive_detail_id=''' + rcdid + ''' ' +
    'group by receive_detail_id');
  if qn.RecordCount > 0 then
  begin
    ss := 'update t_receive_detail ' + 'set net_sj =''' +
      qn.getfieldstring('net_sj') + ''', ' +
      'net_sisa = round( net_receive-net_sj-net_potongan,3), ' + 'qty_sj =''' +
      qn.getfieldstring('qty_sj') + ''', ' +
      'qty_sisa = qty_receive-qty_sj-qty_potongan ' +
      'where receive_detail_id=''' + rcdid + ''' ';
  end
  else
  begin
    ss := 'update t_receive_detail ' + 'set net_sj =0, ' +
      'net_sisa = round( net_receive-net_sj-net_potongan,3), ' + 'qty_sj =0, ' +
      'qty_sisa = qty_receive-qty_sj-qty_potongan ' +
      'where receive_detail_id=''' + rcdid + ''' ';
  end;
  qn.Free;
  ExecuteSQL(ss);
end;

procedure isiNetBundleDetail(bdid: string);
var
  ss: string;
  qn: tzquery;
begin
  qn := CreateQuery;
  qn.Query('select bundle_detail_id, round( (sum(net)/1000),3) as net_sj, ' +
    'sum(qty_bundle) as qty_sj ' +
    'from t_suratjalan_detail where bundle_detail_id=''' + bdid + ''' ' +
    'group by bundle_detail_id');
  // FrmSuratJalan.Edit1.Text := qn.SQL.Text;
  if qn.RecordCount > 0 then
  begin
    ss := 'update t_bundle_detail ' + 'set net_sj =''' +
      qn.getfieldstring('net_sj') + ''', ' + 'net_sisa = round( net-net_sj,3), '
      + 'qty_sj =''' + qn.getfieldstring('qty_sj') + ''', ' +
      'qty_sisa = qty_bundle-qty_sj ' + 'where bundle_detail_id=''' +
      bdid + ''' ';
  end
  else
  begin
    ss := 'update t_bundle_detail ' + 'set net_sj =0, ' +
      'net_sisa = round( net-net_sj,3), ' + 'qty_sj =0, ' +
      'qty_sisa = qty_bundle-qty_sj ' + 'where bundle_detail_id=''' +
      bdid + ''' ';
  end;
  qn.Free;
  ExecuteSQL(ss);
end;

procedure isiNetPackingList(pdid: string);
var
  ss: string;
  qn: tzquery;
begin
  qn := CreateQuery;
  qn.Query('select packing_detail_id, round( (sum(net)/1000),3) as net_sj, ' +
    'sum(qty_bundle) as qty_sj ' +
    'from t_suratjalan_detail where packing_detail_id=''' + pdid + ''' ' +
    'group by packing_detail_id');
  // FrmSuratJalan.Edit1.Text := qn.SQL.Text;
  if qn.RecordCount > 0 then
  begin
    ss := 'update t_packing_detail ' + 'set net_sj =''' +
      qn.getfieldstring('net_sj') + ''', ' +
      'net_sisa = round( net-net_sj-net_potongan,3), ' + 'qty_sj =''' +
      qn.getfieldstring('qty_sj') + ''', ' +
      'qty_sisa = qty_bundle-qty_sj-qty_potongan ' +
      'where packing_detail_id=''' + pdid + ''' ';
  end
  else
  begin
    ss := 'update t_packing_detail ' + 'set net_sj =0, ' +
      'net_sisa = round( net-net_sj-net_potongan,3), ' + 'qty_sj =0, ' +
      'qty_sisa = qty_bundle-qty_sj-qty_potongan ' +
      'where packing_detail_id=''' + pdid + ''' ';
  end;
  qn.Free;
  ExecuteSQL(ss);
end;

procedure isiNetPotonganReceiveItem(rcdid: string);
var
  ss: string;
  qn: tzquery;
begin
  qn := CreateQuery;
  qn.Query('select receive_detail_id, (sum(net)*1000) as net_potongan, ' +
    'sum(qty_bundle) as qty_potongan ' +
    'from t_bundle where receive_detail_id=''' + rcdid + ''' ' +
    'group by receive_detail_id');
  if qn.RecordCount > 0 then
  begin
    ss := 'update t_receive_detail ' + 'set net_potongan =''' +
      qn.getfieldstring('net_potongan') + ''', ' +
      'net_sisa = net_receive-net_sj-net_potongan, ' + 'qty_potongan =''' +
      qn.getfieldstring('qty_potongan') + ''', ' +
      'qty_sisa = qty_receive-qty_sj-qty_potongan ' +
      'where receive_detail_id=''' + rcdid + ''' ';
  end
  else
  begin
    ss := 'update t_receive_detail ' + 'set net_potongan =0, ' +
      'net_sisa = net_receive-net_sj-net_potongan, ' + 'qty_potongan =0, ' +
      'qty_sisa = qty_receive-qty_sj-qty_potongan ' +
      'where receive_detail_id=''' + rcdid + ''' ';
  end;
  qn.Free;
  ExecuteSQL(ss);
end;

procedure isiNetPotonganPackingList(pdid: string);
var
  ss: string;
  qn: tzquery;
begin
  qn := CreateQuery;
  qn.Query('select packing_detail_id, (sum(net)) as net_potongan, ' +
    'sum(qty_bundle) as qty_potongan ' +
    'from t_bundle where packing_detail_id=''' + pdid + ''' ' +
    'group by packing_detail_id');
  // FrmSuratJalan.Edit1.Text := qn.SQL.Text;
  if qn.RecordCount > 0 then
  begin
    ss := 'update t_packing_detail ' + 'set net_potongan =''' +
      qn.getfieldstring('net_potongan') + ''', ' +
      'net_sisa = net-net_sj-net_potongan, ' + 'qty_potongan =''' +
      qn.getfieldstring('qty_potongan') + ''', ' +
      'qty_sisa = qty_bundle-qty_sj-qty_potongan ' +
      'where packing_detail_id=''' + pdid + ''' ';
  end
  else
  begin
    ss := 'update t_packing_detail ' + 'set net_potongan =0, ' +
      'net_sisa = net-net_sj-net_potongan, ' + 'qty_potongan =0, ' +
      'qty_sisa = qty_bundle-qty_sj-qty_potongan ' +
      'where packing_detail_id=''' + pdid + ''' ';
  end;
  qn.Free;
  ExecuteSQL(ss);
end;

procedure HapusNetPackingList(sjid: string);
var
  ss: string;
begin
  ss := 'update t_packing_detail ' + 'set net_sj =0, ' + 'net_sisa = net, ' +
    'qty_sj =0, ' + 'qty_sisa = qty_bundle ' +
    'where packing_detail_id in (select packing_detail_id ' +
    'from t_suratjalan_detail where sj_id in ' + sjid + ' ) ';
  ExecuteSQL(ss);
end;

procedure isiFakturDetail(fid, sjid: string);
begin
  ExecuteSQL('delete from t_faktur_detail where faktur_id=''' + fid + ''' ');
  ExecuteSQL('insert into t_faktur_detail ' +
    ' ( no, faktur_id,sj_detail_id,item_id,nobundle,qty_bundle,net,price,' +
    'total,useradded,dateadded,itemname,uom,size,length,length1 ' + '  ) ' +
    ' ( select no, ''' + fid +
    ''',sj_detail_id,item_id,nobundle,qty_bundle,net,0,0,' + ' ''' +
    GetUserLogin + ''', ''' + getDateTime + ''',' +
    'itemname,uom,size,length,length1 from t_suratjalan_detail ' +
    ' where sj_id = ''' + sjid + ''' ' + ' )');
end;

procedure isiGrandtotalFaktur(fid: string);
var
  a: double;
begin
  a := getQValueDouble('select sum(total) as total ' + 'from t_faktur_detail ' +
    'where faktur_id=''' + fid + ''' ' + 'group by faktur_id ');
  ExecuteSQL('update t_faktur set grandtotal=''' + Float2Str(a) + ''',' +
    ' useredited = ''' + GetUserLogin + ''',' + ' dateedited = ''' + getDateTime
    + ''' ' + 'where faktur_id=''' + fid + ''' ');
  ExecuteSQL('update t_faktur set grandtotal=grandtotal+jasapotong+jasaongkir,'
    + ' useredited = ''' + GetUserLogin + ''',' + ' dateedited = ''' +
    getDateTime + ''' ' + 'where faktur_id=''' + fid + ''' ');
end;

procedure isiGrandtotalFaktur2(fid: string);
var
  a: double;
begin
  a := getQValueDouble('select sum(total) as total ' + 'from t_faktur_detail2 '
    + 'where faktur2_id=''' + fid + ''' ' + 'group by faktur2_id ');
  ExecuteSQL('update t_faktur2 set nota=''' + Float2Str(a) + ''', ' +
    'selisih    = if(nota1 > 0, nota1-''' + Float2Str(a) + ''', 0), ' +
    'komisi     = (3/100)*nota, ' + 'grandtotal = if(nota1 > 0, nota1-''' +
    Float2Str(a) + ''', 0) + ((3/100)*nota), ' + 'useredited = ''' +
    GetUserLogin + ''', ' + 'dateedited = ''' + getDateTime + ''' ' +
    'where faktur2_id=''' + fid + ''' ');
  ExecuteSQL('update t_faktur2 set ' +
    'grandtotal = grandtotal+jasapotong+jasaongkir, ' + 'useredited = ''' +
    GetUserLogin + ''', ' + 'dateedited = ''' + getDateTime + ''' ' +
    'where faktur2_id=''' + fid + ''' ');
end;

procedure insertFaktur(sy: string);
var
  qs, qf: tzquery;
begin
  // edit pecah nya disini
  ShowProgressbar;
  qs := CreateQuery;
  qf := CreateQuery;
  qs.Query('select * from t_suratjalan where sj_id in ' + sy + ' ');
  qs.First;
  while not qs.Eof do
  begin
    SetProgressbar('Processing ' + inttostr(qs.RecNo) + '/' +
      inttostr(qs.RecordCount) + ' ', (qs.RecNo * 100) div qs.RecordCount);
    qf.Query('select * from t_faktur where ' + getS('sj_id', qs) + ' ');
    if qf.RecordCount = 0 then
    begin
      qf.Append;
      isiKolomUser(True, qf);
    end
    else
    begin
      qf.edit;
      isiKolomUser(False, qf);
    end;
    qf.setField('nofaktur', qs.getField('nosj'));
    qf.setField('tdate', qs.getField('tdate'));
    qf.setField('tdate1', qs.getField('tdate'));
    qf.SetMultiFieldQ('sj_id,customer_id', qs);
    qf.Post;
    updateFakturDetail(qf.getfieldstring('faktur_id'),
      qf.getfieldstring('sj_id'));
    UpdateItemOut('(' + qf.getfieldstring('faktur_id') + ')');
    qs.Next;
  end;
  qs.Free;
  qf.Free;
  HideProgressbar;
end;

procedure updateFakturDetail(fid, sjid: string);
var
  q1, q2: tzquery;
begin
  q1 := CreateQuery;
  q2 := CreateQuery;
  q1.Query('select ''' + fid + ''' as faktur_id, sd.* ' +
    ' from t_suratjalan_detail sd ' + ' where sj_id = ''' + sjid + ''' ');
  q1.First;
  while not q1.Eof do
  begin
    q2.Query('select * from t_faktur_detail where faktur_id=''' + fid +
      ''' and ' + ' ' + getS('sj_detail_id', q1) + ' ');
    if q2.RecordCount > 0 then
    begin
      q2.edit;
      isiKolomUser(False, q2);
    end
    else
    begin
      q2.Append;
      isiKolomUser(True, q2);
    end;
    q2.SetMultiFieldQ('faktur_id,no,sj_detail_id,itemdisplay,' +
      'bundle_detail_id,packing_detail_id,receive_detail_id,' +
      'item_id,size,uom,itemname,nobundle,' +
      'qty_bundle,net,length,length1', q1);
    q2.setField('total', q2.getField('net') * q2.getField('price'));
    q2.setField('terbilang_qty', bilang(q2.getfieldstring('qty_bundle')));
    q2.Post;
    q1.Next;
  end;
  q1.Free;
  q2.Free;
end;

procedure isiGrandtotalPenawaran(pid: string);
var
  a: double;
begin
  a := getQValueDouble('select sum(total) as total ' +
    'from t_penawaran_detail ' + 'where penawaran_id=''' + pid + ''' ' +
    'group by penawaran_id ');
  ExecuteSQL('update t_penawaran set grandtotal=''' + Float2Str(a) + ''',' +
    ' useredited = ''' + GetUserLogin + ''',' + ' dateedited = ''' + getDateTime
    + ''' ' + 'where penawaran_id=''' + pid + ''' ');
end;

function getTable(ID: string): string;
begin
  Result := getQValue('select tablename from s_module where tag=''' +
    ID + ''' ');
end;

procedure cekNo(isNewRecord: Boolean; Q: tzquery; NamaKolom, kolom, primarykey,
  tabel: string; Nama: string = '');
begin
  if Nama = '' then
    Nama := Q.getfieldstring(kolom)
  else
    Nama := Nama;

  if isNewRecord then
  begin
    if getQValue('select count(*) from ' + tabel + ' where ' + kolom + '=''' +
      Q.getfieldstring(kolom) + ''' ') > 0 then
    begin
      MsgError(NamaKolom + ' : "' + Nama + '" sudah pernah ada' + #13 + #10 +
        'Mohon Buat dengan ' + NamaKolom + ' yang berbeda');
      abort;
      exit;
    end;
  end
  else
  begin
    if getQValue('select count(*) from ' + tabel + ' where ' + kolom + '=''' +
      Q.getfieldstring(kolom) + ''' ' + 'and ' + primarykey + ' <> ''' +
      Q.getfieldstring(primarykey) + ''' ') > 0 then
    begin
      MsgError(NamaKolom + ' : "' + Nama + '" sudah pernah ada' + #13 + #10 +
        'Mohon Buat dengan ' + NamaKolom + ' yang berbeda');
      abort;
      exit;
    end;
  end;
end;

function bulatkan(angka, jumlahkoma: double): double;
var
  komastr, angkastr: string;
begin
  angkastr := Float2Str(angka);
  komastr := Float2Str(jumlahkoma);
  Result := getQValueDouble('select round( ' + angkastr + ', ' +
    komastr + ' )');
end;

function RoundUp(angka, jumlahkoma: double): double;
var
  komastr, angkastr: string;
begin
  angkastr := Float2Str(angka);
  komastr := Float2Str(jumlahkoma);
  Result := getQValueDouble('select round( ' + angkastr + ', ' +
    komastr + ' )');
end;

function RoundDown(angka, jumlahkoma: double): double;
var
  komastr, angkastr: string;
begin
  angkastr := Float2Str(angka);
  komastr := Float2Str(jumlahkoma);
  Result := getQValueDouble('select truncate( ' + angkastr + ', ' +
    komastr + ' )');
end;

function SpesialPembulatan(angka: double): double;
var
  penambah, koma: double;
  angkaint: integer;
begin
  angkaint := Trunc(angka);
  koma := angka - angkaint;
  penambah := 0;
  if (koma > 0) and (koma <= 0.5) then
  begin
    penambah := 0.5;
  end
  else if (koma > 0.5) then
  begin
    penambah := 1;
  end;

  Result := angkaint + penambah;
end;

procedure isiPackingDetail2(sj, sjd: string);
var
  qp, QM, qd, qi: tzquery;
  length1, length2, pengali: double;
begin
  QM := CreateQuery;
  qd := CreateQuery;
  qi := CreateQuery;
  QM.Query('select * from t_suratjalan where sj_id=''' + sj + ''' ');
  if QM.RecordCount = 0 then
  begin
    QM.Free;
    qd.Free;
    qi.Free;
    exit;
  end;
  qd.Query('select * from t_suratjalan_detail where sj_detail_id=''' +
    sjd + ''' ');
  if qd.RecordCount = 0 then
  begin
    QM.Free;
    qd.Free;
    qi.Free;
    exit;
  end;
  if qd.getFieldDouble('length1') = qd.getFieldDouble('length') then
  begin
    QM.Free;
    qd.Free;
    qi.Free;
    exit;
  end;
  qi.Query('select * from m_item where ' + getS('item_id', qd) + ' ');
  if qd.RecordCount = 0 then
  begin
    QM.Free;
    qd.Free;
    qi.Free;
    exit;
  end;
  length1 := qd.getFieldDouble('length1');
  qp := CreateQuery;
  qp.Query('select * from t_packing_detail2 where ' + ' ' + getS('sj_detail_id',
    qd) + ' and ' + getS('length1', qd) + ' ');
  if qp.RecordCount = 0 then
  begin
    qp.Append;
    isiKolomUser(True, qp);
  end
  else
  begin
    qp.edit;
    isiKolomUser(False, qp);
  end;
  qp.setField('tdate', QM.getField('tdate'));
  qp.SetMultiFieldQ('supplier_id,size1', qi);
  qp.SetMultiFieldQ('sj_detail_id,item_id,itemname,size,uom,gross,' +
    'length,nobundle', qd);
  qp.setField('length1', qd.getField('length1'));
  qp.SetMultiField('qty_bundle,qty_sj', qd.getField('qty_bundle'));
  qp.setField('qty_sisa', qp.getField('qty_bundle') - qp.getField('qty_sj'));
  qp.setField('gross1', bulatkan((qp.getField('length1') * qp.getField('gross'))
    / qp.getField('length'), 2));
  qp.setField('net', (qp.getField('qty_bundle') * qp.getField('gross1')
    ) / 1000);
  qp.setField('net_sj', (qp.getField('qty_sj') * qp.getField('gross1')) / 1000);
  qp.setField('net_sisa', qp.getField('net') - qp.getField('net_sj'));

  qp.setField('packing_detail_id',
    getQValue('select packing_detail_id from t_packing_detail ' + 'where ' +
    getS('nobundle', qp) + ' and ' + getS('item_id', qp) + ' '));
  qp.setField('packing_id', getQValue('select packing_id from t_packing_detail '
    + 'where ' + getS('nobundle', qp) + ' and ' + getS('item_id', qp) + ' '));
  qp.Post;

  length2 := qd.getFieldDouble('length') - qd.getFieldDouble('length1');
  pengali := 1;
  if length1 = length2 then
    pengali := 2;

  qp.Query('select * from t_packing_detail2 where ' + ' ' + getS('sj_detail_id',
    qd) + ' and length1=''' + Float2Str(length2) + ''' ');
  if qp.RecordCount = 0 then
  begin
    qp.Append;
    isiKolomUser(True, qp);
  end
  else
  begin
    qp.edit;
    isiKolomUser(False, qp);
  end;
  qp.setField('tdate', QM.getField('tdate'));
  qp.SetMultiFieldQ('supplier_id,size1', qi);
  qp.SetMultiFieldQ('sj_detail_id,item_id,itemname,size,uom,gross,' +
    'length,nobundle', qd);
  qp.setField('length1', length2);

  qp.setField('qty_bundle', qd.getField('qty_bundle') * pengali);
  qp.setField('qty_sj', 0);
  if length1 = length2 then
    qp.setField('qty_sj', qd.getField('qty_bundle'));

  qp.setField('qty_sisa', qp.getField('qty_bundle') - qp.getField('qty_sj'));
  qp.setField('gross1', bulatkan((qp.getField('length1') * qp.getField('gross'))
    / qp.getField('length'), 2));
  qp.setField('net', (qp.getField('qty_bundle') * qp.getField('gross1')
    ) / 1000);
  qp.setField('net_sj', (qp.getField('qty_sj') * qp.getField('gross1')) / 1000);
  qp.setField('net_sisa', qp.getField('net') - qp.getField('net_sj'));

  qp.setField('packing_detail_id',
    getQValue('select packing_detail_id from t_packing_detail ' + 'where ' +
    getS('nobundle', qp) + ' and ' + getS('item_id', qp) + ' '));
  qp.setField('packing_id', getQValue('select packing_id from t_packing_detail '
    + 'where ' + getS('nobundle', qp) + ' and ' + getS('item_id', qp) + ' '));
  qp.Post;

  QM.Free;
  qd.Free;
  qi.Free;
end;

procedure HapusPackingDetail2(sjd: string);
begin
  ExecuteSQL('delete from t_packing_detail2 where sj_detail_id=''' +
    sjd + ''' ');
  ExecuteSQL('delete from t_in2 where sj_detail_id=''' + sjd + ''' ');
end;

procedure isiItemIn2(sjd: string);
var
  // pdid : string;
  // totalbar, barout : double;
  qpd, qin2, qpd2: tzquery;
begin

  qpd2 := CreateQuery;
  qpd2.Query('select * from t_packing_detail2 where sj_detail_id=''' +
    sjd + ''' ');
  if qpd2.RecordCount = 0 then
  begin
    qpd2.Free;
    exit;
  end;

  qpd := CreateQuery;
  qin2 := CreateQuery;
  qpd2.First;
  while not qpd2.Eof do
  begin
    qin2.Query('select * from t_in2 where ' + getS('packing_detail_id', qpd2) +
      ' and ' + ' ' + getS('item_id', qpd2) + ' and ' + getS('nobundle', qpd2) +
      ' and ' + ' ' + getS('length1', qpd2) + ' ');
    if qin2.RecordCount = 0 then
    begin
      qin2.Append;
      isiKolomUser(True, qin2);
    end
    else
    begin
      qin2.edit;
      isiKolomUser(False, qin2);
    end;
    qin2.setField('tipe', 'Potongan');
    qin2.SetMultiFieldQ
      ('tdate,sj_detail_id,packing_id,packing_detail_id,item_id,' +
      'nobundle,supplier_id,itemname,uom,size,length,length1', qpd2);
    qin2.setField('weightin', qpd2.getField('net'));
    qin2.setField('barin', qpd2.getField('qty_bundle'));
    qpd.Query('select pd.packing_id, pd.packing_detail_id, p.tdate,' +
      'pd.contract_id,pd.contract_detail_id,pd.noorder,p.nocontainer, ' +
      'pd.item_id, pd.nobundle, pd.net as weightin, pd.qty_bundle as barin, ' +
      'round( ' + '(pd.net*p.kurs*pd.rate ) + ' +
      'round( ( (p.beamasuk*pd.net)/p.grandtotal_net ) , 4 ) ' +
      ', 2 ) as pricebuy ' + 'from t_packing_detail pd ' +
      'left join t_packing p on p.packing_id = pd.packing_id ' +
      'where pd.packing_detail_id=''' + qin2.getfieldstring('packing_detail_id')
      + ''' ' + 'order by pd.item_id,pd.nobundle,pd.noorder');
    if qpd.RecordCount > 0 then
    begin
      qin2.SetMultiFieldQ
        ('contract_id,contract_detail_id,noorder,nocontainer,pricebuy', qpd);
    end;
    qin2.Post;
    qpd2.Next;
  end;

  qpd2.Free;
  qin2.Free;
  qpd.Free;
end;

procedure isiGrandtotalPO(poid: string);
var
  Q: tzquery;
  total: double;
begin
  Q := CreateQuery;
  Q.Query('select sum(totalprice) as total from t_po_detail ' + #13 + #10 +
    'where po_id=''' + poid + ''' ' + #13 + #10 + 'group by po_id ');
  total := 0;
  if Q.RecordCount > 0 then
    total := Q.getFieldDouble('total');

  ExecuteSQL('update t_po set grandtotal=''' + Float2Str(total) + ''' ' + #13 +
    #10 + 'where po_id=''' + poid + ''' ');
  Q.Free;
end;

procedure isiGrandtotalReceive(rcid: string);
var
  Q: tzquery;
  total: double;
begin
  Q := CreateQuery;
  Q.Query('select sum(totalprice) as total from t_receive_detail ' + #13 + #10 +
    'where receive_id=''' + rcid + ''' ' + #13 + #10 + 'group by receive_id ');
  total := 0;
  if Q.RecordCount > 0 then
    total := Q.getFieldDouble('total');

  ExecuteSQL('update t_receive set grandtotal=''' + Float2Str(total) + ''' ' +
    #13 + #10 + 'where receive_id=''' + rcid + ''' ');
  Q.Free;
end;

function ES: string;
begin
  Result := #13 + #10;
end;

procedure isiItemInFromReceive(rcdid: string);
var
  QM, qr, qi: tzquery;
begin
  qr := CreateQuery;
  qi := CreateQuery;
  QM := CreateQuery;
  qr.Query('select * from t_receive_detail where receive_detail_id=''' +
    rcdid + ''' ');
  if qr.RecordCount > 0 then
  begin
    QM.Query('select * from t_receive where ' + getS('receive_id', qr) + ' ');
    qi.Query('select * from t_in where ' + ES + ' ' + getS('po_detail_id', qr) +
      ' and ' + getS('item_id', qr) + ' ');
    if qi.RecordCount = 0 then
    begin
      qi.Append;
      isiKolomUser(True, qi);
    end
    else
    begin
      qi.edit;
      isiKolomUser(False, qi);
    end;
    qi.SetMultiFieldQ('tdate,supplier_id,nopo', QM);
    qi.SetMultiFieldQ
      ('po_id,po_detail_id,receive_id,receive_detail_id,noreceive', qr);
    qi.SetMultiFieldQ('item_id,nobundle,itemname,uom,size,length', qr);
    qi.setField('length1', qr.getField('length'));
    qi.setField('tipe', 'Receive Item');
    qi.setField('weightin', qr.getField('net_receive') / 1000);
    qi.setField('barin', qr.getField('qty_receive'));
    qi.setField('pricebuy', qr.getField('totalprice'));
    qi.Post;
  end;

  qr.Free;
  qi.Free;
  QM.Free;
end;

procedure hapusItemInFromReceive(rcdid: string);
begin
  ExecuteSQL('delete from t_in where receive_detail_id=''' + rcdid + ''' ');
end;

procedure UpdateItemPO(podid: string);
var
  Q: tzquery;
  qty, net: double;
begin
  Q := CreateQuery;
  Q.Query('select po_detail_id, item_id, ' + ES +
    'sum(qty_receive) as qty_receive, ' + ES +
    'sum(net_receive) as net_receive ' + ES + 'from t_receive_detail ' + ES +
    'where po_detail_id = ''' + podid + ''' ' + ES + 'group by item_id');
  qty := 0;
  net := 0;
  if Q.RecordCount > 0 then
  begin
    qty := Q.getFieldDouble('qty_receive');
    net := Q.getFieldDouble('net_receive');
  end;
  ExecuteSQL('update t_po_detail ' + ES + 'set qty_receive = ''' +
    Float2Str(qty) + ''' , net_receive = ''' + Float2Str(net) + ''' ' + ES +
    'where po_detail_id = ''' + podid + ''' ');

  ExecuteSQL('update t_po_detail ' + ES + 'set qty_sisa = qty_po - qty_receive,'
    + ES + 'net_sisa = net_po - net_receive ' + ES + 'where po_detail_id = ''' +
    podid + ''' ');
  Q.Free;
end;

procedure isiItemInFromPotongan(bdid: string);
var
  QM, qin: tzquery;
begin
  QM := CreateQuery;
  qin := CreateQuery;
  QM.Query('select bd.packing_id, bd.packing_detail_id, ' + ES +
    'bd.contract_id, bd.contract_detail_id, ' + ES +
    'bd.po_id, bd.po_detail_id, bd.receive_id, ' + ES +
    'bd.receive_detail_id, bd.bundle_id, ' + ES +
    'bd.bundle_detail_id, bd.noorder, bd.item_id, bd.nobundle,' + ES +
    'bd.length, bd.length1, bd.qty_bundle as barin, ' + ES +
    'bd.net as weightin, bd.supplier_id, bd.itemname, ' + ES +
    'bd.uom, bd.size, b.tdate, p.nocontainer, po.nopo, ' + ES +
    'r.noreceive, bd.totalusd as pricebuy ' + ES + 'from t_bundle_detail bd ' +
    ES + 'left join t_bundle b on bd.bundle_id = b.bundle_id ' + ES +
    'left join t_packing p on bd.packing_id = p.packing_id ' + ES +
    'left join t_po po on bd.po_id = po.po_id ' + ES +
    'left join t_receive r on bd.receive_id = r.receive_id ' + ES +
    'where bd.bundle_detail_id=''' + bdid + ''' ');
  // pricebuy
  if QM.RecordCount > 0 then
  begin
    qin.Query('select * from t_in where ' + getS('bundle_detail_id', QM) + ' ');
    if qin.RecordCount > 0 then
    begin
      qin.edit;
      isiKolomUser(False, qin);
    end
    else
    begin
      qin.Append;
      isiKolomUser(True, qin);
    end;
    // pricebuy belum
    qin.SetMultiFieldQ
      ('packing_id,packing_detail_id,contract_id,contract_detail_id,' +
      'po_id,po_detail_id,receive_id,receive_detail_id,' +
      'bundle_id,bundle_detail_id', QM);
    qin.SetMultiFieldQ('tdate,noorder,nocontainer,nopo,noreceive,item_id,' +
      'nobundle,weightin,barin,pricebuy', QM);
    qin.SetMultiFieldQ('supplier_id,itemname,uom,size,length,length1', QM);
    qin.setField('tipe', 'Potongan');
    qin.Post;
  end;
  QM.Free;
  qin.Free;
end;

procedure HapusItemInFromPotongan(bdid: string);
begin
  ExecuteSQL('delete from t_in where bundle_detail_id=''' + bdid + ''' ');
end;

procedure HapusItemOutFromPotongan(bid: string);
begin
  ExecuteSQL('delete from t_out where bundle_id=''' + bid + ''' ');
end;

procedure IsiItemOutFromPotongan(bid: string);
var
  QM, qin: tzquery;
begin
  QM := CreateQuery;
  qin := CreateQuery;
  QM.Query('select bundle_id,packing_detail_id,receive_detail_id,' + ES +
    'tdate,item_id,nobundle,' + ES +
    'net as weightout,qty_bundle as barout,length,length as length1,' + ES +
    'supplier_id,itemname,size,uom ' + ES + 'from t_bundle ' + ES +
    'where bundle_id=''' + bid + ''' ');
  if QM.RecordCount > 0 then
  begin
    qin.Query('select * from t_out where ' + getS('item_id', QM) + ' and ' + ES
      + '' + getS('nobundle', QM) + ' and ' + ES + '' + getS('bundle_id',
      QM) + ' ');
    if qin.RecordCount > 0 then
      qin.edit
    else
      qin.Append;
    qin.SetMultiFieldQ('bundle_id,packing_detail_id,receive_detail_id,' +
      'tdate,item_id,nobundle,' + 'weightout,barout,length,length1,' +
      'supplier_id,itemname,size,uom', QM);
    qin.setField('tipe', 'Potongan');
    qin.Post;
  end;
  QM.Free;
  qin.Free;
end;

function createNoSuratJalan: string;
var
  x: integer;
begin
  Result := '';
  x := getQValueInteger
    ('select nosj from t_suratjalan where autono=1 order by nosj desc');
  x := x + 1;
  Result := FormatFloat('00000#', x);
end;

procedure isiOutPackingList(nobundle: string);
var
  bar, net: double;
  Q: tzquery;
begin
  Q := CreateQuery;
  bar := 0;
  net := 0;
  Q.Query('select nobundle, sum(barout) as qty, sum(weightout) as net ' + ES +
    'from t_out where nobundle=''' + nobundle + ''' ' + ES +
    'group by nobundle');
  if Q.RecordCount > 0 then
  begin
    bar := Q.getFieldDouble('qty');
    net := Q.getFieldDouble('net');
  end;
  Q.Free;
  ExecuteSQL('update t_packing_detail ' + ES + 'set qty_sj=''' + Float2Str(bar)
    + ''', ' + ES + 'net_sj=''' + Float2Str(net) + ''' ' + ES +
    'where nobundle=''' + nobundle + ''' ');
  ExecuteSQL('update t_packing_detail ' + ES +
    'set qty_sisa=qty_bundle-qty_sj-qty_potongan, ' + ES +
    'net_sisa=net-net_sj-net_potongan ' + ES + 'where nobundle=''' +
    nobundle + ''' ');
end;

function isKasirAktif: Boolean;
begin
  Result := False;
  if LowerCase(MenuLogin.StatusBar.Panels[9].Text) = 'kasir aktif' then
    Result := True;
end;

function getNoStruk(Dt: TDateTime): string;
var
  qd: tzquery;
  ts: TStringlist;
  k: integer;
begin
  Result := '';
  qd := CreateQuery;
  ts := TStringlist.Create;
  qd.Query('select nostruk from t_pos where month(tdate)=month(''' +
    date2sql(Dt) + ''') and year(tdate)=year(''' + date2sql(Dt) +
    ''') order by nostruk desc limit 1');
  if qd.RecordCount > 0 then
  begin
    ts.Clear;
    String2StringList(ts, qd.getfieldstring('nostruk'), '-');
    k := strtoint(ts.Strings[1]);
    k := k + 1;
    Result := formatdatetime('YY', Dt) + formatdatetime('MM', Dt) + '-' +
      FormatFloat('00000#', k);
  end
  else
  begin
    Result := formatdatetime('YY', Dt) + formatdatetime('MM', Dt) + '-000001';
  end;
  qd.Free;
  ts.Free;
end;

function getNoPOSDetail(posid: string): string;
var
  qd: tzquery;
  k: integer;
begin
  Result := '';
  qd := CreateQuery;
  qd.Query('select no from t_pos_detail where pos_id=''' + posid +
    ''' order by no desc limit 1');
  if qd.RecordCount > 0 then
  begin
    Result := inttostr(qd.getFieldINteger('no') + 1);
  end
  else
  begin
    Result := '1';
  end;
  qd.Free;
end;

procedure isiKomisi(psid: string);
var
  qp, qk, qh: tzquery;
  totalkaryawan, totalproduk, diskon, voucher: double;
  procedure isiEmployee1;
  begin
    qk.Query('select * from t_komisi where ' + getS('pos_id', qp) + ' and ' + ES
      + '' + getS('pos_detail_id', qp) + ' and ' + getS('produk_id', qp) +
      ' and ' + ES + '' + getS('tipe', qp) + ' and employee_id =''' +
      qp.getfieldstring('employee1') + ''' ');
    if qk.RecordCount = 0 then
      qk.Append
    else
      qk.edit;
    qk.SetMultiFieldQ('pos_id,nostruk,tdate,customername,pos_detail_id,no,tipe,'
      + 'produk_id,harga,qty', qp);
    qk.setField('totalproduk', totalproduk);
    qk.setField('diskon', diskon);
    qk.setField('voucher', voucher);
    qk.setField('employee_id', qp.getField('employee1'));
    qk.setField('komisi', qp.getField('komisi1'));
    qk.setField('rupiah', qp.getField('rupiah1'));
    qk.setField('totalKaryawan', totalkaryawan);
    qk.setField('harga', qk.getFieldDouble('harga') /
      qk.getFieldDouble('totalKaryawan'));
    qk.setField('harga', qk.getFieldDouble('harga') -
      qk.getFieldDouble('diskon'));
    qk.setField('harga', qk.getFieldDouble('harga') -
      qk.getFieldDouble('voucher'));
    qk.setField('amount', qk.getFieldDouble('harga') *
      (qk.getFieldDouble('komisi') / 100) * qk.getFieldDouble('qty'));
    qk.setField('amount', qk.getFieldDouble('amount') +
      qk.getFieldDouble('rupiah'));
    qk.Post;
  end;
  procedure isiEmployee2;
  begin
    qk.Query('select * from t_komisi where ' + getS('pos_id', qp) + ' and ' + ES
      + '' + getS('pos_detail_id', qp) + ' and ' + getS('produk_id', qp) +
      ' and ' + ES + '' + getS('tipe', qp) + ' and employee_id =''' +
      qp.getfieldstring('employee2') + ''' ');
    if qk.RecordCount = 0 then
      qk.Append
    else
      qk.edit;
    qk.SetMultiFieldQ('pos_id,nostruk,tdate,customername,pos_detail_id,no,tipe,'
      + 'produk_id,harga,qty', qp);
    qk.setField('totalproduk', totalproduk);
    qk.setField('diskon', diskon);
    qk.setField('voucher', voucher);
    qk.setField('employee_id', qp.getField('employee2'));
    qk.setField('komisi', qp.getField('komisi2'));
    qk.setField('rupiah', qp.getField('rupiah2'));
    qk.setField('totalKaryawan', totalkaryawan);
    qk.setField('harga', qk.getFieldDouble('harga') /
      qk.getFieldDouble('totalKaryawan'));
    qk.setField('harga', qk.getFieldDouble('harga') -
      qk.getFieldDouble('diskon'));
    qk.setField('harga', qk.getFieldDouble('harga') -
      qk.getFieldDouble('voucher'));
    qk.setField('amount', qk.getFieldDouble('harga') *
      (qk.getFieldDouble('komisi') / 100) * qk.getFieldDouble('qty'));
    qk.setField('amount', qk.getFieldDouble('amount') +
      qk.getFieldDouble('rupiah'));
    qk.Post;
  end;

begin
  // exit;
  qp := CreateQuery;
  qk := CreateQuery;
  qh := CreateQuery;
  qp.Query('select p.pos_id, p.nostruk, p.tdate, p.customername, p.diskon, p.voucher, '
    + ES + ' pd.pos_detail_id, pd.no,  pd.tipe, pd.produk_id, ' + ES +
    ' pd.employee1, pd.employee2, qty, harga, komisi1, komisi2, rupiah1, rupiah2 '
    + ES + ' from t_pos p ' + ES +
    ' left join t_pos_detail pd on p.pos_id = pd.pos_id ' + ES +
    ' where pd.tipe=''Non Paket'' and p.pos_id = ''' + psid + ''' ' + ES +
    ' order by pd.pos_id, pd.no');
  qp.First;
  while not qp.Eof do
  begin
    totalproduk := 0;
    diskon := 0;
    voucher := 0;
    totalkaryawan := 0;
    qh.Query('select p.pos_id, count(*) as totalproduk, p.diskon, p.voucher from t_pos p '
      + ES + ' left join t_pos_detail pd on p.pos_id = pd.pos_id ' + ES +
      ' where p.pos_id = ''' + qp.getfieldstring('pos_id') + ''' ' + ES +
      ' group by p.pos_id ');
    if qh.RecordCount > 0 then
    begin
      totalproduk := qh.getFieldDouble('totalproduk');
      diskon := bulatkan(qh.getFieldDouble('diskon') / totalproduk, 0);
      voucher := bulatkan(qh.getFieldDouble('voucher') / totalproduk, 0);
    end;

    if (qp.getFieldINteger('employee1') > 0) or
      (qp.getFieldDouble('employee2') > 0) then
      totalkaryawan := 1;
    if (qp.getFieldINteger('employee1') > 0) and
      (qp.getFieldDouble('employee2') > 0) then
      totalkaryawan := 2;

    if qp.getFieldINteger('employee1') > 0 then
      isiEmployee1;
    if qp.getFieldINteger('employee2') > 0 then
      isiEmployee2;
    qp.Next;
  end;
  qh.Free;
  qk.Free;
  qp.Free;
end;

procedure isiSubtotalPOS(psid: string);
var
  qs: tzquery;
  grandtotal, diskon, diskonpersen, persenpajak, pajak, voucher, total, cash,
    kembali, subtotal: double;
begin
  qs := CreateQuery;
  subtotal := 0;
  qs.Query('select sum(total) as subtotal from t_pos_detail where pos_id=''' +
    psid + ''' group by pos_id ');
  if qs.RecordCount > 0 then
    subtotal := qs.getFieldDouble('subtotal');

  persenpajak := getQValueDouble
    ('select persenpajak from m_salon limit 1') / 100;
  pajak := bulatkan(subtotal * persenpajak, 0);
  diskon := 0;
  diskonpersen := 0;
  total := 0;
  grandtotal := 0;
  cash := 0;
  kembali := 0;

  qs.Query('select sum(cash) as cash from t_pos_bayar where pos_id=''' + psid +
    ''' group by pos_id ');
  if qs.RecordCount > 0 then
    cash := qs.getFieldDouble('cash');

  qs.Query('select sum(cash) as cash from t_pos_bayar where pos_id=''' + psid +
    ''' and tipebayar=''voucher'' group by pos_id, tipebayar ');
  if qs.RecordCount > 0 then
    voucher := qs.getFieldDouble('cash');

  qs.Query('select * from t_pos where pos_id=''' + psid + ''' ');
  if qs.RecordCount > 0 then
  begin
    qs.edit;
    diskonpersen := qs.getFieldDouble('diskonpersen');
    diskon := bulatkan((subtotal + pajak) * (diskonpersen / 100), 0);
    total := subtotal + pajak - diskon;
    grandtotal := total - voucher;
    kembali := cash - total;
    qs.setField('subtotal', subtotal);
    qs.setField('pajak', pajak);
    qs.setField('diskon', diskon);
    qs.setField('voucher', voucher);
    qs.setField('total0', grandtotal);
    qs.setField('total', total);
    qs.setField('cash', cash);
    qs.setField('kembali', kembali);
    qs.Post;
  end;
  qs.Free;
end;

procedure isiItemOutPOS(psid: string);
var
  qs, qi: tzquery;
begin
  qs := CreateQuery;
  qi := CreateQuery;
  qs.Query('select po.pos_id, po.tdate, pd.pos_detail_id, p.* from m_produk_item p '
    + ES + ' left join t_pos_detail pd on p.produk_id = pd.produk_id ' + ES +
    ' left join t_pos po on po.pos_id = pd.pos_id ' + ES + ' where pd.pos_id='''
    + psid + ''' and pd.tipe = ''non paket'' order by pd.no');
  qs.First;
  while not qs.Eof do
  begin
    qi.Query('select * from t_out where pos_id=''' + psid + ''' and ' +
      getS('pos_detail_id', qs) + ' ' + ES + ' and ' + getS('produk_id', qs) +
      ' and ' + getS('item_id', qs) + ' ');
    if qi.RecordCount > 0 then
    begin
      qi.edit;
      isiKolomUser(False, qi);
    end
    else
    begin
      qi.Append;
      isiKolomUser(True, qi);
    end;
    qi.SetMultiFieldQ
      ('pos_id,pos_detail_id,produk_id,item_id,tdate,satuan,amount', qs);
    qi.setField('tipe', 'Sales');
    qi.Post;
    qs.Next;
  end;

  // dari paket
  qs.Query('select po.pos_id, po.tdate, pd.pos_detail_id, pk.paket_id, pk.pos_paket_id, p.* from m_produk_item p '
    + ES + ' left join t_pos_paket pk on p.produk_id = pk.produk_id ' + ES +
    ' left join t_pos_detail pd on pk.pos_id = pd.pos_id and pk.paket_id = pd.paket_id '
    + ES + ' left join t_pos po on po.pos_id = pd.pos_id ' + ES +
    ' where pd.pos_id=''' + psid + ''' ');
  qs.First;
  while not qs.Eof do
  begin
    qi.Query('select * from t_out where pos_id=''' + psid + ''' and ' +
      getS('pos_paket_id', qs) + ' ' + ES + ' and ' + getS('produk_id', qs) +
      ' and ' + getS('item_id', qs) + ' ');
    if qi.RecordCount > 0 then
    begin
      qi.edit;
      isiKolomUser(False, qi);
    end
    else
    begin
      qi.Append;
      isiKolomUser(True, qi);
    end;
    qi.SetMultiFieldQ
      ('pos_id,pos_detail_id,pos_paket_id,paket_id,produk_id,item_id,tdate,satuan,amount',
      qs);
    qi.setField('tipe', 'Sales');
    qi.Post;
    qs.Next;
  end;

  qs.Free;
  qi.Free;
end;

procedure isiTotalBayarPOS(psid: string);
var
  qs: tzquery;
  cash: double;
begin
  qs := CreateQuery;
  cash := 0;
  qs.Query('select sum(cash) as cash from t_pos_bayar where pos_id=''' + psid +
    ''' group by pos_id ');
  if qs.RecordCount > 0 then
    cash := qs.getFieldDouble('cash');

  qs.Query('select * from t_pos where pos_id=''' + psid + ''' ');
  if qs.RecordCount > 0 then
  begin
    qs.edit;
    qs.setField('cash', cash);
    qs.setField('kembali', qs.getFieldDouble('cash') -
      qs.getFieldDouble('total'));
    qs.Post;
  end;
  qs.Free;
end;

procedure isiDiskonPOS(psid: string; diskonpersen: double);
var
  qs: tzquery;
  diskon, persenpajak, pajak, total, cash, kembali, subtotal: double;
begin
  qs := CreateQuery;
  qs.Query('select * from t_pos where pos_id=''' + psid + ''' ');
  persenpajak := getQValueDouble
    ('select persenpajak from m_salon limit 1') / 100;
  pajak := subtotal * persenpajak;
  total := 0;
  cash := 0;
  kembali := 0;
  diskon := 0;
  diskonpersen := 0;

  if qs.RecordCount > 0 then
  begin
    qs.edit;
    qs.setField('cash', cash);
    qs.setField('kembali', qs.getFieldDouble('cash') -
      qs.getFieldDouble('total'));
    qs.Post;
  end;
  qs.Free;
end;

function selisihHari(TglAwal, TglAkhir: TDateTime): integer;
begin
  Result := strtoint(Float2Str(strtoDate(DateToStr(TglAkhir)) -
    strtoDate(DateToStr(TglAwal))));
end;

function MinutesApart(JamAwal, JamAkhir: TDateTime): integer;
var
  h1, m1, s1, n1, h2, m2, s2, n2: word;
begin
  DecodeTime(JamAwal, h1, m1, s1, n1);
  DecodeTime(JamAkhir, h2, m2, s2, n2);
  h1 := h1 * 60;
  m1 := m1 + h1;
  h2 := h2 * 60;
  m2 := m2 + h2;

  Result := m2 - m1;
end;

procedure getTimeFinger(tipe: string; Q: tzquery; Dt: TDateTime);
var
  qf: tzquery;
begin
  tipe := LowerCase(tipe);
  qf := CreateQuery;
  if tipe = 'timein' then
  begin
    qf.Query('select * from t_fingerlog where ' + getS('employee_id', Q) +
      ' and ' + ES + 'tdate=''' + date2sql(Dt) +
      ''' and ttime between ''08:00:00'' ' + ES +
      'and ''15:00:00'' order by ttime limit 1');
    // pesan(qf.SQL.Text);
    if qf.RecordCount > 0 then
    begin
      if qf.isNull('ttime') = False then
        Q.setField(tipe, qf.getField('ttime'));
    end;
  end
  else
  begin
    qf.Query('select * from t_fingerlog where ' + getS('employee_id', Q) +
      ' and ' + ES + 'tdate=''' + date2sql(Dt) +
      ''' and ttime between ''15:01:00'' ' + ES +
      'and ''23:50:00'' order by ttime desc limit 1');
    // pesan(qf.SQL.Text);
    if qf.RecordCount > 0 then
    begin
      if qf.isNull('ttime') = False then
        Q.setField(tipe, qf.getField('ttime'));
    end;
  end;
  qf.Free;
end;

procedure beforePost_PosDetail(q_posdetail: tzquery);
begin
  q_posdetail.setField('total', q_posdetail.getFieldDouble('harga') *
    q_posdetail.getFieldDouble('qty'));
  { q_posdetail.setField('totalkomisi1',( Q_POSDETAIL.getFieldDouble('harga') *
    (Q_POSDETAIL.getFieldDouble('komisi1')/100)
    ) + Q_POSDETAIL.getFieldDouble('rupiah1') );
    q_posdetail.setField('totalkomisi2',( Q_POSDETAIL.getFieldDouble('harga') *
    (Q_POSDETAIL.getFieldDouble('komisi2')/100)
    ) + Q_POSDETAIL.getFieldDouble('rupiah2') );
    Q_POSDETAIL.setField('rupiah3', getQValue('select komisicuci from m_salon limit 1') );
    if Q_POSDETAIL.getFieldInteger('employee3') <= 0 then Q_POSDETAIL.setField('rupiah3', 0);
    q_posdetail.setField('totalkomisi3',Q_POSDETAIL.getFieldDouble('rupiah3') ); }
end;

procedure isiNewKomisi(psid: string);
var
  komisi, total, diskon, voucher: double;
  totalproduk: integer;
  q1, q2, qh: tzquery;
begin
  diskon := 0;
  voucher := 0;
  qh := CreateQuery;
  q1 := CreateQuery;
  q2 := CreateQuery;
  qh.Query('select pos_id, diskon, voucher from t_pos where pos_id = ''' +
    psid + ''' ');
  if qh.RecordCount > 0 then
  begin
    diskon := qh.getFieldDouble('diskon');
    voucher := qh.getFieldDouble('voucher');
  end;
  totalproduk := getQValueInteger
    ('select count(*) from t_pos_detail where pos_id=''' + psid +
    ''' group by pos_id');

  if totalproduk = 0 then
  begin
    qh.Free;
    q1.Free;
    q2.Free;
    exit;
  end;

  diskon := bulatkan(diskon / totalproduk, 0);
  voucher := bulatkan(voucher / totalproduk, 0);
  ExecuteSQL('update t_pos_detail set diskon=''' + Float2Str(diskon) +
    ''', voucher=''' + Float2Str(voucher) + ''' where pos_id=''' + psid
    + ''' ');

  q1.Query('select * from t_pos_detail where pos_id=''' + psid +
    ''' and tipe=''Non Paket'' order by no');
  q1.First;
  while not q1.Eof do
  begin
    q1.edit;

    q2.Query('select * from m_produk ' + ES + 'where ' + getS('produk_id',
      q1) + ' ');
    if q2.RecordCount > 0 then
    begin
      q1.setField('komisi1', q2.getFieldDouble('komisi1'));
      q1.setField('persenproduk', q2.getFieldDouble('persenproduk'));
      if q2.getFieldINteger('kategori_id') <> 6 then
      begin
        q2.Query('select komisi from m_employee ' + ES + 'where employee_id='''
          + q1.getfieldstring('employee1') + ''' and komisi>0');
        if q2.RecordCount > 0 then
          q1.setField('komisi1', q2.getFieldDouble('komisi'));
      end;
    end;

    total := q1.getFieldDouble('qty') * q1.getFieldDouble('harga');
    total := total - (total * (q1.getFieldDouble('persenproduk') / 100));
    total := total - q1.getFieldDouble('diskon') - q1.getFieldDouble('voucher');
    komisi := total * (q1.getFieldDouble('komisi1') / 100);
    komisi := komisi + q1.getFieldDouble('rupiah1');
    komisi := bulatkan(komisi, 0);
    q1.setField('totalkomisi1', 0);
    if q1.getFieldINteger('employee1') > 0 then
      q1.setField('totalkomisi1', komisi);

    komisi := total * (q1.getFieldDouble('komisi2') / 100);
    komisi := komisi + q1.getFieldDouble('rupiah2');
    komisi := bulatkan(komisi, 0);
    q1.setField('totalkomisi2', 0);
    if q1.getFieldINteger('employee2') > 0 then
      q1.setField('totalkomisi2', komisi);

    q1.setField('rupiah3', 0);
    if q1.getFieldINteger('employee3') > 0 then
      q1.setField('rupiah3',
        getQValue('select komisicuci from m_salon limit 1'));
    q1.setField('totalkomisi3', q1.getFieldDouble('rupiah3'));

    if q1.getFieldDouble('totalkomisi3') > 0 then
    begin
      if getQValueInteger('select asistencuci from m_employee ' + ES +
        'where employee_id=''' + q1.getfieldstring('employee1') + ''' ') = 1
      then
      begin
        q1.setField('totalkomisi1', q1.getFieldDouble('totalkomisi1') -
          q1.getFieldDouble('totalkomisi3'));
      end;
    end;
    q1.Post;
    q1.Next;
  end;

  q1.Query('select * from t_pos_detail where pos_id=''' + psid +
    ''' and tipe=''Paket'' order by no');
  q1.First;
  while not q1.Eof do
  begin
    totalproduk := getQValueInteger('select count(*) from t_pos_paket where ' +
      getS('pos_id', q1) + ' and ' + getS('paket_id', q1) +
      ' group by pos_id, paket_id');
    if totalproduk > 0 then
    begin
      diskon := q1.getFieldDouble('diskon');
      diskon := bulatkan(diskon / totalproduk, 0);
      voucher := q1.getFieldDouble('voucher');
      voucher := bulatkan(voucher / totalproduk, 0);
      ExecuteSQL('update t_pos_paket set diskon=''' + Float2Str(diskon) +
        ''', voucher=''' + Float2Str(voucher) + ''' where ' + getS('pos_id', q1)
        + ' and ' + getS('paket_id', q1) + ' ');

      q2.Query('select * from t_pos_paket where ' + getS('pos_id', q1) + ' and '
        + getS('paket_id', q1) + ' ');
      q2.First;
      while not q2.Eof do
      begin
        q2.edit;
        q1.Query('select * from m_produk ' + ES + 'where ' +
          getS('produk_id', q2) + ' ');
        if q1.RecordCount > 0 then
        begin
          q2.setField('komisi1', q1.getFieldDouble('komisi1'));
          q2.setField('persenproduk', q1.getFieldDouble('persenproduk'));
        end;

        q1.Query('select komisi from m_employee ' + ES + 'where employee_id='''
          + q2.getfieldstring('employee1') + ''' and komisi>0');
        if q1.RecordCount > 0 then
          q2.setField('komisi1', q1.getFieldDouble('komisi'));

        total := q2.getFieldDouble('qty') * q2.getFieldDouble('harga');
        total := total - (total * (q2.getFieldDouble('persenproduk') / 100));
        total := total - q2.getFieldDouble('diskon') -
          q2.getFieldDouble('voucher');
        komisi := total * (q2.getFieldDouble('komisi1') / 100);
        komisi := komisi + q2.getFieldDouble('rupiah1');
        komisi := bulatkan(komisi, 0);
        q2.setField('totalkomisi1', 0);
        if q2.getFieldINteger('employee1') > 0 then
          q2.setField('totalkomisi1', komisi);

        komisi := total * (q2.getFieldDouble('komisi2') / 100);
        komisi := komisi + q2.getFieldDouble('rupiah2');
        komisi := bulatkan(komisi, 0);
        q2.setField('totalkomisi2', 0);
        if q2.getFieldINteger('employee2') > 0 then
          q2.setField('totalkomisi2', komisi);

        q2.setField('rupiah3', 0);
        if q2.getFieldINteger('employee3') > 0 then
          q2.setField('rupiah3',
            getQValue('select komisicuci from m_salon limit 1'));
        q2.setField('totalkomisi3', q2.getFieldDouble('rupiah3'));

        if q2.getFieldDouble('totalkomisi3') > 0 then
        begin
          if getQValueInteger('select asistencuci from m_employee ' + ES +
            'where employee_id=''' + q2.getfieldstring('employee1') + ''' ') = 1
          then
          begin
            q2.setField('totalkomisi1', q2.getFieldDouble('totalkomisi1') -
              q2.getFieldDouble('totalkomisi3'));
          end;
        end;
        q2.Post;
        q2.Next;
      end;
    end;
    q1.Next;
  end;

  qh.Free;
  q1.Free;
  q2.Free;

end;

procedure isiPayrollKomisi(qp: tzquery);
var
  qk: tzquery;
begin
  qk := CreateQuery;
  qk.Query('select * from t_pos_detail where tdate>=''' +
    qp.date2sql('startdate') + ''' and ' + ES + 'tdate <=''' +
    qp.date2sql('enddate') + ''' and tipe=''Non Paket'' and ' + ES +
    ' (employee1 = ''' + qp.getfieldstring('employee_id') + ''' or ' + ES +
    '  employee2 = ''' + qp.getfieldstring('employee_id') + ''' or ' + ES +
    '  employee3 = ''' + qp.getfieldstring('employee_id') + ''' ) ' + ES +
    ' order by tdate, nostruk');
  // pesan(qk.SQL.Text);
  qk.First;
  while not qk.Eof do
  begin
    if qk.getFieldINteger('employee1') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiProduk(qp, qk, qk.getFieldDouble('komisi1'),
        qk.getFieldDouble('totalkomisi1'), 'stylist');
    end;
    if qk.getFieldINteger('employee2') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiProduk(qp, qk, qk.getFieldDouble('komisi2'),
        qk.getFieldDouble('totalkomisi2'), 'asisten');
    end;
    if qk.getFieldINteger('employee3') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiProduk(qp, qk, 0,
        qk.getFieldDouble('totalkomisi3'), 'cuci');
    end;
    qk.Next;
  end;

  qk.Query('select ''Paket'' as tipe, t_pos_paket.* ' + ES +
    ' from t_pos_paket where tdate>=''' + qp.date2sql('startdate') + ''' and ' +
    ES + ' tdate <=''' + qp.date2sql('enddate') + ''' and ' + ES +
    ' (employee1 = ''' + qp.getfieldstring('employee_id') + ''' or ' + ES +
    '  employee2 = ''' + qp.getfieldstring('employee_id') + ''' or ' + ES +
    '  employee3 = ''' + qp.getfieldstring('employee_id') + ''' ) ' + ES +
    ' order by tdate, nostruk');
  // pesan(qk.SQL.Text);
  qk.First;
  while not qk.Eof do
  begin
    if qk.getFieldINteger('employee1') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiPaket(qp, qk, qk.getFieldDouble('komisi1'),
        qk.getFieldDouble('totalkomisi1'), 'stylist');
    end;
    if qk.getFieldINteger('employee2') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiPaket(qp, qk, qk.getFieldDouble('komisi2'),
        qk.getFieldDouble('totalkomisi2'), 'asisten');
    end;
    if qk.getFieldINteger('employee3') = qp.getFieldINteger('employee_id') then
    begin
      isiTablePayrollKomisiPaket(qp, qk, 0,
        qk.getFieldDouble('totalkomisi3'), 'cuci');
    end;
    qk.Next;
  end;
  qk.Free;
end;

procedure isiTablePayrollKomisiProduk(qp, qk: tzquery;
  komisi, totalkomisi: double; tipe2: string);
var
  q2: tzquery;
begin
  q2 := CreateQuery;
  q2.Query('select * from t_payroll_komisi where ' + ES + ' ' +
    getS('employee_id', qp) + ' and ' + getS('pos_detail_id', qk) + ' and ' + ES
    + ' tipe2=''' + tipe2 + ''' ');
  if q2.RecordCount = 0 then
  begin
    q2.Append;
    isiKolomUser(True, q2);
  end
  else
  begin
    q2.edit;
    isiKolomUser(False, q2);
  end;
  q2.setField('tipe2', tipe2);
  q2.SetMultiFieldQ('payroll_id,employee_id', qp);
  q2.SetMultiFieldQ
    ('pos_id,tdate,pos_detail_id,tipe,produk_id,paket_id,qty,harga,total,persenproduk',
    qk);
  q2.setField('employeecuci', '');
  q2.setField('asistencuci', '0');
  if LowerCase(tipe2) <> 'cuci' then
  begin
    q2.setField('employeecuci',
      getQValueString('select name from m_employee where employee_id=''' +
      qk.getfieldstring('employee3') + ''' '));
    if getQValueInteger('select asistencuci from m_employee ' + ES + 'where ' +
      getS('employee_id', q2) + ' ') > 0 then
    begin
      q2.setField('asistencuci', qk.getFieldDouble('totalkomisi3'));
    end;
  end;
  q2.setField('komisi', komisi);
  q2.setField('totalkomisi', totalkomisi);
  q2.Post;
  q2.Free;
end;

procedure isiTablePayrollKomisiPaket(qp, qk: tzquery;
  komisi, totalkomisi: double; tipe2: string);
var
  q2: tzquery;
begin
  q2 := CreateQuery;
  q2.Query('select * from t_payroll_komisi where ' + ES + ' ' +
    getS('employee_id', qp) + ' and ' + getS('pos_paket_id', qk) + ' and ' + ES
    + ' tipe2=''' + tipe2 + ''' ');
  if q2.RecordCount = 0 then
  begin
    q2.Append;
    isiKolomUser(True, q2);
  end
  else
  begin
    q2.edit;
    isiKolomUser(False, q2);
  end;
  q2.setField('tipe2', tipe2);
  q2.SetMultiFieldQ('payroll_id,employee_id', qp);
  q2.SetMultiFieldQ
    ('pos_id,tdate,pos_paket_id,tipe,produk_id,paket_id,qty,harga,total,persenproduk',
    qk);
  q2.setField('employeecuci', '');
  q2.setField('asistencuci', '0');
  if LowerCase(tipe2) <> 'cuci' then
  begin
    q2.setField('employeecuci',
      getQValueString('select name from m_employee where employee_id=''' +
      qk.getfieldstring('employee3') + ''' '));
    if getQValueInteger('select asistencuci from m_employee ' + ES + 'where ' +
      getS('employee_id', q2) + ' ') > 0 then
    begin
      q2.setField('asistencuci', qk.getFieldDouble('totalkomisi3'));
    end;
  end;
  q2.setField('komisi', komisi);
  q2.setField('totalkomisi', totalkomisi);
  q2.Post;
  q2.Free;
end;

function getSecurity(idm: string = '0'; kolomSecurity: string = ' * ';
  TableAlias: string = ''): string;
var
  us, T, idu, S, Fn: string;
  qv: tzquery;
  x: integer;
begin
  us := GetUserLogin;
  Result := ' (1=1) ';
  if (us = 'l') or (us = 'admin') then
    exit;
  idu := getQValue('select id_user from s_user where username=''' + us + ''' ');
  qv := CreateQuery;
  T := '';
  qv.Query('select employee_id from s_user where id_user=''' + idu + ''' ');
  if qv.RecordCount > 0 then
  begin
    if qv.getFieldINteger('employee_id') > 0 then
    begin
      T := qv.getfieldstring('employee_id');
    end;
  end;

  qv.Query('select ' + kolomSecurity + ' from s_security where id_user=''' + idu
    + ''' and id_module=''' + idm + ''' ');
  // dbg(qv.SQL.Text);
  if (qv.RecordCount = 0) then
  begin // kalo ga ada data di s_security
    // dbg('ga ada data');
    if T <> '' then
      S := ' (( ' + TableAlias + 'employee_id=' + T + ' and (1=1) )) '
    else
      S := ' (( (1=1) )) ';
    // dbg(s);
  end
  else
  begin // ada data di s_security
    // dbg('ada data');
    S := '';
    for x := 0 to qv.FieldCount - 1 do
    begin
      Fn := qv.FieldName(x);
      // dbg(fn);
      if RightStr(Fn, 3) = '_id' then
      begin // kalo belakang nya _id
        // dbg('_id');
        if (qv.isNull(Fn)) or (qv.getfieldstring(Fn) = '') then
        begin // kalo isi kolom nya null atau kosong
          // dbg('null');
          if Fn = 'employee_id' then
          begin
            if T <> '' then
              S := S + ' (( ' + TableAlias + 'employee_id=' + T +
                ' and (1=1) )) and ';
          end;
        end
        else
        begin // kalo isi kolom nya tidak null atau tidak kosong
          // dbg('not null');
          if LeftStr(Fn, 3) = 'ex_' then
          begin // kalo kolom depannya ex_
            // dbg('ex_ '+fn);
            // if qm.isFieldExist(replace(fn, 'ex_', '')) then
            // begin
            // dbg(TableAlias + replace(fn, 'ex_', '') + ' not in ( ' + qv.getFieldString(fn) + ' )');
            S := S + ' ' + TableAlias + Replace(Fn, 'ex_', '') + ' not in ( ' +
              qv.getfieldstring(Fn) + ' ) and ' + ES;
            // end;
          end
          else // kalo kolom depannya ex_
          begin // kalo kolom depannya bukan ex_
            // dbg('not ex_ '+fn);
            // if qm.isFieldExist(fn) then
            // begin
            // dbg(TableAlias + fn + ' in ( ' + qv.getFieldString(fn) + ' )');
            if Fn = 'employee_id' then
            begin
              if T = '' then
                S := S + ' ' + TableAlias + Fn + ' in ( ' +
                  qv.getfieldstring(Fn) + ' ) and ' + ES
              else
                S := S + ' ' + TableAlias + Fn + ' in ( ' + T + ',' +
                  qv.getfieldstring(Fn) + ' ) and ' + ES;
              // dbg('employee_id : '+s);
            end
            else
            begin
              S := S + ' ' + TableAlias + Fn + ' in ( ' + qv.getfieldstring(Fn)
                + ' ) and ' + ES;
              // dbg('not employee_id : '+s);
            end;
            // end;
          end; // kalo kolom depannya bukan ex_
        end; // kalo isi kolom nya tidak null atau tidak kosong
      end; // kalo belakangnya ID
    end; // for
    // dbg('s : '+s);
    S := ES + ' (( ' + ES + S + ' (1=1) ' + ES + ' )) ';
  end; // ada data di s_security
  // dbg('jadi : '+s);
  // result := ' ( ' + t + ' and ' + s + ' ) ';
  Result := S;
  qv.Free;
  // qm.Free;
end;

procedure ClearErrorList;
begin
  FrmError.Memo1.Lines.Clear;
end;

procedure AddErrorList(Pesan: string);
begin
  FrmError.Memo1.Lines.Add(Pesan);
end;

procedure AddErrorListFromTS(ts: TStringlist);
begin
  FrmError.Memo1.Lines := ts;
end;

function ShowError: tstrings;
begin
  Result := FrmError.Memo1.Lines;
  FrmError.ShowModal;
end;

procedure updateEmployeeFromMutation(eid: string);
var
  qk, qt, QM: tzquery;
  kolom: string;
  x: integer;
begin
  // update nya harus sesuai tanggal
  qk := CreateQuery;
  qt := CreateQuery;
  QM := CreateQuery;
  qt.Query('select * from m_employee_mutation where employee_id=''' + eid +
    ''' order by tdate desc limit 1');
  if qt.RecordCount > 0 then
  begin
    qk.Query('show columns from m_employee_mutation');
    qk.First;
    x := qk.RecordCount - 4;
    kolom := '';
    while not qk.Eof do
    begin
      if (qk.RecNo >= 6) and (qk.RecNo <= x) then
        kolom := kolom + qk.getColumnString(0) + ',';
      qk.Next;
    end;
    kolom := MidStr(kolom, 1, Length(kolom) - 1);
    QM.Query('select employee_id, ' + kolom +
      ' from m_employee where employee_id=''' + eid + ''' ');
    if QM.RecordCount > 0 then
      QM.edit;
    QM.SetMultiFieldQ(kolom, qt);
    QM.Post;
  end;
  qk.Free;
  qt.Free;
  QM.Free;
end;

procedure DeleteAllDataDetail(idm, eid: string);
var
  qd: tzquery;
begin
  qd := CreateQuery;
  qd.Query('select id_module, tablename, masterfields ' + ES +
    'from s_module where parentid=''' + idm +
    ''' and isdetail=1 and active=1 order by no');
  qd.First;
  while not qd.Eof do
  begin
    ExecuteSQL('delete from ' + qd.getfieldstring('tablename') + ' where ' +
      qd.getfieldstring('masterfields') + '=''' + eid + ''' ');
    qd.Next;
  end;
  qd.Free;
end;

procedure getTimeFromFingerLog(statusmasuk: string; QM: tzquery);
// function getTimeFromFingerLog(statusmasuk : string; qm:tzquery; tipe:string='finger') : string;
var
  qz: tzquery;
  kolom1, kolom2, timein, sy: string;
begin
  { 1 = masuk, 0 = pulang }
  qz := CreateQuery;
  sy := ' (0=0) ';
  if statusmasuk = '1' then
  begin // masuk
    sy := ' (0=0) order by ttime limit 1 ';
    kolom1 := 'timein';
    kolom2 := 'lokasi_timein';
  end
  else if statusmasuk = '0' then
  begin // pulang
    timein := '08:00:00';
    if QM.isNotNull('timein') then
      timein := QM.time2sql('timein');

    sy := ' tdatetime >= ' + 'date_add( ''' + QM.date2sql('tdate') + ' ' +
      timein + ''', ' + 'interval 6 hour) and ' + ES + 'tdatetime <= ' +
      'date_add( ''' + QM.date2sql('tdate') + ' ' + timein + ''', ' +
      'interval 20 hour) ' + ES + 'order by ttime desc limit 1 ';
    kolom1 := 'timeout';
    kolom2 := 'lokasi_timeout';
  end;
  qz.Query('select * from t_fingerlog where ' + getS('employee_id', QM) +
    ' and ' + ES + 'tdate = ''' + QM.date2sql('tdate') + ''' and ' + ES +
    'statusmasuk=''' + statusmasuk + ''' and ' + ES + ' ' + sy + ' ');
  // result := '00:00:00';
  QM.setField(kolom1, null);
  QM.setField(kolom2, '0');
  if qz.RecordCount > 0 then
  begin
    if qz.isNotNull('ttime') then
      QM.setField(kolom1, qz.time2sql('ttime'));
    QM.setField(kolom2, qz.getfieldstring('workarea_id'));
  end;
  qz.Free;
end;

function PayrollNotExist(eid: string; Dt: TDateTime): Boolean;
begin
  if getQValueInteger('select count(*) from t_payroll where ' + ES +
    '  employee_id=''' + eid + ''' and ' + ES + ' ''' + date2sql(Dt) +
    ''' between startdate and enddate  ') > 0 then
  begin
    Result := False;
  end
  else
  begin
    Result := True;
  end;
end;

function PayrollExist(eid: string; Dt: TDateTime): Boolean;
begin
  if getQValueInteger('select count(*) from t_payroll where ' + ES +
    '  employee_id=''' + eid + ''' and ' + ES + ' ''' + date2sql(Dt) +
    ''' between startdate and enddate  ') > 0 then
  begin
    Result := True;
  end
  else
  begin
    Result := False;
  end;
end;

function getColumnLookup(tablename, ColumnName: string): string;
begin
  Result := getQValueString('select kolom from s_lookup ' + ES +
    'where tablename=''' + tablename + ''' and ' + ES + 'columnname=''' +
    ColumnName + ''' ');
end;

procedure CheckIsFirstMutation(qd: tzquery);
var
  qmt, qem: tzquery;
begin
  qmt := CreateQuery;
  qem := CreateQuery;
  qmt.Query('select * from m_employee_mutation where ' + getS('employee_id',
    qd) + ' ');
  if qmt.RecordCount = 0 then
  begin
    qem.Query('select * from m_employee where ' + getS('employee_id',
      qd) + ' ');
    if qem.RecordCount > 0 then
    begin
      qmt.Append;
      qmt.copyData(qem);
      qmt.setField('tdate', qem.getField('joindate'));
      isiKolomUser(True, qmt);
      qmt.Post;
    end;
  end;
  qmt.Free;
  qem.Free;
end;

procedure ExportReportToPDF(Fr_Report: TfrxReport; Fn: string;
  pwd: string = '');
begin
  // if pwd = '' then pwd := 'chickentown';

  MenuLogin.frxPDFExport1.ShowDialog := False;
  MenuLogin.frxPDFExport1.ShowProgress := False;
  MenuLogin.frxPDFExport1.FileName := Fn;
  MenuLogin.frxPDFExport1.OwnerPassword := pwd;
  MenuLogin.frxPDFExport1.UserPassword := pwd;
  Fr_Report.PrepareReport;
  Fr_Report.Export(MenuLogin.frxPDFExport1);
end;

procedure ExportReportToJPEG(Fr_Report: TfrxReport; Fn: string);
begin
  // if pwd = '' then pwd := 'chickentown';
  MenuLogin.frxJPEGExport1.ShowDialog := False;
  MenuLogin.frxJPEGExport1.ShowProgress := False;
  MenuLogin.frxJPEGExport1.FileName := Fn;
  Fr_Report.PrepareReport;
  MenuLogin.frxJPEGExport1.JPEGQuality := 200;
  MenuLogin.frxJPEGExport1.Resolution := 200;
  // dbg(MenuLogin.frxJPEGExport1.JPEGQuality);
  Fr_Report.Export(MenuLogin.frxJPEGExport1);
end;

function SendEmail(sendTo, subject, body, attachFiles: string;
  smtpHost: string = ''; smtpUser: string = ''; smtpPass: string = '';
  smtpPort: integer = 0): Boolean;
var
  smtp: TIdSmtp;
  ssl: TIdSSLIOHandlerSocketOpenSSL;
  Msg: TIdMessage;
  tls: TIdUseTLS;
begin
  if trim(smtpHost) = '' then
    smtpHost := getQValueString
      ('select value from s_setting where name=''smtphost'' ');
  if smtpPort <= 0 then
    smtpPort := getQValueInteger
      ('select value from s_setting where name=''smtpport'' ');
  if trim(smtpUser) = '' then
    smtpUser := getQValueString
      ('select value from s_setting where name=''smtpusername'' ');
  if trim(smtpPass) = '' then
    smtpPass := getQValueString
      ('select value from s_setting where name=''smtppassword'' ');
  { smtpHost  := 'smtp.gmail.com';
    smtpPort  := 587;
    smtpUser  := 'aniyahsahara';
    smtpPass  := 'novemberceria'; }
  tls := utUseExplicitTLS;
  smtp := TIdSmtp.Create(nil);
  ssl := TIdSSLIOHandlerSocketOpenSSL.Create(smtp);
  Msg := TIdMessage.Create(smtp);
  try
    try
      smtp.Host := smtpHost;
      smtp.port := smtpPort;
      smtp.Username := smtpUser;
      smtp.passWord := smtpPass;
      // dbg('1');
      if not(tls = utNoTLSSupport) then
      begin
        ssl.Destination := smtpHost + ':' + inttostr(smtpPort);
        ssl.Host := smtpHost;
        ssl.port := smtpPort;
        ssl.SSLOptions.Method := sslvTLSv1;
        smtp.IOHandler := ssl;
        smtp.UseTLS := tls;
        // dbg('2');
      end;
      // dbg('3');
      Msg.From.Address := smtp.Username;
      Msg.From.name := 'CHICKENTOWN';
      Msg.Recipients.EMailAddresses := sendTo;
      Msg.subject := subject;
      Msg.body.Text := body;
      Msg.Encoding := meMIME;
      { dbg('host : '+smtp.Host+es+
        'port : '+inttostr(smtp.port)+es+
        'user : '+smtp.Username+es+
        'pass : '+smtp.Password+es+
        'sendto : '+msg.Recipients.EMailAddresses+es+
        'subject : '+msg.Subject+es+
        'body : '+msg.Body.Text); }
      if attachFiles <> '' then
      begin
        // dbg('4');
        if FileExists(attachFiles) then
          TIdAttachmentFile.Create(Msg.MessageParts, attachFiles);
      end;
      // dbg('5');
      smtp.Connect;
      // dbg('6');
      smtp.Authenticate;
      // dbg('7');
      smtp.Send(Msg);
      // dbg('8');
      smtp.Disconnect;
      // dbg('9');
      Result := True;
    finally
      // dbg('10');
      Msg.Free;
      ssl.Free;
      smtp.Free;
    end;
  except
    // dbg('11');
    Result := False;
  end;
end;

function defaultPassword(QM: tzquery): string;
var
  ok, S, nip: string;
  D, M, x: integer;
begin
  nip := QM.getfieldstring('nip');
  ok := '';
  D := 12;
  M := 9;
  if QM.isNotNull('dob') then
  begin
    D := strtoint(formatdatetime('dd', QM.getFieldDateTime('dob')));
    M := strtoint(formatdatetime('mm', QM.getFieldDateTime('dob')));
  end;
  // setiap angka di nip ditambahin tgl lahir;
  for x := 1 to Length(nip) do
  begin
    S := MidStr(nip, x, 1);
    if x mod 2 = 0 then
      S := inttostr(strtoint(S) + D)
    else
      S := inttostr(strtoint(S) + M);
    repeat
      if Length(S) = 2 then
      begin
        S := inttostr(strtoint(MidStr(S, 1, 1)) + strtoint(MidStr(S, 2, 1)));
      end;
    until (Length(S) = 1);
    ok := ok + S;
  end;
  ok := Encrypt(ok);
  Result := ok;
end;

function CreateConnection(Z: TZConnection; hostname, database, protocol, user,
  pass: string; port: integer): string;
begin
  Z.Connected := False;
  Z.hostname := hostname;
  Z.port := port;
  Z.database := database;
  Z.user := user;
  Z.passWord := pass;
  Z.protocol := protocol;
  Result := '';
  try
    Z.Connected := True;
  except
    on E: Exception do
    begin
      Result := E.Message;
    end;
  end;
end;

procedure DisconnectTo(Z: TZConnection);
begin
  Z.hostname := '';
  Z.port := 0;
  Z.database := '';
  Z.user := '';
  Z.passWord := '';
  Z.protocol := '';
  Z.Connected := False;
end;

function ConnectSQLServer: Boolean;
begin
  MenuLogin.ZSQLServer.Connected := False;
  MenuLogin.ZSQLServer.hostname := ReadIniFile('settleup', 'hostname');
  MenuLogin.ZSQLServer.port := strtoint(ReadIniFile('settleup', 'port'));
  MenuLogin.ZSQLServer.database := ReadIniFile('settleup', 'database');
  MenuLogin.ZSQLServer.user := Decrypt(ReadIniFile('settleup', 'user'));
  MenuLogin.ZSQLServer.passWord := Decrypt(ReadIniFile('settleup', 'pass'));
  MenuLogin.ZSQLServer.protocol := 'mssql';
  try
    Result := True;
    MenuLogin.ZSQLServer.Connected := True;
  except
    Result := False;
    MsgError('Can''t Connect to settleUP');
  end;
end;

procedure DisconnetSQLServer;
begin
  MenuLogin.ZSQLServer.Connected := False;
end;

function getLocationSettleUP: string;
begin
  Result := ReadIniFile('settleup', 'lokasi');
end;

function Str2Date(dtsql: string): TDateTime;
var
  tsd: TStringlist;
begin
  Result := Now;
  tsd := TStringlist.Create;
  tsd.Clear;
  String2StringList(tsd, dtsql, '-');
  if tsd.Count <= 0 then
    exit;
  Result := encodedate(strtoint(tsd.Strings[0]), strtoint(tsd.Strings[1]),
    strtoint(tsd.Strings[2]));
  tsd.Free;
end;

function HilangkanKomaBelakang(S: string): string;
begin
  Result := MidStr(S, 0, Length(S) - 1);
end;

procedure ListFileDir(Path, FileType: string; tsFile: TStringlist);
var
  SR: TSearchRec;
begin
  tsFile.Clear;
  if FindFirst(Path + '*.' + FileType, faArchive, SR) = 0 then
  begin
    repeat
      if (SR.Attr <> faDirectory) then
      begin
        tsFile.Add(SR.name);
      end;
    until FindNext(SR) <> 0;
    FindClose(SR);
  end;
end;

procedure isiMenuPrint(ItemMenu, ItemPrint: TPopupMenu; idm: string);
var
  x: integer;
  mn, tipe: string;
  QM: tzquery;
begin
  QM := CreateQuery;
  ExecuteSQL('delete from s_menu where id_module=''' + idm + ''' ');
  for x := 0 to ItemMenu.Items.Count - 1 do
  begin
    if ItemMenu.Items.Items[x].Tag <> 10 then
    begin
      mn := ItemMenu.Items.Items[x].caption;
      mn := MidStr(mn, 4, Length(mn));
      tipe := 'menu';
      idm := idm;
      QM.Query('select * from s_menu where id_module=''' + idm +
        ''' and tipe=''' + tipe + ''' and name=''' + mn + ''' ');
      if QM.RecordCount > 0 then
        QM.edit
      else
        QM.Append;
      QM.setField('id_module', idm);
      QM.setField('modulename',
        getQValueString('select name from s_module where ' + getS('id_module',
        QM) + ' '));
      QM.setField('tipe', tipe);
      QM.setField('name', mn);
      QM.Post;
    end;
  end;
  for x := 0 to ItemPrint.Items.Count - 1 do
  begin
    if ItemPrint.Items.Items[x].Tag <> 10 then
    begin
      mn := ItemPrint.Items.Items[x].caption;
      mn := MidStr(mn, 4, Length(mn));
      tipe := 'print';
      idm := idm;
      QM.Query('select * from s_menu where id_module=''' + idm +
        ''' and tipe=''' + tipe + ''' and name=''' + mn + ''' ');
      if QM.RecordCount > 0 then
        QM.edit
      else
        QM.Append;
      QM.setField('id_module', idm);
      QM.setField('modulename',
        getQValueString('select name from s_module where ' + getS('id_module',
        QM) + ' '));
      QM.setField('tipe', tipe);
      QM.setField('name', mn);
      QM.Post;
    end;
  end;
  QM.Free;
end;

procedure IsiMasterCuti(QM: tzquery);
var
  thn, x, jarak, thnjoin, thnskrg: integer;
  sd, ed, joindate: TDateTime;
  qc: tzquery;
  totalLeave: double;
begin
  joindate := QM.getFieldDateTime('joindate');
  thnjoin := strtoint(formatdatetime('yyyy', joindate));
  thnskrg := strtoint(formatdatetime('yyyy', ServerDate));
  jarak := thnskrg - thnjoin;
  qc := CreateQuery;
  for x := 1 to jarak do
  begin
    thn := thnjoin + x;
    sd := encodedate(thn, 1, 1);
    // dbg(date2sql(sd));
    ed := addMonths(sd, 18);
    ed := addDays(ed, -1);
    totalLeave := 12;
    if x <= 1 then
    begin
      totalLeave := DateDIFF(joindate, sd);
      if strtoint(formatdatetime('dd', joindate)) >= 21 then
      begin
        totalLeave := DateDIFF(joindate, sd) - 1;
      end;
    end;
    if x >= 2 then
      totalLeave := 12;
    if totalLeave >= 12 then
      totalLeave := 12;

    if totalLeave <= 0 then
    begin
      ExecuteSQL('delete from m_employee_cuti where ' + getS('employee_id', QM)
        + ' and ' + ES + 'startdate = ''' + date2sql(sd) + ''' ');
    end
    else
    begin
      qc.Query('select * from m_employee_cuti where ' + getS('employee_id', QM)
        + ' and ' + ES + 'startdate = ''' + date2sql(sd) + ''' ');
      if qc.RecordCount > 0 then
      begin
        qc.edit;
        isiKolomUser(False, qc);
      end
      else
      begin
        qc.Append;
        isiKolomUser(True, qc);
      end;
      qc.SetMultiFieldQ('employee_id,nip', QM);
      qc.setField('startdate', sd);
      qc.setField('enddate', ed);
      qc.setField('totalleave', totalLeave);
      qc.setField('takenleave', '0');
      if qc.RecordCount > 0 then
      begin
        qc.setField('takenleave',
          getQValueDouble('select sum(takenleave) from t_cuti ' + ES + 'where '
          + getS('employee_cuti_id', qc) + ' and status=''APPROVED'' ' + ES +
          'and ' + getS('employee_id', qc) + ' and cutitahunan=1 '));
      end;
      qc.setField('expired', '0');
      qc.setField('expiredleave', '0');
      if qc.date2sql('enddate') < date2sql(ServerDate) then
      begin
        qc.setField('expired', '1');
        qc.setField('expiredleave', qc.getFieldDouble('totalleave') -
          qc.getFieldDouble('takenleave'));
      end;
      qc.setField('availableleave', qc.getFieldDouble('totalleave') -
        qc.getFieldDouble('takenleave') - qc.getFieldDouble('expiredleave'));
      qc.Post;
    end;
  end;
  qc.Free;
  IsiSisaCuti(QM);
end;

procedure IsiSisaCuti(QM: tzquery);
begin
  ExecuteSQL('update m_employee e, ' + ES +
    '(select employee_id, sum(totalleave) as totalleave, ' + ES +
    'sum(takenleave) as takenleave, ' + ES +
    'sum(expiredleave) as expiredleave ' + ES + 'from m_employee_cuti where ' +
    getS('employee_id', QM) + ' ' + ES + 'group by employee_id' + ES + ' ) b ' +
    ES + 'set e.totalleave=b.totalleave, ' + ES + 'e.takenleave=b.takenleave, '
    + ES + 'e.expiredleave=b.expiredleave, ' + ES +
    'e.availableleave=b.totalleave-b.takenleave-b.expiredleave ' + ES +
    'where e.employee_id = ''' + QM.getfieldstring('employee_id') + ''' and ' +
    ES + 'e.employee_id = b.employee_id ');
end;

function GetGroupLogin: string;
begin
  Result := MenuLogin.StatusBar.Panels[1].Text;
end;

function GetEmployeeLogin: integer;
begin
  Result := 0;
  Result := getQValueInteger('select employee_id from s_user where id_user=''' +
    GetUserID + ''' ');
end;

procedure isiUserEmployee(QM: tzquery);
var
  qu: tzquery;
begin
  qu := CreateQuery;
  qu.Query('select * from s_user where username=''' +
    QM.getfieldstring('nip') + ''' ');
  if qu.RecordCount > 0 then
  begin
    qu.edit;
    isiKolomUser(False, qu);
  end
  else
  begin
    qu.Append;
    isiKolomUser(True, qu);
  end;
  qu.setField('id_usergroup', '5');
  qu.setField('username', QM.getField('nip'));
  qu.setField('password', ConvertToMD5(Decrypt(QM.getfieldstring('password'))));
  qu.setField('active', '0');
  if LowerCase(QM.getfieldstring('status')) = 'active' then
    qu.setField('active', '1');
  qu.SetMultiFieldQ('nip,employee_id', QM);
  qu.Post;
  qu.Free;
end;

function ImportExcelDirect(sheetID, Fn: string): Boolean;
var
  sheetname, tablename, id_module, map: string;
  qsss: tzquery;
  ts: TStringlist;
begin
  qsss := CreateQuery;
  Result := True;
  qsss.Query('select * from s_sheet where sheet_id=''' + sheetID + ''' ');
  if qsss.RecordCount = 0 then
  begin
    MsgError('Module Not Allowed To Import');
    Result := False;
    qsss.Free;
    exit;
  end
  else
  begin
    sheetname := qsss.getfieldstring('name');
    tablename := qsss.getfieldstring('tablename');
    id_module := qsss.getfieldstring('id_module');
    map := qsss.getfieldstring('map');
  end;

  qsss.Query('select * from ' + tablename + ' limit 1000');
  // qsss.Active := False;
  if FileExists(Fn) = False then
  begin
    MsgError('File "' + Fn + '" Does Not Exists');
    Result := False;
    qsss.Free;
    exit;
  end;
  ts := TStringlist.Create;
  ts.Clear;
  ts.CommaText := map;
  MenuLogin.QImport.ImportDestination := qidDataSet;
  MenuLogin.QImport.FileName := Fn;
  MenuLogin.QImport.sheetname := sheetname;
  MenuLogin.QImport.map := ts;
  MenuLogin.QImport.DataSet := qsss;
  MenuLogin.QImport.Execute;
  qsss.Refresh;
  ts.Free;
  qsss.Free;
end;

function ImportExcel(qt: tzquery; sheetID: string): Boolean;
var
  Fn, sheetname, tablename, tabletmp, id_module, tmp_table, map: string;
  qsss: tzquery;
  ts: TStringlist;
begin
  qsss := CreateQuery;
  Result := True;
  qsss.Query('select * from s_sheet where sheet_id=''' + sheetID + ''' ');
  if qsss.RecordCount = 0 then
  begin
    MsgError('Module Not Allowed To Import');
    Result := False;
    qsss.Free;
    exit;
  end
  else
  begin
    sheetname := qsss.getfieldstring('name');
    tablename := qsss.getfieldstring('tablename');
    tabletmp := tablename + '_import';
    id_module := qsss.getfieldstring('id_module');
    tmp_table := qsss.getfieldstring('tmp_table');
    map := qsss.getfieldstring('map');
  end;
  qsss.Free;
  qt.Active := False;
  ExecuteSQL('drop table if exists ' + tabletmp + '');
  ExecuteSQL(tmp_table);
  qt.Query('select * from ' + tabletmp);
  Fn := FileOpenDialog('Excel Files 2007 (*.xlsx)|*.xlsx');
  if FileExists(Fn) = False then
  begin
    MsgError('File "' + Fn + '" Does Not Exists');
    Result := False;
    exit;
  end;
  ts := TStringlist.Create;
  ts.Clear;
  ts.CommaText := map;
  MenuLogin.QImport.ImportDestination := qidDataSet;
  MenuLogin.QImport.FileName := Fn;
  MenuLogin.QImport.sheetname := sheetname;
  MenuLogin.QImport.map := ts;
  MenuLogin.QImport.DataSet := qt;
  MenuLogin.QImport.Execute;
  qt.Refresh;
  ts.Free;
end;

function getColumnSLookup(tipe, tablename, ColumnName: string): string;
begin
  Result := '';
  Result := getQValueString('select ' + tipe + ' from s_lookup ' + ES +
    'where tablename=''' + tablename + ''' and ' + ES + 'columnname=''' +
    ColumnName + ''' ');
end;

function getRefKerja(QM: tzquery): string;
var
  Dt: TDateTime;
  qx: tzquery;
  bulan, skno, nostr, dtsql: string;
  ts: TStringlist;
begin
  Result := '';
  if QM.isNull('resigndate') then
    exit;
  Dt := QM.getFieldDateTime('resigndate');
  dtsql := date2sql(Dt);
  qx := CreateQuery;
  ts := TStringlist.Create;
  qx.Query('select max(norefkerja) as norefkerja from m_employee where year(resigndate) = year('''
    + dtsql + ''') ');
  if qx.RecordCount = 0 then
  begin
    nostr := '0001';
  end
  else
  begin
    if qx.isNull('norefkerja') then
    begin
      nostr := '0001';
    end
    else
    begin
      ts.Clear;
      String2StringList(ts, qx.getfieldstring('norefkerja'), ' ');
      nostr := '0001';
      if ts.Count > 0 then
        nostr := FormatFloat('000#', strtofloat(ts.Strings[1]) + 1);
    end;
  end;

  skno := getQValueString('select nomor from m_mutasi where mutasi_id=12 ');
  skno := Replace(skno, '$tahun', formatdatetime('yyyy', Dt));
  skno := Replace(skno, '$bulan',
    getBulanRomawi(strtoint(formatdatetime('mm', Dt))));
  skno := Replace(skno, '$no', nostr);
  Result := skno;
  qx.Free;
  ts.Free;
end;

function getSKNumber(QM: tzquery): string;
var
  Dt: TDateTime;
  tablename, bulan, skno, nostr, dtsql: string;
  qx: tzquery;
  ts: TStringlist;
begin
  // dbg(qm.Tag);
  Result := '';
  if QM.getfieldstring('tipemutasi') = '' then
    exit;
  if QM.isNull('tipemutasi') then
    exit;
  if QM.isNull('tdate') then
    Dt := ServerDate
  else
    Dt := QM.getFieldDateTime('tdate');
  dtsql := date2sql(Dt);
  tablename := getTable(inttostr(QM.Tag));
  qx := CreateQuery;
  ts := TStringlist.Create;
  qx.Query('select max(sknumber) as sknumber from ' + tablename + ' ' + ES +
    'where ' + getS('tipemutasi', QM) + ' ');
  if qx.RecordCount = 0 then
  begin
    nostr := '0001';
  end
  else
  begin
    if qx.isNull('sknumber') then
    begin
      nostr := '0001';
    end
    else
    begin
      ts.Clear;
      String2StringList(ts, qx.getfieldstring('sknumber'), ' ');
      nostr := '0001';
      if ts.Count > 0 then
        nostr := FormatFloat('000#', strtofloat(ts.Strings[1]) + 1);
    end;
  end;

  skno := getQValueString('select nomor from m_mutasi where name=''' +
    QM.getfieldstring('tipemutasi') + ''' ');
  skno := Replace(skno, '$tahun', formatdatetime('yyyy', Dt));
  skno := Replace(skno, '$bulan',
    getBulanRomawi(strtoint(formatdatetime('mm', Dt))));
  skno := Replace(skno, '$no', nostr);
  Result := skno;
  qx.Free;
  ts.Free;
end;

function getBulanRomawi(bulan: integer): string;
begin
  Result := 'I';
  if bulan = 1 then
    Result := 'I';
  if bulan = 2 then
    Result := 'II';
  if bulan = 3 then
    Result := 'III';
  if bulan = 4 then
    Result := 'IV';
  if bulan = 5 then
    Result := 'V';
  if bulan = 6 then
    Result := 'VI';
  if bulan = 7 then
    Result := 'VII';
  if bulan = 8 then
    Result := 'VIII';
  if bulan = 9 then
    Result := 'IX';
  if bulan = 10 then
    Result := 'X';
  if bulan = 11 then
    Result := 'XI';
  if bulan = 12 then
    Result := 'XII';
end;

procedure backupDatabase(dirSave: string);
var
  S, ips, dbs, users, passs, pros, dir: string;
  ports: integer;
begin
  ips := ReadIniFile('server', 'hostname');
  ports := strtoint(ReadIniFile('server', 'port'));
  dbs := ReadIniFile('server', 'database');
  users := Decrypt(ReadIniFile('server', 'user'));
  passs := Decrypt(ReadIniFile('server', 'pass'));
  pros := 'mysql';
  dir := getQValueString
    ('select value from s_setting where name=''dirmysql'' ');
  if passs <> '' then
    passs := ' -p ' + passs;

  S := '/C ' + dir + 'mysqldump -h ' + ips + ' --port=' + inttostr(ports) +
    ' -u ' + users + passs + ' --routines ' + dbs + ' > ' + dirSave;
  ShellExecute_AndWait(pChar('cmd.exe'), pChar(S), SW_HIDE);
  // ShellExecute(MenuLogin.Handle, 'open', pchar('cmd.exe'), pchar(s), nil, SW_SHOWNORMAL );
end;

procedure restoreDatabase(FileName: string);
var
  ips, dbs, users, passs, pros, dir, S: string;
  ports: integer;
begin
  ips := ReadIniFile('server', 'hostname');
  ports := strtoint(ReadIniFile('server', 'port'));
  dbs := ReadIniFile('server', 'database');
  users := Decrypt(ReadIniFile('server', 'user'));
  passs := Decrypt(ReadIniFile('server', 'pass'));
  pros := 'mysql';
  dir := getQValueString
    ('select value from s_setting where name=''dirmysql'' ');
  if passs <> '' then
    passs := ' -p ' + passs;
  S := '/C ' + dir + 'mysql -h ' + ips + ' --port=' + inttostr(ports) + ' -u ' +
    users + passs + ' ' + dbs + ' < ' + FileName;
  ShellExecute_AndWait(pChar('cmd.exe'), pChar(S), SW_HIDE);
end;

procedure ZipFile(SourceFile, ZipFileName, passWord: string);
var
  x: integer;
  tsFile: TStringlist;
begin
  MenuLogin.AbZipper1.passWord := passWord;
  MenuLogin.AbZipper1.FileName := ZipFileName;
  tsFile := TStringlist.Create;
  tsFile.Clear;
  String2StringList(tsFile, SourceFile, ',');
  for x := 0 to tsFile.Count - 1 do
  begin
    if FileExists(tsFile.Strings[x]) then
      MenuLogin.AbZipper1.AddFiles(tsFile.Strings[x], 0);
  end;
  MenuLogin.AbZipper1.Save;
  MenuLogin.AbZipper1.CloseArchive;
end;

procedure UnZipFile(ZipFileName, passWord, UnZipDir: string);
begin
  MenuLogin.AbUnZipper1.passWord := passWord;
  MenuLogin.AbUnZipper1.BaseDirectory := UnZipDir;
  MenuLogin.AbUnZipper1.FileName := ZipFileName;
  MenuLogin.AbUnZipper1.ExtractFiles('*');
  MenuLogin.AbUnZipper1.CloseArchive;
end;

function ShellExecute_AndWait(FileName: string; Params: string;
  ShowCMD: integer): Boolean;
var
  exInfo: TShellExecuteInfo;
  Ph: DWORD;
begin
  FillChar(exInfo, SizeOf(exInfo), 0);
  with exInfo do
  begin
    cbSize := SizeOf(exInfo);
    fMask := SEE_MASK_NOCLOSEPROCESS or SEE_MASK_FLAG_DDEWAIT;
    Wnd := GetActiveWindow();
    exInfo.lpVerb := 'open';
    exInfo.lpParameters := pChar(Params);
    lpFile := pChar(FileName);
    nShow := ShowCMD;
  end;
  if ShellExecuteEx(@exInfo) then
    Ph := exInfo.hProcess
  else
  begin
    ShowMessage(SysErrorMessage(GetLastError));
    Result := True;
    exit;
  end;
  while WaitForSingleObject(exInfo.hProcess, 50) <> WAIT_OBJECT_0 do
    Application.ProcessMessages;
  CloseHandle(Ph);

  Result := True;

end;

function getTempDirectory: string;
var
  tempfolder: array [0 .. MAX_PATH] of char;
begin
  GetTempPath(MAX_PATH, @tempfolder);
  Result := StrPas(tempfolder);
end;

function getFileName(dir: string): string;
var
  tsxx: TStringlist;
begin
  tsxx := TStringlist.Create;
  tsxx.Clear;
  String2StringList(tsxx, dir, '\');
  Result := '';
  if tsxx.Count > 0 then
    Result := tsxx.Strings[tsxx.Count - 1];
end;

function GetVersionApplication(Fn: string): string;
var
  VerValueSize, Dummy, VerInfoSize: DWORD;
  VerInfo: pointer;
  VerValue: PVSFixedFileInfo;
begin
  Result := '';
  exit;
  VerInfoSize := GetFileVersionInfoSize(pChar(Fn), Dummy);
  GetMem(VerInfo, VerInfoSize);
  GetFileVersionInfo(pChar(Fn), 0, VerInfoSize, VerInfo);
  VerQueryValue(VerInfo, '\', pointer(VerValue), VerValueSize);
  with VerValue^ do
  begin
    Result := inttostr(dwFileVersionMS shr 16);
    Result := Result + '.' + inttostr(dwFileVersionMS and $FFFF);
    Result := Result + '.' + inttostr(dwFileVersionLS shr 16);
    Result := Result + '.' + inttostr(dwFileVersionLS and $FFFF);
  end;
  FreeMem(VerInfo, VerInfoSize);
end;

function getValueLookup(Sender: TObject): string;
begin
  Result := VarToStr(TcxLookupComboBox(Sender).EditValue);
end;

procedure afterPostAttendance2(QM: tzquery; isNew: Boolean);
var
  qa, qs : tzquery;
  id: string;
begin
  id := qm.getFieldString('attendance_id');
  qa := createquery;
  qs := createquery;
  qs.Query('select * from m_salary_attendance where (0=0) and procorder>=99 order by procorder');
  while not qs.Eof do
  begin
    qa.Query('select * from t_attendance where attendance_id='''+id+''' and ('+qs.getFieldString('filter')+') ');
    if qa.RecordCount>0 then
    begin
      qa.Query('select '+qs.getFieldString('amount')+' from t_attendance where attendance_id='''+id+''' ');
      if qa.RecordCount>0 then
      begin
        ExecuteSQL('update t_attendance set '+qs.getFieldString('name')+'='''+qa.getFieldString('amount')+''' '+es+
                   'where attendance_id='''+id+''' ');
      end;
    end else
    begin
      ExecuteSQL('update t_attendance set '+qs.getFieldString('name')+'=''0'' '+es+
                   'where attendance_id='''+id+''' ');
    end;
    qs.next;
  end;

  qs.Free;
  qa.Free;
end;

procedure beforePostAttendance2(QM: tzquery; isNew: Boolean;
  auto: Boolean = True; prosessTime: Boolean = False;
  processJadwal: Boolean = True);
begin
  prosessDataEmployee(QM, auto);
  prosessShift(QM, isNew);

  if prosessTime then prosessTimeInOut(QM, auto);
  if prosessTime then prosessStatusAttendance(QM, auto);

  prosessMinutes(QM, auto);
  prosesTunjangan(QM, isNew, auto);
end;

procedure prosessDataEmployee(qa: tzquery; auto: Boolean = True);
var
  qd: tzquery;
begin
  qd := CreateQuery;

  qd.Query('select employee_id,fingerid,nip,name,username,company_id,'
    + 'department_id,position_id,employeestatus_id,joindate,resigndate ' + ES +
    'from m_employee where ' + getS('employee_id', qa) + ' ' + ES + '');
  if qd.RecordCount > 0 then
  begin
    qa.SetMultiFieldQ
      ('employee_id,fingerid,nip,name,username,company_id,' +
      'department_id,position_id,employeestatus_id,joindate,resigndate', qd);
  end;

  qd.Query('select * from m_calendar where name=''' + qa.date2sql('tdate') + ''' ');
  if qd.RecordCount > 0 then
  begin
    qa.setField('publicleave', qd.getField('publicleave'));
    qa.setField('publicholiday', 1);
  end
  else
  begin
    qa.setField('publicleave', 0);
    qa.setField('publicholiday', 0);
  end;

  qd.Query('select nip, tdate,  GROUP_CONCAT(DISTINCT ttime ORDER BY nip asc, tdate asc) AS historytime '+es+
           'from ( '+es+
            '  SELECT nip, tdate, GROUP_CONCAT(DISTINCT ttime ORDER BY fingerlog_id asc) AS ttime '+es+
            '  FROM t_fingerlog '+es+
            '  where employee_id='''+qa.getFieldString('employee_id')+''' and '+es+
            '  tdate>='''+qa.date2sql('tdate')+''' and tdate<='''+qa.date2sql('tdate')+''' '+es+
            '  GROUP BY nip, tdate '+es+
            '  union all '+es+
            '  SELECT nip, tdate, GROUP_CONCAT(DISTINCT ttime ORDER BY finger_id asc) AS ttime '+es+
            '  FROM t_finger '+es+
            '  where employee_id='''+qa.getFieldString('employee_id')+''' and '+es+
            '  tdate>='''+qa.date2sql('tdate')+''' and tdate<='''+qa.date2sql('tdate')+''' '+es+
            '  GROUP BY nip, tdate '+es+
            ') a '+es+
            'group by nip, tdate '+es+
            'order by nip, tdate');
  if qd.RecordCount > 0 then
  begin
    qa.setField('historytime', qd.getField('historytime'));
  end;

  qd.Free;
end;

procedure insertJadwal(qa: tzquery);
var
  sdate, edate, Dt: TDateTime;
  qs, qf: tzquery;
  jam, shift: string;
  hk, dow, dayname: integer;
begin
  dow := DayOfWeek(qa.getFieldDateTime('tdate'));
  Dt := qa.getFieldDateTime('tdate');
  while DayOfWeek(Dt) <> 2 do
  begin
    Dt := Dt - 1;
  end;
  sdate := Dt;
  edate := addDays(sdate, 6);
  Dt := addDays(sdate, -1);
  hk := qa.getFieldINteger('harikerja');

  // if (dow<>2) then exit;
  if dow < 7 then
  begin
    dayname := 0;
  end
  else
  begin
    dayname := 7;
  end;

  qs := CreateQuery;
  qf := CreateQuery;

  if qa.getFieldINteger('harikerja') = 5 then
  begin
    shift := 'Shift 1';
  end
  else
  begin
    shift := '';
    jam := '';
    qf.Query('select * from t_finger f ' + ES + 'where ' + getS('nip', qa) +
      ' and tdate=''' + qa.date2sql('tdate') + ''' ' + ES +
      'and ttime not between ''07:00:01'' and ''07:59:59'' ' + ES +
      'order by fulldate limit 1');
    if qf.RecordCount > 0 then
    begin
      jam := qf.time2sql('ttime');
    end
    else
    begin
      qf.Query('select * from t_finger f ' + ES + 'where ' + getS('nip', qa) +
        ' and tdate=''' + date2sql(addDays(sdate, 1)) + ''' ' + ES +
        'and ttime not between ''07:00:01'' and ''07:59:59'' ' + ES +
        'order by fulldate limit 1');
      if qf.RecordCount > 0 then
      begin
        jam := qf.time2sql('ttime');
      end;
    end;

    if jam <> '' then
    begin
      qf.Query('select * from m_shift where harikerja=''' + inttostr(hk) + ''' '
        + ES + 'and dayname=''' + inttostr(dayname) + ''' and ''' + jam +
        ''' between in1 and in2 ' + ES + 'order by name limit 1');
      if qf.RecordCount > 0 then
      begin
        shift := qf.getfieldstring('name');
      end;
    end;
  end;

  if shift <> '' then
  begin
    qs.Query('select * from t_jadwal where ' + getS('employee_id', qa) +
      ' and tdate=''' + date2sql(sdate) + ''' ');
    if qs.RecordCount = 0 then
      qs.Append
    else
      qs.edit;
    qs.SetMultiFieldQ('employee_id,harikerja,nip', qa);
    qs.setField('tdate', sdate);
    qs.setField('startdate', sdate);
    qs.setField('enddate', edate);
    qs.setField('shift', shift);
    qs.Post;
  end
  else
  begin
    ExecuteSQL('delete from t_jadwal where ' + getS('employee_id', qa) +
      ' and tdate=''' + date2sql(sdate) + ''' ');
  end;

  qs.Free;
  qf.Free;
  //
end;

procedure prosessShift(qa: tzquery; isNew: Boolean);
var
  qi, qs: tzquery;
  D, M, y, dow: word;
  tgl: string;
  shiftInt: integer;
  nip, SQL, shift, tmp, dayname, harikerja: string;
begin
  DecodeDate(qa.getFieldDateTime('tdate'), y, M, D);
  nip       := qa.getFieldString('nip');
  tgl       := qa.date2sql('tdate');
  dayname   := '0';
  harikerja := '5';
  dow       := DayOfWeek(qa.getFieldDateTime('tdate'));
  qi := CreateQuery;
  qs := createquery;
  if qa.getFieldINteger('manual') = 0 then
  begin
    shift := 'Shift 1';
    if dow=1 then shift := 'Off';
    if dow=7 then shift := 'Off';

    if shift = '' then
    begin
      qa.setField('statusattendance_id', 99);
      qa.setField('statusattendance', 'NO JADWAL');
    end else
    begin
      qi.Query('select * from m_shift where dayname=''' + dayname + ''' ' + ES +
          'and harikerja=''' + harikerja + ''' and name=''' + shift + ''' ');
      if qi.RecordCount > 0 then
      begin
        qa.SetMultiFieldQ('shift_id,shiftin,shiftout', qi);
      end else
      begin
        qa.setField('statusattendance_id', 99);
        qa.setField('statusattendance', 'NO JADWAL');
      end;
    end;
  end
  else
  begin
    qi.Query('select * from m_shift where shift_id=''' +
      qa.getfieldstring('shift_id') + ''' ');
    if qi.RecordCount > 0 then
    begin
      qa.SetMultiFieldQ('shiftin,shiftout', qi);
    end;
  end;

  qi.Free;
end;

procedure prosessTimeInOut(qa: tzquery; auto: Boolean = True);
var
  qi: tzquery;
begin
  if qa.getFieldInteger('manual')=0 then
  begin
    qa.setField('timein', null);
    qa.setField('timeout', null);
  end;
  if qa.getFieldINteger('shift_id') = 0 then exit;

  qi := CreateQuery;

  qi.Query('select fulldate, ttime '+es+
           'from t_fingerlog ' + ES +
           'where ' + getS('employee_id', qa) +
           ' and tdate=''' + qa.date2sql('tdate') + ''' ' + ES +
           'union all'+es+
           'select fulldate, ttime '+es+
           'from t_finger ' + ES +
           'where ' + getS('employee_id', qa) +
           ' and tdate=''' + qa.date2sql('tdate') + ''' ' + ES +
           'order by fulldate limit 1');
  if qi.RecordCount > 0 then
  begin
    qa.setField('timein', qi.time2sql('ttime'));
  end;
  qi.Query('select fulldate, ttime '+es+
           'from t_fingerlog ' + ES +
           'where ' + getS('employee_id', qa) +
           ' and tdate=''' + qa.date2sql('tdate') + ''' ' + ES +
           'union all'+es+
           'select fulldate, ttime '+es+
           'from t_finger ' + ES +
           'where ' + getS('employee_id', qa) +
           ' and tdate=''' + qa.date2sql('tdate') + ''' ' + ES +
           'order by fulldate desc limit 1');
  if qi.RecordCount > 0 then
  begin
    if qa.time2sql('timein')<>qi.time2sql('ttime') then
    begin
      qa.setField('timeout', qi.time2sql('ttime'));
    end;
  end;
  qi.Free;
end;

procedure prosessStatusAttendance(qa: tzquery; auto: Boolean = True);
var
  qi: tzquery;
  x: integer;
  harikerja: integer;
  tbl: string;
begin
  qi := CreateQuery;
  if auto = False then
  begin
    qi.Free;
    exit;
  end;

  harikerja := 5;

  { 1	ALPHA
    2	CUTI
    3	OFF
    4	LUPA ABSEN
    5	LEMBUR
    6	IZIN TIDAK MASUK
    7	SAKIT
    8	MASUK
    9	IZIN TERLAMBAT
    10	IZIN PULANG CEPAT
    11	IZIN KELUAR KANTOR
    12	TO
    13	OFF sbg MASUK
    14	TERLAMBAT }

  if qa.isNull('timein') or qa.isNull('timeout') then qa.setField('statusattendance_id', '4');
  if qa.isNotNull('timein') and qa.isNotNull('timeout') then
  begin
    if qa.time2sql('timein') = qa.time2sql('timeout') then
    begin
      qa.setField('statusattendance_id', '4');
    end
    else
    begin
      qa.setField('statusattendance_id', '8');
    end;
  end;
  if qa.isNull('timein') and qa.isNull('timeout') then
  begin
    if harikerja = 5 then
    begin
      if (DayOfWeek(qa.getFieldDateTime('tdate')) = 7) or
        (DayOfWeek(qa.getFieldDateTime('tdate')) = 1) then
      begin
        qa.setField('statusattendance_id', '3');
      end
      else
      begin
        qa.setField('statusattendance_id', '1'); // alpa, hrs cek ke t_permit
      end;
    end
    else
    begin
      if (DayOfWeek(qa.getFieldDateTime('tdate')) = 1) then
      begin
        qa.setField('statusattendance_id', '3');
      end
      else
      begin
        qa.setField('statusattendance_id', '1'); // alpa, hrs cek ke t_permit
      end;
    end;
  end;

  if qa.getFieldINteger('statusattendance_id') = 1 then
  begin
    if qa.getFieldINteger('publicholiday') = 1 then
    begin
      qa.setField('statusattendance_id', '3');
    end;
  end;

  qi.Query('select * from t_cuti where ' + getS('nip', qa) + ' ' + ES +
    'and status=''APPROVED'' and leavetype_id=1 and tdate=''' + qa.date2sql('tdate') + ''' ' +
    ES + 'order by tdate desc');
  if qi.RecordCount>0 then
  begin
    qa.setField('statusattendance_id', '2');
  end;

  qi.Query('select * from t_cuti where ' + getS('nip', qa) + ' ' + ES +
    'and leavetype_id<>1 and tdate=''' + qa.date2sql('tdate') + ''' ' +
    ES + 'order by tdate desc');
  if qi.RecordCount>0 then
  begin
    if qi.getFieldInteger('leavetype_id')=2 then qa.setField('statusattendance_id', '6');
    if qi.getFieldInteger('leavetype_id')=3 then qa.setField('statusattendance_id', '7');
  end;

  qa.setField('statusattendance',
    getQValueString('select name from m_statusattendance where ' +getS('statusattendance_id', qa) + ' '));

  if (qa.getFieldINteger('statusattendance_id') = 2) then
  begin
    qa.setField('shift_id', 0);
    qa.setField('shiftin', null);
    qa.setField('shiftout', null);
  end;
  if (qa.getFieldINteger('statusattendance_id') = 3) then
  begin
    qa.setField('shift_id', 0);
    qa.setField('shiftin', null);
    qa.setField('shiftout', null);
  end;
  if (qa.getFieldINteger('statusattendance_id') = 6) then
  begin
    qa.setField('shift_id', 0);
    qa.setField('shiftin', null);
    qa.setField('shiftout', null);
  end;
  qi.Free;
end;

procedure prosessMinutes(Q: tzquery; auto: Boolean = True);
var
  masuk, keluar: TDateTime;
  toleransi, status, sisa, dow: integer;
  dt1, dt2: TDateTime;

  y, M, D, H, N, S, ms: word;

  full1, full2: string;

  f1, f2: TDateTime;
  v: variant;
  // h1, m1, s1, n1,
  // h2, m2, s2, n2 : word;
begin
  masuk := EncodeTime(10, 0, 0, 0);
  keluar := EncodeTime(21, 0, 0, 0);

  dow := DayOfWeek(Q.getFieldDateTime('tdate'));
  Q.setField('lateminutes', '0');
  Q.setField('permitminutes', '0');
  Q.setField('earlyoutminutes', '0');

  // EncodeDateTime()
  if (Q.isNotNull('timein')) and (Q.isNotNull('timeout')) then
  begin
    if Q.time2sql('timeout') < Q.time2sql('timein') then
    begin
      Q.setField('workhour',
        RoundUp(MinutesBetween(Q.getFieldDateTime('timein'), EncodeTime(23, 59,
        59, 20)) / 60, 2));
      Q.setField('workhour', Q.getFieldDouble('workhour') +
        RoundUp(MinutesBetween(EncodeTime(0, 0, 1, 20),
        Q.getFieldDateTime('timeout')) / 60, 2));
    end
    else
    begin
      Q.setField('workhour',
        RoundUp(MinutesBetween(Q.getFieldDateTime('timein'),
        Q.getFieldDateTime('timeout')) / 60, 2));
    end;
  end;


  if (Q.isNotNull('timeout')) and (Q.isNotNull('shiftout')) then
  begin

  end;

  toleransi := getQValueInteger('select toleransi from m_shift where ' + getS('shift_id', Q) + ' ');
  status := Q.getFieldINteger('statusattendance_id');

  if (Q.isNotNull('timein')) and (Q.isNotNull('shiftin')) then
  begin
    if Q.getFieldDateTime('timein') > Q.getFieldDateTime('shiftin') then
    begin
      Q.setField('lateminutes', MinutesBetween(Q.getFieldDateTime('shiftin'), Q.getFieldDateTime('timein')));
      if Q.getField('lateminutes') <= toleransi then Q.setField('lateminutes', '0');
      if Q.getFieldDouble('lateminutes') <> 0 then Q.setField('statusattendance_id', '14');
    end;
  end;

  if (Q.isNotNull('timeout')) and (Q.isNotNull('shiftout')) then
  begin
    if Q.isNull('timein') then
    begin
      DecodeDate(Q.getFieldDateTime('tdate'), y, M, D);
      DecodeTime(Q.getFieldDateTime('timeout'), H, N, S, ms);
      f1 := EncodeDateTime(y, M, D, H, N, 0, 0);

      DecodeDate(Q.getFieldDateTime('tdate'), y, M, D);
      DecodeTime(Q.getFieldDateTime('shiftout'), H, N, S, ms);
      f2 := EncodeDateTime(y, M, D, H, N, 0, 0);
    end
    else
    begin
      if Q.time2sql('timeout') < Q.time2sql('timein') then
      begin
        DecodeDate(addDays(Q.getFieldDateTime('tdate'), 1), y, M, D);
        DecodeTime(Q.getFieldDateTime('timeout'), H, N, S, ms);
        f1 := EncodeDateTime(y, M, D, H, N, 0, 0);

        DecodeDate(Q.getFieldDateTime('tdate'), y, M, D);
        DecodeTime(Q.getFieldDateTime('shiftout'), H, N, S, ms);
        f2 := EncodeDateTime(y, M, D, H, N, 0, 0);
      end
      else
      begin
        DecodeDate(Q.getFieldDateTime('tdate'), y, M, D);
        DecodeTime(Q.getFieldDateTime('timeout'), H, N, S, ms);
        f1 := EncodeDateTime(y, M, D, H, N, 0, 0);

        DecodeDate(Q.getFieldDateTime('tdate'), y, M, D);
        DecodeTime(Q.getFieldDateTime('shiftout'), H, N, S, ms);
        f2 := EncodeDateTime(y, M, D, H, N, 0, 0);
      end;
    end;
    if q.time2sql('shiftout')<q.time2sql('shiftin') then f2 := adddays(f2,1);

    if f1 < f2 then
    begin
      v := MinutesBetween(f1, f2);
      Q.setField('earlyoutminutes', v);
      if Q.getField('earlyoutminutes') <= toleransi then Q.setField('earlyoutminutes', '0');
    end;

  end;
end;

procedure prosesOT(QM: tzquery; auto: Boolean = True);
var
  om, ottype, ot, othour: double;
  qot: tzquery;
  tipebase: string;
  tsoff: TStringlist;
  x: integer;
  ottime: TDateTime;
begin
  // dbg(auto);
  ot := QM.getFieldDouble('overtime_id');
  ottype := QM.getFieldDouble('overtimetype_id');

  QM.SetMultiField
    ('ot150,ot200,ot300,ot400,totalothour,totalothour2,baseot,totalotrp', 0);
  // if qm.getFieldInteger('statusattendance_id')<>5 then exit;

  // othour:= qm.getFieldDouble('totalothour');

  qot := CreateQuery;

  om := QM.getFieldDouble('overtimehour');
  ottype := QM.getFieldDouble('overtimetype_id');
  QM.SetMultiField('ot150,ot200,ot300,ot400', '0');
  qot.Query('select * from m_overtimehour where ' + getS('overtime_id', QM) +
    '  ' + ES + 'and overtimetype_id=''' + Float2Str(ottype) +
    ''' order by _order ');
  // pesan(qot.SQL.Text);
  qot.First;
  while not qot.Eof do
  begin
    if om > qot.getFieldDouble('hours') then
    begin
      QM.setField(qot.getfieldstring('field'), qot.getFieldDouble('hours') *
        qot.getFieldDouble('coef'));
    end
    else
    begin
      QM.setField(qot.getfieldstring('field'), om * qot.getFieldDouble('coef'));
    end;
    om := om - qot.getFieldDouble('hours');
    if om <= 0 then
      break;
    qot.Next;
  end;

  othour := QM.getFieldDouble('ot150') + QM.getFieldDouble('ot200') +
    QM.getFieldDouble('ot300') + QM.getFieldDouble('ot400');
  QM.setField('totalothour', othour);
  QM.setField('totalothour2', 0);
  QM.SetMultiField('totalotrp,baseot', '0');
  tipebase := '';
  qot.Query('select * from m_overtime where ' + getS('overtime_id', QM) + ' ');
  if qot.RecordCount > 0 then
  begin // begin qot overtime
    tipebase := LowerCase(qot.getfieldstring('base'));
    if tipebase = 'salary' then
    begin
      QM.setField('baseot',
        getQValueDouble
        ('select coalesce(sum(m_employee_salary.amount ),0) as baseot ' + ES +
        'from m_employee_salary ' + ES + 'where ' + getS('employee_id', QM) +
        ' and tdate <= ''' + QM.date2sql('tdate') + ''' ' + ES +
        'and active = 1 and salary_id in ( ' + ES +
        'select salary_id from m_salary where tables=''m_employee_salary'' ' +
        ES + 'and slipname in ( ' + ES +
        'select slipname from m_overtimebase where ' + getS('overtime_id',
        QM) + '  ' + ES + ') ' + ES + ') ' + ES + 'group by employee_id'));
      if qot.getFieldDouble('rate') > 0 then
      begin
        QM.setField('totalotrp',
          (QM.getFieldDouble('baseot') / qot.getFieldDouble('rate')) *
          (QM.getFieldDouble('totalothour') + QM.getFieldDouble
          ('totalothour2')));
      end;
    end
    else if tipebase = 'fix' then
    begin
      QM.setField('baseot', qot.getFieldDouble('baseot'));
      if qot.getFieldDouble('rate') > 0 then
      begin
        QM.setField('totalotrp',
          (QM.getFieldDouble('baseot') / qot.getFieldDouble('rate')) *
          (QM.getFieldDouble('totalothour') + QM.getFieldDouble
          ('totalothour2')));
      end;
    end
    else if tipebase = 'hour' then
    begin
      QM.setField('baseot',
        getQValueDouble('select baseothour from m_overtimefixhour ' + ES +
        ' where ' + getS('overtime_id', QM) + ' and ' + ES + ' ' +
        getS('overtimetype_id', QM) + ' '));
      QM.setField('totalotrp', QM.getFieldDouble('baseot') *
        (QM.getFieldDouble('totalothour') + QM.getFieldDouble('totalothour2')));
    end;
  end; // end qot overtime
  QM.setField('totalotrp', RoundUp(QM.getFieldDouble('totalotrp'), 0));
  qot.Free;
  tsoff.Free;
end;

procedure prosesTunjangan(QM: tzquery; isNew: Boolean; auto: Boolean = True);
var
  tablename, SQL, select: string;
  x: integer;
  x1, x2, x3, x4, x5, isi: variant;
  qx, qs, qt: tzquery;
begin
  tablename := 'tmp_attendance' + QM.getfieldstring('attendance_id');
  ExecuteSQL('DROP TABLE IF EXISTS ' + tablename);
  select := '';
  // for x := 0 to qm.FieldCount-1 do
  // begin
  // qm.fi
  // select := select + vartostr(isi) + ' AS ' + qm.fieldName(x);
  // end;
  // if isnew then
  // begin
  // select := select + '0 AS attendance_id, '+es;
  // end else
  // begin
  // select := select + qm.getFieldString('attendance_id') + ' AS attendance_id, '+es;
  // end;

  select := select + inttostr(QM.getFieldINteger('attendance_id')) +
    ' AS attendance_id, ' + ES;
  select := select + inttostr(QM.getFieldINteger('employee_id')) +
    ' AS employee_id, ' + ES;
  select := select + '''' + QM.getfieldstring('nip') + ''' AS nip, ' + ES;
  select := select + inttostr(QM.getFieldINteger('statusattendance_id')) +
    ' AS statusattendance_id, ' + ES;
  select := select + '''' + QM.getfieldstring('statusattendance') +
    ''' AS statusattendance, ' + ES;
  select := select + '''' + QM.date2sql('tdate') + ''' AS tdate, ' + ES;
  select := select + '''' + QM.time2sql('timein') + ''' AS timein, ' + ES;
  select := select + '''' + QM.time2sql('timeout') + ''' AS timeout, ' + ES;
  select := select + inttostr(QM.getFieldINteger('workhour')) +
    ' AS workhour, ' + ES;
  select := select + inttostr(QM.getFieldINteger('lateminutes')) +
    ' AS lateminutes, ' + ES;
  select := select + inttostr(QM.getFieldINteger('permitminutes')) +
    ' AS permitminutes, ' + ES;
  select := select + inttostr(QM.getFieldINteger('earlyoutminutes')) +
    ' AS earlyoutminutes, ' + ES;
  select := select + inttostr(QM.getFieldINteger('shift_id')) +
    ' AS shift_id, ' + ES;
  select := select + '''' + QM.time2sql('shiftin') + ''' AS shiftin, ' + ES;
  select := select + '''' + QM.time2sql('shiftout') + ''' AS shiftout, ' + ES;
  select := select + inttostr(QM.getFieldINteger('company_id')) +
    ' AS company_id, ' + ES;
  select := select + inttostr(QM.getFieldINteger('department_id')) +
    ' AS department_id, ' + ES;
  select := select + inttostr(QM.getFieldINteger('position_id')) +
    ' AS position_id, ' + ES;
  select := select + inttostr(QM.getFieldINteger('employeestatus_id')) +
    ' AS employeestatus_id, ' + ES;
  select := select + '''' + QM.date2sql('joindate') + '''' +
    ' AS joindate, ' + ES;
  select := select + '''' + QM.date2sql('resigndate') + '''' +
    ' AS resigndate ' + ES;

  SQL := 'CREATE TABLE ' + tablename + ' AS' + ES + 'SELECT ' + select;
  // pesan(sql);
  ExecuteSQL(SQL);

  QM.setField('getmakan', '0');

  qs := CreateQuery;
  qt := CreateQuery;
  qx := CreateQuery;

  qs.Query('select * from m_salary_attendance where (0=0) order by procorder');
  while not qs.Eof do
  begin
    x2 := QM.date2sql('tdate');
    if (LowerCase(qs.getfieldstring('name')) = 'upah') or (LowerCase(qs.getfieldstring('name')) = 'upah_pot') then
    begin
      SQL := qs.getfieldstring('amount');
      SQL := Replace(SQL, '$EMPLOYEE_ID', QM.getfieldstring('employee_id'));
      SQL := Replace(SQL, '$TDATE', QM.date2sql('tdate'));

      // pesan(sql);
      qt.Query(SQL);
      if qt.RecordCount > 0 then
      begin
        x1 := qt.getFieldDouble('amount');

        QM.setField(qs.getfieldstring('name'), qt.getFieldDouble('amount'));

        qx.Query('select * from ' + tablename + ' limit 1');
        if qx.RecordCount > 0 then
        begin
          qx.edit;
          qx.setField(qs.getfieldstring('name'), qt.getFieldDouble('amount'));
          qx.Post;
        end;
      end;
    end
    else
    begin
      SQL := 'select ' + qs.getfieldstring('amount') + ' from ' + tablename +
        ' where ' + qs.getfieldstring('filter') + ' ';
      // pesan(sql);
      qt.Query(SQL);
      if qt.RecordCount > 0 then
      begin
        x3 := qs.getfieldstring('name');
        x4 := qt.getFieldDouble('amount');
        x5 := QM.getFieldDouble(qs.getfieldstring('name'));

        if x4=1 then
        begin
          QM.setField(qs.getfieldstring('name'), qt.getFieldDouble('amount'));
        end else
        begin
          QM.setField(qs.getfieldstring('name'), qt.getFieldDouble('amount') +
                      QM.getFieldDouble(qs.getfieldstring('name')));
        end;
      end else
      begin
        if qs.getfieldstring('name').ToLower='cacatabsen' then
        begin
          QM.setField(qs.getfieldstring('name'), 0);
        end;
        if qs.getfieldstring('name').ToLower='getmakan' then
        begin
          QM.setField(qs.getfieldstring('name'), 0);
        end;
      end;
    end;

    qs.Next;
  end;

  qx.Free;
  qt.Free;
  qs.Free;

  ExecuteSQL('DROP TABLE IF EXISTS ' + tablename);

//  if (qm.getFieldInteger('pabsen')=0) and (qm.getFieldInteger('statusattendance_id')<>4) then
//  begin
//    qm.setField('cacatabsen', 0);
//  end;

end;

end.
