unit UProcessImport;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, system.win.comobj,
  System.Classes, Vcl.Graphics, System.DateUtils, System.StrUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, cxGraphics, cxControls, cxLookAndFeels,
  cxLookAndFeelPainters, dxSkinsCore, dxSkinBlack, dxSkinBlue, dxSkinBlueprint,
  dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, dxSkinscxPCPainter, cxPCdxBarPopupMenu,
  cxPC, cxStyles, cxCustomData, cxFilter, cxData, cxDataStorage, cxEdit,
  cxNavigator, Data.DB, cxDBData, cxGridCustomTableView, cxGridTableView,
  cxGridBandedTableView, cxGridDBBandedTableView, cxGridCustomPopupMenu,
  cxGridPopupMenu, ZAbstractRODataset, ZAbstractDataset, ZDataset, cxGridLevel,
  cxClasses, cxGridCustomView, cxGrid, Vcl.StdCtrls, System.Actions,
  Vcl.ActnList, Vcl.ExtCtrls, dxLayoutContainer, dxLayoutControl, cxContainer,
  dxLayoutcxEditAdapters, cxDBEdit, cxTextEdit, cxMaskEdit, cxSpinEdit, cxTreeView,
  dxLayoutLookAndFeels, cxMemo, cxDBNavigator, dxScreenTip, dxCustomHint, cxHint,
  Vcl.Buttons, dxGDIPlusClasses, dxSkinsdxStatusBarPainter, dxStatusBar,
  Vcl.ComCtrls, Vcl.ToolWin, Vcl.Menus, cxButtons, cxDropDownEdit, cxBlobEdit,
  frxClass, frxDBSet, cxDBLookupComboBox, dxCore, cxDateUtils, cxCalendar,
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, cxSplitter, IdBaseComponent,
  IdComponent, IdTCPConnection, IdTCPClient, IdExplicitTLSClientServerBase,
  IdMessageClient, IdSMTPBase, IdSMTP, IdMessage, IdAttachment, IdIOHandler,
  IdIOHandlerSocket, IdIOHandlerStack, IdSSL, IdSSLOpenSSL, IdAttachmentFile,
  Vcl.AppEvnts, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu, dxSpreadSheetActions, dxSpreadSheet,
  dxSpreadSheetCore, cxGridExportLink,
  cxDataControllerConditionalFormattingRulesManagerDialog, QImport3,
  QImport3Xlsx, cxDBLabel;

type
  TFrmProcessImport = class(TForm)
    PageControll1: TcxPageControl;
    Tab1: TcxTabSheet;
    Q_MASTER: TZQuery;
    DS_MASTER: TDataSource;
    cxGridPopupMenu1: TcxGridPopupMenu;
    txtID: TEdit;
    txtModuleName: TEdit;
    ActionList1: TActionList;
    actRefresh: TAction;
    actAdd: TAction;
    actEdit: TAction;
    actSave: TAction;
    actDelete: TAction;
    actcancel: TAction;
    PopupMenu: TPopupMenu;
    ppShowALL: TMenuItem;
    ppExport: TMenuItem;
    ppFreeze: TMenuItem;
    ppFind: TMenuItem;
    ppGroup: TMenuItem;
    ppGroupDefault: TMenuItem;
    ppGroupMonth: TMenuItem;
    ppGroupYear: TMenuItem;
    RelativeToday1: TMenuItem;
    ItemMenu: TPopupMenu;
    Panel2: TPanel;
    ItemPrint: TPopupMenu;
    ItemDate: TPopupMenu;
    MenuItem1: TMenuItem;
    OneMonth1: TMenuItem;
    NextMonth1: TMenuItem;
    PrevMonth1: TMenuItem;
    OneYear1: TMenuItem;
    OneDay1: TMenuItem;
    oday1: TMenuItem;
    BtnClose: TcxButton;
    BtnPrint: TcxButton;
    BtnMenu: TcxButton;
    LblJudul: TLabel;
    BtnDateTemplate: TcxButton;
    BtnEnddate: TcxDateEdit;
    BtnStartdate: TcxDateEdit;
    LblEnddate: TLabel;
    LblStartdate: TLabel;
    actFirst: TAction;
    actOneMonth: TAction;
    actNextMonth: TAction;
    actPrevMonth: TAction;
    actOneYear: TAction;
    actOneDay: TAction;
    actToday: TAction;
    actStartdate: TAction;
    actEnddate: TAction;
    actTabMaster: TAction;
    actTabDetail1: TAction;
    dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList;
    dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel;
    Layout: TdxLayoutControl;
    dxLayoutGroup1: TdxLayoutGroup;
    N1: TMenuItem;
    N2: TMenuItem;
    ppAdd: TMenuItem;
    ppEdit: TMenuItem;
    ppDelete: TMenuItem;
    ppRefresh: TMenuItem;
    actLookup: TAction;
    GRID_DATA1: TcxGrid;
    DATA1: TcxGridDBBandedTableView;
    GRID_DATA1Level1: TcxGridLevel;
    ImportFromExcel1: TMenuItem;
    actDBG: TAction;
    ApplicationEvents1: TApplicationEvents;
    Tab2: TcxTabSheet;
    Tab3: TcxTabSheet;
    cxGridPopupMenu2: TcxGridPopupMenu;
    DS_Transer: TDataSource;
    Q_Transfer: TZQuery;
    cxGridPopupMenu3: TcxGridPopupMenu;
    DS_Cash: TDataSource;
    Q_Cash: TZQuery;
    GRID_DATA2: TcxGrid;
    DATA2: TcxGridDBBandedTableView;
    GRID_DATA2Level1: TcxGridLevel;
    GRID_DATA3: TcxGrid;
    DATA3: TcxGridDBBandedTableView;
    GRID_DATA3Level1: TcxGridLevel;
    hisWeek1: TMenuItem;
    N6ExportWeekly1: TMenuItem;
    hisMonth1: TMenuItem;
    CImport: TQImport3Xlsx;
    Q_Import: TZQuery;
    DS_Import: TDataSource;
    cboTipe: TcxComboBox;
    N2CekJoin1: TMenuItem;
    cxDBLabel1: TcxDBLabel;
    DS_Cek: TDataSource;
    Q_Cek: TZQuery;
    menuOK: TMenuItem;
    N1CheckJoin1: TMenuItem;
    N2CheckStruktur1: TMenuItem;
    N3CheckSalary1: TMenuItem;
    N4CheckBPJSTK1: TMenuItem;
    N5CheckBPJSKS1: TMenuItem;
    N6CheckLoan1: TMenuItem;
    N7CheckRapel1: TMenuItem;
    N2CheckAbsensi1: TMenuItem;
    N9CheckPajak1: TMenuItem;
    N0CheckNoRekening1: TMenuItem;
    ACheckResigndate1: TMenuItem;
    menuInsert: TMenuItem;
    Q_Cek1: TZQuery;
    DS_Cek1: TDataSource;
    Q_Cek2: TZQuery;
    DS_Cek2: TDataSource;
    DS_DATA1: TDataSource;
    Q_DATA1: TZQuery;
    cxGridPopupMenu4: TcxGridPopupMenu;
    Q_DATA2: TZQuery;
    DS_DATA2: TDataSource;
    cxGridPopupMenu5: TcxGridPopupMenu;
    Q_DATA3: TZQuery;
    DS_DATA3: TDataSource;
    cxGridPopupMenu6: TcxGridPopupMenu;
    Tab4: TcxTabSheet;
    Tab5: TcxTabSheet;
    Tab6: TcxTabSheet;
    Tab7: TcxTabSheet;
    Tab8: TcxTabSheet;
    Tab9: TcxTabSheet;
    Tab10: TcxTabSheet;
    Tab11: TcxTabSheet;
    Tab12: TcxTabSheet;
    Tab13: TcxTabSheet;
    Tab14: TcxTabSheet;
    Tab15: TcxTabSheet;
    Q_DATA4: TZQuery;
    DS_DATA4: TDataSource;
    cxGridPopupMenu7: TcxGridPopupMenu;
    Q_DATA5: TZQuery;
    DS_DATA5: TDataSource;
    cxGridPopupMenu8: TcxGridPopupMenu;
    cxGridPopupMenu9: TcxGridPopupMenu;
    DS_DATA10: TDataSource;
    Q_DATA10: TZQuery;
    cxGridPopupMenu10: TcxGridPopupMenu;
    DS_DATA9: TDataSource;
    Q_DATA9: TZQuery;
    Q_DATA8: TZQuery;
    DS_DATA8: TDataSource;
    cxGridPopupMenu11: TcxGridPopupMenu;
    cxGridPopupMenu12: TcxGridPopupMenu;
    DS_DATA7: TDataSource;
    Q_DATA7: TZQuery;
    Q_DATA6: TZQuery;
    DS_DATA6: TDataSource;
    cxGridPopupMenu13: TcxGridPopupMenu;
    cxGridPopupMenu14: TcxGridPopupMenu;
    DS_DATA15: TDataSource;
    Q_DATA15: TZQuery;
    cxGridPopupMenu15: TcxGridPopupMenu;
    DS_DATA14: TDataSource;
    Q_DATA14: TZQuery;
    Q_DATA13: TZQuery;
    DS_DATA13: TDataSource;
    cxGridPopupMenu16: TcxGridPopupMenu;
    cxGridPopupMenu17: TcxGridPopupMenu;
    DS_DATA12: TDataSource;
    Q_DATA12: TZQuery;
    Q_DATA11: TZQuery;
    DS_DATA11: TDataSource;
    cxGridPopupMenu18: TcxGridPopupMenu;
    GRID_DATA4: TcxGrid;
    DATA4: TcxGridDBBandedTableView;
    GRID_DATA4Level1: TcxGridLevel;
    GRID_DATA5: TcxGrid;
    DATA5: TcxGridDBBandedTableView;
    GRID_DATA5Level1: TcxGridLevel;
    GRID_DATA6: TcxGrid;
    DATA6: TcxGridDBBandedTableView;
    GRID_DATA6Level1: TcxGridLevel;
    GRID_DATA7: TcxGrid;
    DATA7: TcxGridDBBandedTableView;
    GRID_DATA7Level1: TcxGridLevel;
    GRID_DATA8: TcxGrid;
    DATA8: TcxGridDBBandedTableView;
    GRID_DATA8Level1: TcxGridLevel;
    GRID_DATA9: TcxGrid;
    DATA9: TcxGridDBBandedTableView;
    GRID_DATA9Level1: TcxGridLevel;
    GRID_DATA10: TcxGrid;
    DATA10: TcxGridDBBandedTableView;
    GRID_DATA10Level1: TcxGridLevel;
    GRID_DATA11: TcxGrid;
    DATA11: TcxGridDBBandedTableView;
    GRID_DATA11Level1: TcxGridLevel;
    GRID_DATA12: TcxGrid;
    DATA12: TcxGridDBBandedTableView;
    GRID_DATA12Level1: TcxGridLevel;
    GRID_DATA13: TcxGrid;
    DATA13: TcxGridDBBandedTableView;
    GRID_DATA13Level1: TcxGridLevel;
    GRID_DATA14: TcxGrid;
    DATA14: TcxGridDBBandedTableView;
    GRID_DATA14Level1: TcxGridLevel;
    GRID_DATA15: TcxGrid;
    DATA15: TcxGridDBBandedTableView;
    GRID_DATA15Level1: TcxGridLevel;
    procedure ReloadClick(syarat:string=' (0=0) ');
    procedure ShowDateTemplate(Tipe:Boolean=True);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure FormCreate(Sender: TObject);
    procedure ppExportClick(Sender: TObject);
    procedure ppGroupDefaultClick(Sender: TObject);
    procedure ppGroupMonthClick(Sender: TObject);
    procedure ppGroupYearClick(Sender: TObject);
    procedure RelativeToday1Click(Sender: TObject);
    procedure ppShowALLClick(Sender: TObject);
    procedure BtnCloseClick(Sender: TObject);
    procedure BtnStartdatePropertiesChange(Sender: TObject);
    procedure BtnEnddatePropertiesChange(Sender: TObject);
    procedure MenuItem1Click(Sender: TObject);
    procedure OneMonth1Click(Sender: TObject);
    procedure NextMonth1Click(Sender: TObject);
    procedure PrevMonth1Click(Sender: TObject);
    procedure OneYear1Click(Sender: TObject);
    procedure OneDay1Click(Sender: TObject);
    procedure oday1Click(Sender: TObject);
    procedure actStartdateExecute(Sender: TObject);
    procedure actEnddateExecute(Sender: TObject);
    procedure BtnStartdateKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure BtnEnddateKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure actTabMasterExecute(Sender: TObject);
    function getFocusQuery : TZQuery;
    procedure actLookupExecute(Sender: TObject);
    procedure NewRecordQ(idm : integer; nama:string);
    procedure afterCancelMaster;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure actDBGExecute(Sender: TObject);
    procedure hisWeek1Click(Sender: TObject);
    procedure hisMonth1Click(Sender: TObject);
    procedure N6ExportWeekly1Click(Sender: TObject);
    procedure kosonginQueryCek;
    procedure isiQueryCek(importid:string);
    procedure menuOKClick(Sender: TObject);
    procedure menuInsertClick(Sender: TObject);
    procedure N1CheckJoin1Click(Sender: TObject);

    procedure changeMenuCaption(menutipe:string);
    procedure N2CheckStruktur1Click(Sender: TObject);
    procedure N3CheckSalary1Click(Sender: TObject);
    procedure N4CheckBPJSTK1Click(Sender: TObject);
    procedure N5CheckBPJSKS1Click(Sender: TObject);
    procedure N6CheckLoan1Click(Sender: TObject);
    procedure N7CheckRapel1Click(Sender: TObject);
    procedure N2CheckAbsensi1Click(Sender: TObject);
    procedure N9CheckPajak1Click(Sender: TObject);
    procedure N0CheckNoRekening1Click(Sender: TObject);
    procedure ACheckResigndate1Click(Sender: TObject);

    procedure isiGridCheck(x:integer; qc1:tzquery);
    procedure DeleteAllColumnGrid;

    procedure processCheck(qc:tzquery);

    procedure insertLoanDetail;
    procedure isiLoanDetail(qm: tzquery; tipe:string='bulanan');
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmProcessImport: TFrmProcessImport;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  tgltransfer, ExcelName : string;

implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit2;
//form close, form create
procedure TFrmProcessImport.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmProcessImport.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  action := caFree;
end;
procedure TFrmProcessImport.FormCreate(Sender: TObject);
begin
  cbotipe.Text       := 'Mingguan';
  isDebug := true;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  lbljudul.Caption   := SentencesCase(txtModuleName.Text);
  self.Caption       := lbljudul.Caption;

  DisableChangeDate  := false;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  startdate          := btnstartdate.Date;
  enddate            := BtnEnddate.Date;


  ShowDateTemplate;
  PageControll1.ActivePageIndex := 0;

  kosonginQueryCek;
  DeleteAllColumnGrid;

  ReadOnlyDataset(Data1);
  ReadOnlyDataset(Data2);
  ReadOnlyDataset(Data3);
  ReadOnlyDataset(Data4);
  ReadOnlyDataset(Data5);

  ReadOnlyDataset(Data6);
  ReadOnlyDataset(Data7);
  ReadOnlyDataset(Data8);
  ReadOnlyDataset(Data9);
  ReadOnlyDataset(Data10);

  ReadOnlyDataset(Data11);
  ReadOnlyDataset(Data12);
  ReadOnlyDataset(Data13);
  ReadOnlyDataset(Data14);
  ReadOnlyDataset(Data15);
end;
procedure TFrmProcessImport.ReloadClick(syarat:string=' (0=0) ');
begin
  //
end;
procedure TFrmProcessImport.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmProcessImport.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmProcessImport.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmProcessImport.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmProcessImport.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmProcessImport.MenuItem1Click(Sender: TObject);
begin
  //first date to now
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := ServerDate;
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmProcessImport.OneMonth1Click(Sender: TObject);
begin
  //one month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmProcessImport.NextMonth1Click(Sender: TObject);
begin
  //next month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(yearof(addMonths(BtnStartdate.Date, 1)),
                          MonthOf(addMonths(BtnStartdate.Date,1)),1 );
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmProcessImport.PrevMonth1Click(Sender: TObject);
begin
  //prev month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  startdate := addMonths(startdate, -1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmProcessImport.OneYear1Click(Sender: TObject);
begin
  //one year
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := EncodeDate(YearOf(BtnStartdate.Date), 12, 31);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmProcessImport.OneDay1Click(Sender: TObject);
begin
  //oneday
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  BtnEnddate.Date := BtnStartdate.Date;
  startdate       := BtnStartdate.Date;
  enddate         := BtnEnddate.Date;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmProcessImport.oday1Click(Sender: TObject);
begin
  //today
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := ServerDate;
  enddate           := ServerDate;
  BtnStartdate.Date := ServerDate;
  BtnEnddate.Date   := ServerDate;
  ReloadClick;
  DisableChangeDate := false;
end;

procedure TFrmProcessImport.hisWeek1Click(Sender: TObject);
var
  x : integer;
begin
  //one month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  //dbg(DayOfWeek(enddate));
  x := dayofweek(btnstartdate.Date);
  if x >= 6 then
  begin
    x := x-5;
    enddate   := adddays(btnstartdate.Date, (x*(-1)) );
    startdate := adddays(enddate, -6);
  end else
  if x <=4 then
  begin
    x := 5-x;
    enddate   := adddays(btnstartdate.Date, x);
    startdate := adddays(enddate, -6);
  end else
  if x=5 then
  begin
    enddate   := adddays(btnstartdate.Date, 0);
    startdate := adddays(enddate, -6);
  end;
  //enddate   := adddays(btnstartdate.Date, -1);
  //startdate := addDays(enddate, -6);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;

end;

procedure TFrmProcessImport.hisMonth1Click(Sender: TObject);
begin
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;


procedure TFrmProcessImport.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmProcessImport.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmProcessImport.getFocusQuery : TZQuery;
begin
  //
end;
procedure TFrmProcessImport.ImportFromExcel1Click(Sender: TObject);
begin
  MsgError('This Module Can''t be Imported');
end;

procedure TFrmProcessImport.actLookupExecute(Sender: TObject);
begin
end;
//grid

//action list shortcut

procedure TFrmProcessImport.actDBGExecute(Sender: TObject);
begin
  if isDebug = false then
  begin
    isDebug := True;
    dbg('Debug is ON');
  end else
  begin
    isDebug := False;
    dbg('Debug is OFF');
  end;
end;

procedure TFrmProcessImport.actTabMasterExecute(Sender: TObject);
begin
end;
//end action list shortcut

//popup menu
procedure TFrmProcessImport.ppExportClick(Sender: TObject);
begin
  //if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmProcessImport.ppGroupDefaultClick(Sender: TObject);
begin
  //GroupDateFormatClick(master, 'default');
end;
procedure TFrmProcessImport.ppGroupMonthClick(Sender: TObject);
begin
  //GroupDateFormatClick(master, 'month');
end;
procedure TFrmProcessImport.ppGroupYearClick(Sender: TObject);
begin
  //GroupDateFormatClick(master, 'year');
end;
procedure TFrmProcessImport.RelativeToday1Click(Sender: TObject);
begin
  //GroupDateFormatClick(master, 'relative');
end;
procedure TFrmProcessImport.ppShowALLClick(Sender: TObject);
begin
end;
//end popup menu

//procedure query
procedure TFrmProcessImport.NewRecordQ(idm : integer; nama:string);
begin
end;
//end procedure query

//master
procedure TFrmProcessImport.afterCancelMaster;
begin
end;
//end master


procedure TFrmProcessImport.N6ExportWeekly1Click(Sender: TObject);
var
  qe : tzquery;
  filename, sql : string;
  ts : tstringlist;
begin

  executesql('update s_processimport set _process=0, _ok=0');
  executesql('update s_processimport_cek set recordcount=0');
  executesql('update s_processimport_insert set recordcount=0');

  qe := createquery;
  qe.query('select * from s_processimport order by _order');
  qe.First;
  if LookupQuery('Pilih Sheet Excel', qe, 800, true, '_order,map,name', '', True, True) = false then
  begin
    qe.Free;
    MsgError('CANCEL');
    exit;
  end;
  qe.Query('select * from s_processimport where _process=1 order by _order');
  if qe.RecordCount = 0 then
  begin
    qe.Free;
    MsgError('CANCEL');
    exit;
  end;

  ts       := tstringlist.Create;
  filename := FileOpenDialog('*.xlsx');
  ShowProgressbar;
  qe.first;
  sql := '';
  while not qe.Eof do
  begin
    SetProgressbar('Proses '+qe.getFieldString('name')+ ' ('+qe.RecNoStr+'/'+qe.RecordCountStr+')', (qe.RecNo*100) div qe.RecordCount);
    ExecuteSQL('truncate table '+qe.getFieldString('tablename')+' ');

    ts.Clear;
    ts.CommaText                := qe.getFieldString('map');

    Q_Import.Query('select * from '+qe.getFieldString('tablename'));
    cimport.DataSet  := Q_Import;
    CImport.FileName := filename;
    CImport.SheetName:= qe.getFieldString('tablename');
    CImport.Map      := ts;
    CImport.Execute;

    //msgok(qe.getFieldString('name'));

    sql := sql + 'select '''+qe.getFieldString('name')+''' as name, count(*) as total from '+qe.getFieldString('tablename')+' ';
    if qe.RecNo < qe.RecordCount then
    begin
      sql := sql + ' union all ';
    end;
    qe.Next;
  end;

  qe.Query(sql);
  LookupQuery('Import Result', qe, 800, false, '', '', false);

  qe.Free;
  HideProgressbar;
  msgok('Sukses');
end;

procedure TFrmProcessImport.kosonginQueryCek;
begin
  q_cek.Query('select * from s_processimport limit 0');
  q_cek.Refresh;
end;
procedure TFrmProcessImport.isiQueryCek(importid:string);
begin
  ExecuteSQL('update s_processimport set _ok=0');
  q_cek.Query('select * from s_processimport where import_id='''+importid+'''');
  q_cek.Refresh;
end;

procedure TFrmProcessImport.menuOKClick(Sender: TObject);
begin
  if q_cek.RecordCount = 0 then exit;
  if confirm('Process "'+q_cek.getFieldString('name')+'" to OK ?') <> 'YES' then exit;

  ExecuteSQL('update s_processimport set _ok=0');
  ExecuteSQL('update s_processimport set _ok=1 where import_id='''+q_cek.getFieldString('import_id')+''' ');
  q_cek.Refresh;
  msgok('Process OK "'+q_cek.getFieldString('name')+'" Success');
end;
procedure TFrmProcessImport.menuInsertClick(Sender: TObject);
var
  sql1, sql2  : string;
  qq : tzquery;
  total:integer;
begin
  q_cek.Refresh;
  if q_cek.RecordCount = 0 then exit;

  if q_cek.getFieldInteger('_ok') <> 1 then
  begin
    MsgError(q_cek.getFieldString('name')+' Belum di Proses OK');
    exit;
  end;
  if confirm('Process Insert "'+q_cek.getFieldString('name')+'" ?') <> 'YES' then exit;
  //msgok('1');
  ShowProgressbar;
  qq := createquery;
  q_cek2.Query('select * from s_processimport_insert where '+gets('import_id', q_cek)+' and '+es+
               'tablename='''+q_cek.getFieldString('tablename')+''' and tipepayroll='''+cbotipe.Text+''' '+es+
               'order by _order');
  q_cek2.First;
  //msgok('2');
  while not q_cek2.Eof do
  begin
    SetProgressbarDefault(q_cek2);
    sql1 := q_cek2.getFieldString('sql1');
    sql2 := q_cek2.getFieldString('sql2');
    total:= 0;
    if sql2 <> '' then
    begin
      qq.Query(sql2);
      total := qq.RecordCount;
    end;

    q_cek2.Edit;
    q_cek2.setField('recordcount', total);
    q_cek2.Post;

    //msgok('a');
    ExecuteSQL(SQL1 + SQL2);
    q_cek2.Next
  end;

  //msgok('3');
  q_cek2.Refresh;
  LookupQuery('Result Insert "'+q_cek.getFieldString('name')+'"', q_cek2, 800, false, 'import_id,_order,sql1,sql2');
  //msgok('4');

  if q_cek.getFieldInteger('import_id') = 6 then
  begin
    insertLoanDetail;
  end;
  qq.Free;
  HideProgressbar;
  msgok('Process Insert "'+q_cek.getFieldString('name')+'" Success');
end;

procedure TFrmProcessImport.processCheck(qc:tzquery);
var
  x, total:integer;
  sql : string;
  qq  : tzquery;
begin
  ShowProgressbar;
  qq := createquery;
  x  := 1;
  q_cek1.Query('select * from s_processimport_cek where '+gets('import_id', qc)+' and tipepayroll='''+cbotipe.Text+''' '+es+
               'and '+gets('tablename', qc)+' order by _order ');
  q_cek1.First;
  while not q_cek1.Eof do
  begin
    SetProgressbarDefault(q_cek1);
    sql   := q_cek1.getFieldString('sql');
    qq.Query(sql);
    total := qq.RecordCount;
    q_cek1.Edit;
    q_cek1.setField('recordcount', total);
    q_cek1.Post;

    if total > 0 then
    begin
      isiGridCheck(x, q_cek1);
      x := x + 1;
    end;
    q_cek1.Next;
  end;

  q_cek1.Refresh;
  qq.Free;
  HideProgressbar;
end;

procedure TFrmProcessImport.N1CheckJoin1Click(Sender: TObject);

begin
  //1
  changeMenuCaption('JOIN');
  isiQueryCek('1');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N2CheckStruktur1Click(Sender: TObject);
begin
  //2
  changeMenuCaption('STRUKTUR');
  isiQueryCek('2');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N3CheckSalary1Click(Sender: TObject);
begin
  //3
  changeMenuCaption('SALARY');
  isiQueryCek('3');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N4CheckBPJSTK1Click(Sender: TObject);
begin
  //4
  changeMenuCaption('BPJS TK');
  isiQueryCek('4');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N5CheckBPJSKS1Click(Sender: TObject);
begin
  //5
  changeMenuCaption('BPJS KS');
  isiQueryCek('5');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N6CheckLoan1Click(Sender: TObject);
begin
  //6
  changeMenuCaption('LOAN');
  isiQueryCek('6');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N7CheckRapel1Click(Sender: TObject);
begin
  //7
  changeMenuCaption('RAPEL');
  isiQueryCek('7');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N2CheckAbsensi1Click(Sender: TObject);
begin
  //8
  changeMenuCaption('ABSENSI');
  isiQueryCek('8');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N9CheckPajak1Click(Sender: TObject);
begin
  //9
  changeMenuCaption('PAJAK');
  isiQueryCek('9');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.N0CheckNoRekening1Click(Sender: TObject);
begin
  //10
  changeMenuCaption('NO. REKENING');
  isiQueryCek('10');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.ACheckResigndate1Click(Sender: TObject);
begin
  //11
  changeMenuCaption('RESIGNDATE');
  isiQueryCek('11');
  DeleteAllColumnGrid;
  processCheck(q_cek);
end;

procedure TFrmProcessImport.changeMenuCaption(menutipe:string);
begin
  menuOK.Caption      := '&3 Process "'+menutipe+'" to OK';
  menuInsert.Caption  := '&4 Process Insert "'+menutipe+'"';
end;
procedure TFrmProcessImport.isiGridCheck(x:integer; qc1:tzquery);
begin
  if x >= 16 then exit;
  
  if x = 1 then
  begin
    tab1.Caption := qc1.getFieldString('name');
    Q_DATA1.Query( qc1.getFieldString('sql') );
    createAllColumn('', q_data1, DATA1, true);
  end else
  if x = 2 then
  begin
    tab2.Caption := qc1.getFieldString('name');
    Q_DATA2.Query( qc1.getFieldString('sql') );
    createAllColumn('', q_data2, DATA2, true);
  end else
  if x = 3 then
  begin
    tab3.Caption := qc1.getFieldString('name');
    Q_DATA3.Query( qc1.getFieldString('sql') );
    createAllColumn('', q_data3, DATA3, true);
  end else
  begin

  end;
end;

procedure TFrmProcessImport.DeleteAllColumnGrid;
var
  sql1 : string;
  procedure deleteColumn(tabview: tcxtabsheet; queryview: tzquery; dataview: TcxGridDBBandedTableView);
  var
    x : integer;
  begin
    tabview.Caption := tabview.Name;
    for x := 0 to dataview.ColumnCount-1 do
    begin
      dataview.Columns[0].Free;
    end;
    queryview.Query(sql1);
  end;
begin
  sql1 := 'select name from m_bank limit 0';
  deleteColumn(Tab1, Q_DATA1, Data1);
  deleteColumn(Tab2, Q_DATA2, Data2);
  deleteColumn(Tab3, Q_DATA3, Data3);
  deleteColumn(Tab4, Q_DATA4, Data4);
  deleteColumn(Tab5, Q_DATA5, Data5);

  deleteColumn(Tab6,  Q_DATA6,  Data6);
  deleteColumn(Tab7,  Q_DATA7,  Data7);
  deleteColumn(Tab8,  Q_DATA8,  Data8);
  deleteColumn(Tab9,  Q_DATA9,  Data9);
  deleteColumn(Tab10, Q_DATA10, Data10);

  deleteColumn(Tab11, Q_DATA11, Data11);
  deleteColumn(Tab12, Q_DATA12, Data12);
  deleteColumn(Tab13, Q_DATA13, Data13);
  deleteColumn(Tab14, Q_DATA14, Data14);
  deleteColumn(Tab15, Q_DATA15, Data15);

  PageControll1.ActivePageIndex := 0;
  //data1.Columns[0].Free;
end;

procedure TFrmProcessImport.insertLoanDetail;
var
  ql : tzquery;
  tipepayroll : string;
begin
  ShowProgressbar;
  tipepayroll := lowercase(cbotipe.Text);
  ql := createquery;
  ql.Query('select * from t_loan where useredited=''abc'' order by loan_id');
  ql.First;
  while not ql.Eof do
  begin
    SetProgressbarDefault(ql);
    if getQValueInteger('select count(*) from t_loan_detail where '+gets('loan_id', ql)+' ') = 0 then
    begin
      if tipepayroll='mingguan' then
      begin
        isiLoanDetail(ql, 'mingguan');
      end else
      begin
        isiLoanDetail(ql, 'bulanan');
      end;
    end;
    ql.next;
  end;
  ql.Free;
  ExecuteSQL('update t_loan set useredited='''' where useredited=''abc'' ');
  HideProgressbar;
end;
procedure TFrmProcessImport.isiLoanDetail(qm: tzquery; tipe:string='bulanan');
var
  dt : tdatetime;
  qh, qd :tzquery;
  x : integer;
  loan_id:String;
begin
  if qm.RecordCount <= 0 then exit;

  tipe    := lowercase(tipe);
  loan_id := qm.getFieldString('loan_id');
  qh := createquery;
  qd := createquery;
  qh.Query('select * from t_loan where loan_id='''+loan_id+''' ');
  if qh.RecordCount = 0 then
  begin
    qh.Free; qd.Free;
    exit;
  end;

  dt := qh.getFieldDateTime('startdate');
  for x := 1 to qh.getFieldInteger('bulan') do
  begin
    qd.Query('select * from t_loan_detail where loan_id='''+loan_id+''' and tdate='''+date2sql(dt)+''' ');
    if qd.RecordCount = 0 then qd.Append else qd.Edit;
    qd.setField('loan_id', loan_id);
    qd.setField('tdate', dt);
    if x = qh.getFieldInteger('bulan') then
    begin
      qd.setField('amount', qm.getFieldDouble('total')-
                            ( (qm.getFieldDouble('bulan')-1)*
                               qm.getFieldDouble('amount')
                            )
                  );
    end else
    begin
      qd.setField('amount', qm.getFieldString('amount'));
    end;

    if qd.isNull('payrolldate') then
    begin
      qd.Post;
    end else
    begin
      qd.Cancel;
    end;

    if tipe='mingguan' then
    begin
      dt := addDays(dt, 7);
    end else
    begin
      dt := addMonths(dt, 1);
    end;

  end;
  qd.Free;
  qh.Free;
end;

end.
