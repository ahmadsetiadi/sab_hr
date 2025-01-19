                   unit UPayrollSummary;

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
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmPayrollSummary = class(TForm)
    PageControl: TcxPageControl;
    TabMaster: TcxTabSheet;
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
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
    ImportFromExcel1: TMenuItem;
    actDBG: TAction;
    ApplicationEvents1: TApplicationEvents;
    N1CreateReportMonthly1: TMenuItem;
    TabTransfer: TcxTabSheet;
    TabCash: TcxTabSheet;
    cxGridPopupMenu2: TcxGridPopupMenu;
    DS_Transer: TDataSource;
    Q_Transfer: TZQuery;
    cxGridPopupMenu3: TcxGridPopupMenu;
    DS_Cash: TDataSource;
    Q_Cash: TZQuery;
    GRID_TRANSFER: TcxGrid;
    TRANSFER: TcxGridDBBandedTableView;
    GRID_TRANSFERLevel1: TcxGridLevel;
    TRANSFERtransferbank_id: TcxGridDBBandedColumn;
    TRANSFERpayroll_id: TcxGridDBBandedColumn;
    TRANSFERtdate: TcxGridDBBandedColumn;
    TRANSFERtipe: TcxGridDBBandedColumn;
    TRANSFERbankaccountnumber: TcxGridDBBandedColumn;
    TRANSFERtakehomepay: TcxGridDBBandedColumn;
    TRANSFERnip: TcxGridDBBandedColumn;
    TRANSFERemployee_id: TcxGridDBBandedColumn;
    TRANSFERdepartment_id: TcxGridDBBandedColumn;
    TRANSFERtdate2: TcxGridDBBandedColumn;
    TRANSFERbankaccountname: TcxGridDBBandedColumn;
    TRANSFERdeptname: TcxGridDBBandedColumn;
    TRANSFERempname: TcxGridDBBandedColumn;
    TRANSFERtakehomepay2: TcxGridDBBandedColumn;
    TRANSFERt100000: TcxGridDBBandedColumn;
    TRANSFERt50000: TcxGridDBBandedColumn;
    TRANSFERt20000: TcxGridDBBandedColumn;
    TRANSFERt10000: TcxGridDBBandedColumn;
    TRANSFERt5000: TcxGridDBBandedColumn;
    TRANSFERt2000: TcxGridDBBandedColumn;
    TRANSFERt1000: TcxGridDBBandedColumn;
    TRANSFERt500: TcxGridDBBandedColumn;
    TRANSFERt200: TcxGridDBBandedColumn;
    TRANSFERt100: TcxGridDBBandedColumn;
    TRANSFERdescription: TcxGridDBBandedColumn;
    TRANSFERbank_id: TcxGridDBBandedColumn;
    TRANSFERbankbranch: TcxGridDBBandedColumn;
    TRANSFERcompany_id: TcxGridDBBandedColumn;
    TRANSFERdivision_id: TcxGridDBBandedColumn;
    TRANSFERworkarea_id: TcxGridDBBandedColumn;
    TRANSFERposition_id: TcxGridDBBandedColumn;
    TRANSFERlevel_id: TcxGridDBBandedColumn;
    TRANSFERemployeestatus_id: TcxGridDBBandedColumn;
    TRANSFERuseradded: TcxGridDBBandedColumn;
    TRANSFERdateadded: TcxGridDBBandedColumn;
    TRANSFERuseredited: TcxGridDBBandedColumn;
    TRANSFERdateedited: TcxGridDBBandedColumn;
    GRID_CASH: TcxGrid;
    CASH: TcxGridDBBandedTableView;
    GRID_CASHLevel1: TcxGridLevel;
    CASHtransferbank_id: TcxGridDBBandedColumn;
    CASHpayroll_id: TcxGridDBBandedColumn;
    CASHtdate: TcxGridDBBandedColumn;
    CASHtipe: TcxGridDBBandedColumn;
    CASHbankaccountnumber: TcxGridDBBandedColumn;
    CASHtakehomepay: TcxGridDBBandedColumn;
    CASHnip: TcxGridDBBandedColumn;
    CASHemployee_id: TcxGridDBBandedColumn;
    CASHdepartment_id: TcxGridDBBandedColumn;
    CASHtdate2: TcxGridDBBandedColumn;
    CASHbankaccountname: TcxGridDBBandedColumn;
    CASHdeptname: TcxGridDBBandedColumn;
    CASHempname: TcxGridDBBandedColumn;
    CASHtakehomepay2: TcxGridDBBandedColumn;
    CASHt100000: TcxGridDBBandedColumn;
    CASHt50000: TcxGridDBBandedColumn;
    CASHt20000: TcxGridDBBandedColumn;
    CASHt10000: TcxGridDBBandedColumn;
    CASHt5000: TcxGridDBBandedColumn;
    CASHt2000: TcxGridDBBandedColumn;
    CASHt1000: TcxGridDBBandedColumn;
    CASHt500: TcxGridDBBandedColumn;
    CASHt200: TcxGridDBBandedColumn;
    CASHt100: TcxGridDBBandedColumn;
    CASHdescription: TcxGridDBBandedColumn;
    CASHbank_id: TcxGridDBBandedColumn;
    CASHbankbranch: TcxGridDBBandedColumn;
    CASHcompany_id: TcxGridDBBandedColumn;
    CASHdivision_id: TcxGridDBBandedColumn;
    CASHworkarea_id: TcxGridDBBandedColumn;
    CASHposition_id: TcxGridDBBandedColumn;
    CASHlevel_id: TcxGridDBBandedColumn;
    CASHemployeestatus_id: TcxGridDBBandedColumn;
    CASHuseradded: TcxGridDBBandedColumn;
    CASHdateadded: TcxGridDBBandedColumn;
    CASHuseredited: TcxGridDBBandedColumn;
    CASHdateedited: TcxGridDBBandedColumn;
    MASTERsummary_id: TcxGridDBBandedColumn;
    MASTERlevel: TcxGridDBBandedColumn;
    MASTERpayroll_id: TcxGridDBBandedColumn;
    MASTERtdate: TcxGridDBBandedColumn;
    MASTERstartdate: TcxGridDBBandedColumn;
    MASTERenddate: TcxGridDBBandedColumn;
    MASTERnip: TcxGridDBBandedColumn;
    MASTERemployee_id: TcxGridDBBandedColumn;
    MASTERcompany_id: TcxGridDBBandedColumn;
    MASTERdivision_id: TcxGridDBBandedColumn;
    MASTERdepartment_id: TcxGridDBBandedColumn;
    MASTERworkarea_id: TcxGridDBBandedColumn;
    MASTERposition_id: TcxGridDBBandedColumn;
    MASTERlevel_id: TcxGridDBBandedColumn;
    MASTERemployeestatus_id: TcxGridDBBandedColumn;
    MASTERjoindate: TcxGridDBBandedColumn;
    MASTERresigndate: TcxGridDBBandedColumn;
    MASTERbankaccountnumber: TcxGridDBBandedColumn;
    MASTERbankaccountname: TcxGridDBBandedColumn;
    MASTERharikerja: TcxGridDBBandedColumn;
    MASTERmasuk: TcxGridDBBandedColumn;
    MASTERlibur: TcxGridDBBandedColumn;
    MASTERlibur3: TcxGridDBBandedColumn;
    MASTERcuti: TcxGridDBBandedColumn;
    MASTERsakit: TcxGridDBBandedColumn;
    MASTERizin: TcxGridDBBandedColumn;
    MASTERsakit2: TcxGridDBBandedColumn;
    MASTERalpa: TcxGridDBBandedColumn;
    MASTERoff: TcxGridDBBandedColumn;
    MASTERbasejamsostek: TcxGridDBBandedColumn;
    MASTERgajipokok: TcxGridDBBandedColumn;
    MASTERgajipokok_perhari: TcxGridDBBandedColumn;
    MASTERt_masakerja: TcxGridDBBandedColumn;
    MASTERt_jabatan: TcxGridDBBandedColumn;
    MASTERt_operasional: TcxGridDBBandedColumn;
    MASTERt_kehadiran: TcxGridDBBandedColumn;
    MASTERt_makan: TcxGridDBBandedColumn;
    MASTERt_transport: TcxGridDBBandedColumn;
    MASTERt_komunikasi: TcxGridDBBandedColumn;
    MASTERlembur2: TcxGridDBBandedColumn;
    MASTERlembur3: TcxGridDBBandedColumn;
    MASTERrapel: TcxGridDBBandedColumn;
    MASTERthr: TcxGridDBBandedColumn;
    MASTERjkk: TcxGridDBBandedColumn;
    MASTERadjust_jkk: TcxGridDBBandedColumn;
    MASTERjkm: TcxGridDBBandedColumn;
    MASTERadjust_jkm: TcxGridDBBandedColumn;
    MASTERjhtcompany: TcxGridDBBandedColumn;
    MASTERadjust_jhtcompany: TcxGridDBBandedColumn;
    MASTERbpjsks_company: TcxGridDBBandedColumn;
    MASTERadjust_bpjsks_company: TcxGridDBBandedColumn;
    MASTERp_absen: TcxGridDBBandedColumn;
    MASTERpinjaman: TcxGridDBBandedColumn;
    MASTERp_lain: TcxGridDBBandedColumn;
    MASTERjhtemployee: TcxGridDBBandedColumn;
    MASTERadjust_jhtemployee: TcxGridDBBandedColumn;
    MASTERbpjsks_employee: TcxGridDBBandedColumn;
    MASTERadjust_bpjsks_employee: TcxGridDBBandedColumn;
    MASTERgross_salary: TcxGridDBBandedColumn;
    MASTERtotal_pendapatan: TcxGridDBBandedColumn;
    MASTERtotal_potongan: TcxGridDBBandedColumn;
    MASTERgrandtotal: TcxGridDBBandedColumn;
    MASTERrounding: TcxGridDBBandedColumn;
    MASTERtakehomepay: TcxGridDBBandedColumn;
    MASTERtaxallowance: TcxGridDBBandedColumn;
    MASTERtax21: TcxGridDBBandedColumn;
    MASTERnpwpcompany: TcxGridDBBandedColumn;
    MASTERbank_id: TcxGridDBBandedColumn;
    MASTERbankbranch: TcxGridDBBandedColumn;
    MASTERjamsostek_id: TcxGridDBBandedColumn;
    MASTERtaxtype: TcxGridDBBandedColumn;
    MASTERtaxirregular: TcxGridDBBandedColumn;
    MASTERtaxfinal: TcxGridDBBandedColumn;
    MASTERnote: TcxGridDBBandedColumn;
    MASTERuseradded: TcxGridDBBandedColumn;
    MASTERdateadded: TcxGridDBBandedColumn;
    MASTERuseredited: TcxGridDBBandedColumn;
    MASTERdateedited: TcxGridDBBandedColumn;
    TRANSFERlevel: TcxGridDBBandedColumn;
    CASHlevel: TcxGridDBBandedColumn;
    MASTERtipe: TcxGridDBBandedColumn;
    N2ExportToExcel1: TMenuItem;
    N3CreateExcelManager1: TMenuItem;
    MASTERp_makeup: TcxGridDBBandedColumn;
    MASTERp_mcu: TcxGridDBBandedColumn;
    MASTERp_seragam: TcxGridDBBandedColumn;
    MASTERdeptname: TcxGridDBBandedColumn;
    MASTERempname: TcxGridDBBandedColumn;
    MASTERp_kehadiran: TcxGridDBBandedColumn;
    MASTERp_makan: TcxGridDBBandedColumn;
    MASTERuang_cuti: TcxGridDBBandedColumn;
    MASTERuang_pisah: TcxGridDBBandedColumn;
    MASTERp_transport: TcxGridDBBandedColumn;
    MASTERtransferdate: TcxGridDBBandedColumn;
    MASTERt_lain: TcxGridDBBandedColumn;
    MASTERsisa_cuti: TcxGridDBBandedColumn;
    N2CreateReportManager1: TMenuItem;
    MASTERnpwpemployee: TcxGridDBBandedColumn;
    MASTERptkp: TcxGridDBBandedColumn;
    MASTERp_komunikasi: TcxGridDBBandedColumn;
    MASTERcodestatus: TcxGridDBBandedColumn;
    MASTERcodelevel: TcxGridDBBandedColumn;
    MASTERcode: TcxGridDBBandedColumn;
    MASTERbasicsalary: TcxGridDBBandedColumn;
    MASTERovertime: TcxGridDBBandedColumn;
    MASTERmasuk4: TcxGridDBBandedColumn;
    MASTERlibur4: TcxGridDBBandedColumn;
    MASTERlibur3_4: TcxGridDBBandedColumn;
    MASTERgajipokok_4jam: TcxGridDBBandedColumn;
    MASTERlemburrapel: TcxGridDBBandedColumn;
    MASTERlembur4: TcxGridDBBandedColumn;
    MASTERlembur8: TcxGridDBBandedColumn;
    MASTERlebaran4: TcxGridDBBandedColumn;
    MASTERlebaran8: TcxGridDBBandedColumn;
    MASTERlvl_id: TcxGridDBBandedColumn;
    hisWeek1: TMenuItem;
    N3CreateReportWeekly1: TMenuItem;
    N6ExportWeekly1: TMenuItem;
    hisMonth1: TMenuItem;
    PrevWeek1: TMenuItem;
    NextWeek1: TMenuItem;
    N7DeleteAllDataSummary1: TMenuItem;
    MASTERmasuk5: TcxGridDBBandedColumn;
    MASTERgajipokok_5jam: TcxGridDBBandedColumn;
    procedure CreateExcel(level:String);
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure ReloadClick(syarat:string=' (0=0) ');
    procedure ShowDateTemplate(Tipe:Boolean=True);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure FormCreate(Sender: TObject);
    procedure actRefreshExecute(Sender: TObject);
    procedure actAddExecute(Sender: TObject);
    procedure actEditExecute(Sender: TObject);
    procedure actSaveExecute(Sender: TObject);
    procedure Q_MASTERBeforeEdit(DataSet: TDataSet);
    procedure Q_MASTERNewRecord(DataSet: TDataSet);
    procedure actDeleteExecute(Sender: TObject);
    procedure actcancelExecute(Sender: TObject);
    procedure Q_MASTERAfterCancel(DataSet: TDataSet);
    procedure Q_MASTERAfterDelete(DataSet: TDataSet);
    procedure Q_MASTERAfterPost(DataSet: TDataSet);
    procedure ppExportClick(Sender: TObject);
    procedure ppFreezeClick(Sender: TObject);
    procedure ppGroupDefaultClick(Sender: TObject);
    procedure ppGroupMonthClick(Sender: TObject);
    procedure ppGroupYearClick(Sender: TObject);
    procedure RelativeToday1Click(Sender: TObject);
    procedure ppFindClick(Sender: TObject);
    procedure ppShowALLClick(Sender: TObject);
    procedure BtnCloseClick(Sender: TObject);
    procedure Q_MASTERAfterRefresh(DataSet: TDataSet);
    procedure Q_MASTERBeforeDelete(DataSet: TDataSet);
    procedure Q_MASTERBeforePost(DataSet: TDataSet);
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
    procedure actTabDetail1Execute(Sender: TObject);
    procedure AutoRefreshQuery;
    procedure AutoActiveQuery;
    function getFocusGridView : TcxGridDBBandedTableView;
    function getFocusGrid : TcxGridDBBandedTableView;
    function getFocusTableName : String;
    function getFocusQuery : TZQuery;
    function getGridByName(nama:string) : TcxGridDBBandedTableView;
    function getQueryByName(nama:string) : TZQuery;
    function getTabByName(nama:string) : TcxTabSheet;
    procedure actLookupExecute(Sender: TObject);
    procedure cekAllEditModule(idm:integer);
    procedure isiALLTableKolom;
    procedure AfterCancelQ(idm : integer; nama:string);
    procedure AfterDeleteQ(idm : integer; nama:string);
    procedure AfterPostQ(idm : integer; nama:string);
    procedure BeforeDeleteQ(idm : integer; nama:string);
    procedure BeforeEditQ(idm : integer; nama:string);
    procedure BeforePostQ(idm : integer; nama:string);
    procedure NewRecordQ(idm : integer; nama:string);
    procedure LookupADEmployee_id;
    procedure newRecordMaster;
    procedure beforePostMaster;
    procedure afterPostMaster;
    procedure beforeEditMaster;
    procedure beforeDeleteMaster;
    procedure afterDeleteMaster;
    procedure afterCancelMaster;

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure MASTERemployee_idPropertiesPopup(Sender: TObject);
    procedure actDBGExecute(Sender: TObject);
    procedure CreateSummary;
    procedure CreateSummary2(leveltipe:string; sy:string);
    procedure CreateTransfer2(leveltipe:string; sy:string);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N1CreateReportMonthly1Click(Sender: TObject);
    procedure N2ExportToExcel1Click(Sender: TObject);
    procedure N3CreateExcelManager1Click(Sender: TObject);

    procedure CreateCSV(levelTipe:string);
    procedure N2CreateReportManager1Click(Sender: TObject);

    procedure CreateSummary3(leveltipe:string; sy:string);
    procedure CreateSummary4;
    procedure hisWeek1Click(Sender: TObject);
    procedure N3CreateReportWeekly1Click(Sender: TObject);
    procedure N6ExportWeekly1Click(Sender: TObject);
    procedure hisMonth1Click(Sender: TObject);
    procedure PrevWeek1Click(Sender: TObject);
    procedure NextWeek1Click(Sender: TObject);
    procedure N7DeleteAllDataSummary1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmPayrollSummary: TFrmPayrollSummary;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  tgltransfer, ExcelName : string;
  listemployee:string;

implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit2;
//form close, form create
procedure TFrmPayrollSummary.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmPayrollSummary.cekAllEditModule(idm:integer);
var
  md : string;
  qk : tzquery;
begin
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  cekNowEdit(isnowedit[idm], md);
  qk := createquery;
  qk.Query('select id_module, name from s_module where parentid='''+inttostr(idm)+''' and active=1 order by no');
  qk.First;
  while not qk.Eof do
  begin
    idm := qk.getFieldInteger('id_module');
    md  := qk.getFieldString('name');
    cekNowEdit(isnowedit[idm], md);
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmPayrollSummary.isiALLTableKolom;
var
  idm : integer;
  qk : tzquery;
begin
  idm := strtoint(txtid.Text);
  isiTableKolom(tablename[idm], master);
  qk := createquery;
  qk.Query('select id_module, name, no from s_module where parentid='''+inttostr(idm)+''' and active=1 order by no');
  qk.First;
  while not qk.Eof do
  begin
    idm := qk.getFieldInteger('id_module');
    isiTableKolom(tablename[idm], getGridByName('detail'+qk.getFieldString('no')) );
    qk.Next;
  end;
  qk.Free;
end;
procedure TFrmPayrollSummary.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
    //isiALLTableKolom;
  isiTableKolomFromGrid(tablename[strtoint(txtid.Text)], master);
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
    //FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmPayrollSummary.FormCreate(Sender: TObject);
begin
  //msgok('0');
  isDebug := true;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  lbljudul.Caption   := SentencesCase(txtModuleName.Text);
  self.Caption       := lbljudul.Caption;
  tabmaster.Caption  := SentencesCase(txtModuleName.Text);

  DisableChangeDate  := false;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  startdate          := btnstartdate.Date;
  enddate            := BtnEnddate.Date;

  //msgok('1');
  SettingQuery;
  //msgok('2');
  ValidasiControl;
  //msgok('3');
  SettingFont;
  //msgok('4');
  ShowDateTemplate;
  //msgok('5');
  PageControl.ActivePageIndex := 0;
  //msgok('6');
end;
procedure TFrmPayrollSummary.SettingQuery;
var
  idd, idm : integer;
  qd  : tzquery;
  namagrid : string;
begin
  idm               := strtoint(txtid.Text);
  master.Tag        := strtoint(txtid.Text);
  q_master.Tag      := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, true, startdate, enddate);
  q_master.Query(SQLGrid[idm]);
  q_transfer.Query(getQuery('35', true, startdate, enddate, ' (tipe=''Transfer'' ) '));
  q_cash.Query(getQuery('35', true, startdate, enddate, ' (tipe=''Cash'' ) '));

  setColumnWidth(txtid.Text, q_master, master, false);

  setColumnWidth('35', q_transfer, transfer, false);
  setColumnWidth('35', q_cash, cash, false);

  transfer.Columns[0].Visible := false;
  transfer.Columns[1].Visible := false;
  transfer.Columns[2].Visible := false;
  transfer.Columns[3].Visible := false;

  transfer.Columns[13].Visible := false;
  transfer.Columns[14].Visible := false;
  transfer.Columns[15].Visible := false;
  transfer.Columns[16].Visible := false;

  transfer.Columns[17].Visible := false;
  transfer.Columns[18].Visible := false;
  transfer.Columns[19].Visible := false;
  transfer.Columns[20].Visible := false;
  transfer.Columns[21].Visible := false;
  transfer.Columns[22].Visible := false;
  transfer.Columns[23].Visible := false;

  cash.Columns[0].Visible := false;
  cash.Columns[1].Visible := false;
  cash.Columns[2].Visible := false;
  cash.Columns[3].Visible := false;



  //StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmPayrollSummary.ReloadClick(syarat:string=' (0=0) ');
var
  idm : integer;
  //qm : tzquery;
begin
  PageControl.ActivePageIndex := 0;
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate, syarat);
  SQLGrid[idm]      := Replace(SQLGrid[idm], 'limit 0','');


  q_master.Query(SQLGrid[idm]);
  q_transfer.Query(getQuery('35', true, startdate, enddate, ' ' + syarat + ' and (tipe=''Transfer'' ) '));
  q_cash.Query(getQuery('35', true, startdate, enddate, ' ' + syarat + ' and (tipe=''Cash'' ) '));
  q_master.Refresh;

  {qm := createquery;
  qm.Query(SQLGrid[idm]);
  if qm.RecordCount > 0 then
  begin
    CreateSummary;
    q_master.Refresh;
  end else
  begin
    q_master.Query(Replace(q_master.SQL.Text, 'limit 0','')+' limit 0');
    q_master.Refresh;
    MsgError('No Data Found');
  end;
  qm.Free;}

  PageControl.ActivePageIndex := 0;
  grid_master.SetFocus;
end;
procedure TFrmPayrollSummary.SettingFont;
var
  x, fs : integer;
  fn : string;
begin
  fs := strtoint(ReadIniFile('visual','fontsize'));
  fn := 'Tahoma';
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxPageControl then TcxPageControl(Components[x]).Font.Name := fn;
    if Components[x] is TcxPageControl then TcxPageControl(Components[x]).Font.Size := fs;
    if Components[x] is TcxGrid then TcxGrid(Components[x]).Font.Name := fn;
    if Components[x] is TcxGrid then TcxGrid(Components[x]).Font.Size := fs;
  end;
end;
procedure TFrmPayrollSummary.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);
  SetInsertTable(master, False);
  SetEditTable(master, False);
  SetDeleteTable(master, true);

  SetInsertTable(transfer, False);
  SetEditTable(transfer, False);
  SetDeleteTable(transfer, true);

  SetInsertTable(cash, False);
  SetEditTable(cash, False);
  SetDeleteTable(cash, true);

  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);
  readonlyAllColumn(master);
  master.NavigatorButtons.Cancel.Visible  := False;
  master.NavigatorButtons.Post.Visible    := False;

  transfer.NavigatorButtons.Cancel.Visible  := False;
  transfer.NavigatorButtons.Post.Visible    := False;

  cash.NavigatorButtons.Cancel.Visible  := False;
  cash.NavigatorButtons.Post.Visible    := False;
  //ReadOnlyDataset(master);
end;
procedure TFrmPayrollSummary.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmPayrollSummary.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
end;

procedure TFrmPayrollSummary.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmPayrollSummary.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
end;

procedure TFrmPayrollSummary.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmPayrollSummary.MenuItem1Click(Sender: TObject);
begin
  //first date to now
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := ServerDate;
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;


procedure TFrmPayrollSummary.OneMonth1Click(Sender: TObject);
begin
  //one month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;

procedure TFrmPayrollSummary.NextMonth1Click(Sender: TObject);
begin
  //next month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(yearof(addMonths(BtnStartdate.Date, 1)),
                          MonthOf(addMonths(BtnStartdate.Date,1)),1 );
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;

procedure TFrmPayrollSummary.PrevMonth1Click(Sender: TObject);
begin
  //prev month
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  startdate := addMonths(startdate, -1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;

procedure TFrmPayrollSummary.OneYear1Click(Sender: TObject);
begin
  //one year
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := EncodeDate(YearOf(BtnStartdate.Date), 12, 31);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;
procedure TFrmPayrollSummary.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := False;
  ppEdit.Visible   := False;
  ppDelete.Visible := False;
  ppExport.Visible := cekValidasi('`export`', mn);
  if ImportFromExcel1.Visible then ImportFromExcel1.Visible := cekValidasi('`import`', mn);

  if getFocusGridView.Bands[1].Visible = true then
  begin
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    ppFreeze.Caption := '&Show Freeze Column';
    ppFreeze.Hint    := 'Show Freeze Column';
  end;
end;
procedure TFrmPayrollSummary.OneDay1Click(Sender: TObject);
begin
  //oneday
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  BtnEnddate.Date := BtnStartdate.Date;
  startdate       := BtnStartdate.Date;
  enddate         := BtnEnddate.Date;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;
procedure TFrmPayrollSummary.oday1Click(Sender: TObject);
begin
  //today
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate         := ServerDate;
  enddate           := ServerDate;
  BtnStartdate.Date := ServerDate;
  BtnEnddate.Date   := ServerDate;
  ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
  DisableChangeDate := false;
end;

procedure TFrmPayrollSummary.PrevWeek1Click(Sender: TObject);
var
  x : integer;
begin
  //prev week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  //dbg(DayOfWeek(enddate));
  x := dayofweek(btnstartdate.Date);
  startdate   := adddays(btnstartdate.Date, - 7 );
  enddate     := adddays(startdate, 6);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level=''Mingguan'') ');
  DisableChangeDate := false;

end;

procedure TFrmPayrollSummary.NextWeek1Click(Sender: TObject);
var
  x : integer;
begin
  //next week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  //dbg(DayOfWeek(enddate));
  x := dayofweek(btnstartdate.Date);
  startdate   := adddays(btnstartdate.Date, + 7 );
  enddate     := adddays(startdate, 6);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level=''Mingguan'') ');
  DisableChangeDate := false;

end;

procedure TFrmPayrollSummary.hisWeek1Click(Sender: TObject);
var
  x : integer;
  s : string;
begin
  //one week
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;

  x := dayofweek(now);
  startdate   := adddays(now, ( (x-1) * (-1) ) - 6 );
  enddate     := adddays(startdate, 6);

  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;

  //ReloadClick(' (level=''Mingguan'') ');

  s := '';
  if InputQuery('Isi ID Type', 'Search', s) = False then
  begin
    MsgError('CANCEL');
    exit;
  end;

  if s = '' then
  begin
    ReloadClick(' (level=''Mingguan'') ');
  end else
  begin
    ReloadClick(' (level=''Mingguan'') and (employee_id in ( select employee_id from m_employee where idtype='''+s+''' )) ');
  end;

  DisableChangeDate := false;
end;

procedure TFrmPayrollSummary.hisMonth1Click(Sender: TObject);
begin
  if BtnDateTemplate.Visible = False then Exit;
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick(' (level=''Mingguan'') ');
  DisableChangeDate := false;
end;


procedure TFrmPayrollSummary.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmPayrollSummary.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmPayrollSummary.getFocusQuery : TZQuery;
begin
  if lowercase(getFocusGrid.Name) = 'master'  then result := Q_MASTER;
end;
function TFrmPayrollSummary.getFocusTableName : String;
var
  x : integer;
  idtag : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGridDBBandedTableView then
    begin
      if TcxGridDBBandedTableView(Components[x]).Focused then
      begin
        idtag  := TcxGridDBBandedTableView(Components[x]).Tag;
        result := getqvaluestring('select tablename from s_module where tag='''+inttostr(idtag)+''' ');
        break;
        exit;
      end;
    end;
  end;
end;
function TFrmPayrollSummary.getFocusGrid : TcxGridDBBandedTableView;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGridDBBandedTableView then
    begin
      if TcxGridDBBandedTableView(Components[x]).Focused then
      begin
        result := TcxGridDBBandedTableView(Components[x]);
        break;
        exit;
      end;
    end;
  end;
end;
function TFrmPayrollSummary.getFocusGridView : TcxGridDBBandedTableView;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGrid then
    begin
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_master' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Master;
      end;
    end;
  end;
end;
procedure TFrmPayrollSummary.AutoActiveQuery;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TZQuery then
    begin
      if lowercase(TZQuery(Components[x]).Name) = 'q_master' then
      begin
      end else
      if leftstr(lowercase(TZQuery(Components[x]).Name),9) = 'q_laporan' then
      begin
      end else
      if leftstr(lowercase(TZQuery(Components[x]).Name),8) = 'q_detail' then
      begin
      end else
      begin
        TZQuery(Components[x]).Active := True;
      end;
    end;
  end;
end;
procedure TFrmPayrollSummary.AutoRefreshQuery;
var
  x : integer;
  qk : TZquery;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TZQuery then
    begin
      if (lowercase(TZQuery(Components[x]).Name) <> 'q_master') and (LeftStr( lowercase(TZQuery(Components[x]).Name), 9) <> 'q_laporan') then
      begin
        if TZQuery(Components[x]).Active then TZQuery(Components[x]).Refresh;
      end;
    end;
  end;

  {qk := createquery;
  qk.Query('select kolom_id from s_kolom where tablename='''+TableName[strtoint(txtid.Text)]+''' and tipekolom=''lookup'' order by no');
  qk.First;
  while not qk.Eof do
  begin
    if qlq[qk.getFieldInteger('kolom_id')].Active then qlq[qk.getFieldInteger('kolom_id')].Refresh;
    qk.Next;
  end;
  qk.Free;}
end;
function TFrmPayrollSummary.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
end;

procedure TFrmPayrollSummary.ImportFromExcel1Click(Sender: TObject);
begin
  MsgError('This Module Can''t be Imported');
end;

function TFrmPayrollSummary.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
end;
function TFrmPayrollSummary.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
end;
procedure TFrmPayrollSummary.actLookupExecute(Sender: TObject);
var
  Q : tzquery;
  s, sql : string;
  idk : integer;
begin
  exit;
  if getFocusColumn(getfocusgrid).Tag = 3 then
  begin
    s   := '';
    s   := InputBox('Search '+getFocusCaptionName(getfocusgrid), 'Search', s);
    idk := getIDKolom(getFocusTableName, getFocusFieldName(getFocusGrid));

    sql := getqvaluestring('select isi from s_kolom where kolom_id='''+inttostr(idk)+''' ');
    sql := Replace(sql, '$syarat', ' name like ''%'+s+'%'' ');
    Q := createquery;
    Q.Query(sql);
    if LookupQuery('Choose '+getFocusCaptionName(getfocusgrid), Q, 800, false, '', getFocusTableName) then
    begin
      getFocusQuery.SetMultiFieldQ(getFocusFieldName(getFocusGrid), Q);
    end;
    Q.free;
  end;
end;
//grid

//action list shortcut
procedure TFrmPayrollSummary.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmPayrollSummary.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmPayrollSummary.actDBGExecute(Sender: TObject);
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

procedure TFrmPayrollSummary.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmPayrollSummary.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmPayrollSummary.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmPayrollSummary.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmPayrollSummary.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmPayrollSummary.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmPayrollSummary.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmPayrollSummary.ppFreezeClick(Sender: TObject);
var
  caption : string;
  x : integer;
begin
  caption := lowercase( Replace(ppFreeze.Caption,'&','') );
  if caption = 'show freeze column' then
  begin
    master.Bands[1].FixedKind := fkLeft;
    master.Bands[1].Visible := true;
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    for x := 0 to master.Bands[1].ColumnCount - 1 do
    begin
      master.Bands[1].Columns[0].Position.BandIndex := 0;
      master.Bands[0].Columns[master.Bands[0].columncount-1].Position.ColIndex := x;
    end;

    master.Bands[1].FixedKind := fkLeft;
    master.Bands[1].Visible   := false;
    ppFreeze.Caption          := '&Show Freeze Column';
    ppFreeze.Hint             := 'Show Freeze Column';
  end;
end;
procedure TFrmPayrollSummary.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmPayrollSummary.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmPayrollSummary.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmPayrollSummary.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmPayrollSummary.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
end;
procedure TFrmPayrollSummary.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
end;
//end popup menu

//isnowedit master
procedure TFrmPayrollSummary.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayrollSummary.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmPayrollSummary.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmPayrollSummary.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmPayrollSummary.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmPayrollSummary.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmPayrollSummary.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmPayrollSummary.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmPayrollSummary.BeforeEditQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiEdit(md);
  cekAllEditModule(strtoint(txtid.Text));
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := False;
  if nama='master'  then beforeEditMaster;
end;
procedure TFrmPayrollSummary.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmPayrollSummary.NewRecordQ(idm : integer; nama:string);
var
  md : string;
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  md := getQValue('select name from s_module where id_module='''+inttostr(idm)+''' ');
  ValidasiInsert(md);
  cekAllEditModule(strtoint(txtid.Text));
  isNowEdit[idm]    := True;
  isNewRecord[idm]  := True;
  isiDefaultNewRecord( getQueryByName(nama) , TableName[idm]);
  if nama='master'  then newRecordMaster;
end;
//end procedure query

//master
procedure TFrmPayrollSummary.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmPayrollSummary.beforePostMaster;
begin
  if getQValueInteger('select count(*) from t_payroll where '+es+
                      '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
                      ' tdate > '''+q_master.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
end;
procedure TFrmPayrollSummary.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmPayrollSummary.beforeEditMaster;
begin
  //
end;
procedure TFrmPayrollSummary.beforeDeleteMaster;
begin
  if getQValueInteger('select count(*) from t_payroll where '+es+
                      '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
                      ' tdate > '''+q_master.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;

  ExecuteSQL('delete from t_transferbank where '+gets('payroll_id', Q_Master)+' ');
  DeleteAllDataDetail(txtID.Text, q_master.getFieldString('payroll_id'));
end;
procedure TFrmPayrollSummary.afterDeleteMaster;
begin
  q_transfer.Refresh;
  q_cash.Refresh;
end;
procedure TFrmPayrollSummary.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmPayrollSummary.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmPayrollSummary.LookupADEmployee_id;
var
  Q : TZQuery;
  kolom, syarat, s : String;
begin
  s := '';
  s := InputBox('Input Employee Name', 'Search', s);
  kolom := '*';
  syarat:= ' (0=0) ';
  Q := createquery;
  q.Query('select * from s_lookup where tablename=''t_thr'' and columnname=''employee_id'' ');
  if q.RecordCount > 0 then
  begin
    kolom := q.getFieldString('kolom');
    syarat:= q.getFieldString('syarat');
  end;
  Q.Query('select '+kolom+' from m_employee where name like ''%'+s+'%'' '+
          'and '+getSecurity(txtid.Text)+' and '+syarat+' order by name ');
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,'+
                            'employeestatus_id', Q );
  end;
  Q.free;
end;

procedure TFrmPayrollSummary.CreateSummary;
var
  qk :tzquery;
  idm, x : integer;
  caption, queryD, queryC, queryA, query, fieldawal, fieldakhir, fn : string;
begin
  qk := createquery;
  qk.Query('select * from t_payroll limit 0');
  fieldawal   := '';
  fieldakhir  := '(taxallowance+thrbonustaxallowance) as taxallowance, (tax21_monthly+tax21_irregular+thrbonustax) as tax21,';
  //fieldakhir  := '(thrbonus+thrbonus2) as thrbonus2,thrbonustaxallowance,(thrbonustax+tax21_irregular) as tax21_irregular,';
  for x := 0 to qk.FieldCount - 1 do
  begin
    fn := lowercase(qk.fieldName(x));
    if x <= 7  then fieldawal := fieldawal + 't_payroll.' + qk.fieldName(x) + ',';
    if x >= 59 then
    begin
      if fn='department_id' then begin end else
      if fn='position_id' then begin end else
      if fn='division_id' then begin end else
      if fn='workarea_id' then begin end else
      if fn='joindate' then begin end else
      if fn='resigndate' then begin end else
      if fn='bankaccountnumber' then begin end else
      if fn='bankaccountname' then begin end else
      if fn='harikerja' then begin end else
      if fn='masuk' then begin end else
      if fn='libur' then begin end else
      if fn='libur3' then begin end else
      if fn='cuti' then begin end else
      if fn='sakit' then begin end else
      if fn='izin' then begin end else
      if fn='sakit2' then begin end else
      if fn='alpa' then begin end else
      if fn='off' then begin end else
      begin fieldakhir := fieldakhir + qk.fieldName(x) + ','; end;
    end;
  end;

  fieldawal   := hilangkanKomaBelakang(fieldawal);
  fieldakhir  := hilangkanKomaBelakang(fieldakhir);
  fieldawal   := fieldawal + ',department_id,position_id,division_id,workarea_id,joindate,resigndate,'+es+
                 'bankaccountnumber,bankaccountname,harikerja,masuk,libur,libur3,cuti,sakit,izin,sakit2,alpa,off, ';
  queryD := '';
  queryC := '';
  queryA := '';
  qk.Query('select * from m_salary where acc=''D'' and '+es+
           'summaryorder>0 and summaryorder <99 group by name order by summaryorder ');
  qk.First;
  while not qk.Eof do
  begin
    queryD := queryD +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where acc=''D'' and name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('name')+'`,';
    qk.Next;
  end;

  qk.Query('select * from m_salary where acc=''C'' and '+es+
           'summaryorder>0 and summaryorder <100 group by name order by summaryorder ');
  qk.First;
  while not qk.Eof do
  begin
    queryC := queryC +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where acc=''C'' and name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('name')+'`,';
    qk.Next;
  end;

  qk.Query('select * from m_salary where '+es+
           'summaryorder>=99 group by name order by summaryorder ');
  qk.First;
  while not qk.Eof do
  begin
    queryA := queryA +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('name')+'`,';
    qk.Next;
  end;

  query := 'select '+fieldawal+
           queryD+queryC+queryA+
           es+fieldakhir+es+
           ' from t_payroll '+es+
           'where '+es+
           '$syarat and $security and $filtertgl '+es+
           'order by nip, tdate';
  query := Replace(query, '$filtertgl', ' tdate >=''$startdate'' and tdate <=''$enddate''  ' );
  query := Replace(query, '$startdate', date2sql(startdate) );
  query := Replace(query, '$enddate', date2sql(enddate) );
  query := Replace(query, '$syarat', ' (0=0) ' );
  query := Replace(query, '$tablename', 't_payroll' );
  query := Replace(query, '$security', getSecurity(txtid.Text) );
  //query := getSecurity2(txtid.Text, query);

  GRID_MASTER.Visible := False;
  ///hilangin freeze column
  if master.Bands[1].Visible = True then
  begin
    for x := 0 to master.Bands[1].ColumnCount - 1 do
    begin
      master.Bands[1].Columns[0].Position.BandIndex := 0;
      master.Bands[0].Columns[master.Bands[0].columncount-1].Position.ColIndex := x;
    end;
    master.Bands[1].FixedKind := fkLeft;
    master.Bands[1].Visible   := false;
    ppFreeze.Caption          := '&Show Freeze Column';
    ppFreeze.Hint             := 'Show Freeze Column';
  end;
  ///  //
  idm               := strtoint(txtid.Text);
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := query;
  pesan(query);
  q_master.Query(query);
  master.ClearItems;
  setColumnWidth(txtid.Text, q_master, master, true, 't_payroll_summary');
  GRID_MASTER.Visible := True;
  qk.Free;
end;

{var
  ASheet1, ASheet2: TdxSpreadSheet;
  ATable: TdxSpreadSheetTableView;
begin
  ExportGridToXLSX('Transfer', grid_transfer);
  ExportGridToXLSX('Cash', grid_cash);
  msgok('1');
  ASheet1 := TdxSpreadSheet.Create(Self);

  asheet1.AddSheet('Transfer');
  asheet1.AddSheet('Cash');
  asheet1.AddSheet('PayrollSummary');
  msgok('2');
  asheet1.AddSheet('PivotTransfer');
  asheet1.AddSheet('PivotCash');
  asheet1.AddSheet('PivotSummary');
  msgok('3');

  ASheet2 := TdxSpreadSheet.Create(Self);
  ASheet2.LoadFromFile('Transfer.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 1;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  msgok('4');

  ASheet2.LoadFromFile('Cash.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 2;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  msgok('5');

  msgok('6');
  asheet1.Sheets[0].Destroy;
  msgok('7');
  asheet1.SaveToFile('d:\Temp3.xlsx');
  msgok('8');
  asheet1.Free;
  asheet2.Free;
  msgok('Berhasil');
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C taskkill /f /im excel.exe'), SW_Hide);
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C start excel d:\Temp3.xlsx'), SW_Hide);

end; }

procedure TFrmPayrollSummary.N1CreateReportMonthly1Click(Sender: TObject);
begin
  tgltransfer := ComboForm('Isi Tgl Transfer ( yyyy-MM-dd )', 'tanggal');
  if tgltransfer = '' then exit;

  //tgltransfer := getqValuestring('select transferdate from 0_param limit 1');

  ShowProgressbar;
  SetProgressbar('Please Wait', 0);
  CreateSummary;
  ReloadClick;
  //CreateSummary3('Non Manager', ' e.division_id<>3 ');
  //CreateTransfer2('Non Manager', 'division_id<>3 and employee_id not in (select employee_id from m_mgr) and level_id in (select level_id from m_level where level=''Non Manager'' ) ');
  //ReloadClick(' (level in (''Non Manager'') ) ');
  HideProgressbar;
  MsgOK('Finished');
end;
procedure TFrmPayrollSummary.N2CreateReportManager1Click(Sender: TObject);
begin
  //tgltransfer := ComboForm('Isi Tgl Transfer ( yyyy-MM-dd )', 'tanggal');
  //if tgltransfer = '' then exit;

  tgltransfer := getqValuestring('select transferdate from 0_param limit 1');

  ShowProgressbar;
  SetProgressbar('Please Wait', 0);
  //CreateSummary3( 'Manager', ' ( employee_id in (select employee_id from m_mgr) or level_id in (select level_id from m_level where level=''Manager'') ) ');
//  CreateSummary3( 'Manager', ' ( e.division_id<>3 and e.level_id in (select level_id from m_level where level=''Manager'' ) or e.employee_id in (select employee_id from m_mgr) ) '+es+
//                             ' and e.level_id not in (12,13,14,21) ');
  CreateSummary3( 'Manager', ' ( e.division_id<>3 ');
  CreateTransfer2('Manager', ' ( division_id<>3 and employee_id in (select employee_id from m_mgr) or level_id in (select level_id from m_level where level=''Manager'') ) ');
  ReloadClick(' (level in (''Manager'') ) ');
  HideProgressbar;
  MsgOK('Finished');
end;
procedure TFrmPayrollSummary.N3CreateReportWeekly1Click(Sender: TObject);
begin
  //tgltransfer := ComboForm('Isi Tgl Transfer ( yyyy-MM-dd )', 'tanggal');
  //if tgltransfer = '' then exit;

  tgltransfer := getqValuestring('select transferdate from 0_param limit 1');

  ShowProgressbar;
  SetProgressbar('Please Wait', 0);
  //CreateSummary3('Non Manager', ' employee_id not in (select employee_id from m_mgr) and level_id in (select level_id from m_level where level=''Non Manager'' ) ');
  CreateSummary3('Mingguan', ' e.division_id=3 and e.level_id in (select level_id from m_level where level=''Non Manager'' ) '+es+
                                ' and e.employee_id not in (select employee_id from m_mgr) '+es+
                                ' and e.level_id not in (10,11,12,13,14,21,22) ');
  CreateTransfer2('Mingguan', 'division_id=3 and employee_id not in (select employee_id from m_mgr) and level_id in (select level_id from m_level where level=''Non Manager'' ) ');
  ReloadClick(' (level in (''Mingguan'') ) ');
  HideProgressbar;
  MsgOK('Finished');
end;

procedure TFrmPayrollSummary.CreateSummary3(leveltipe:string; sy:string);
var
  qr, qk, qs :tzquery;
  idm, x : integer;
  isAddColumn, isInsert : boolean;
  prm, tbl, idtype, caption, queryD, queryC, queryA, query, fieldawal, fieldakhir, fn, lastcolumn, ss : string;
begin

  leveltipe := lowercase(leveltipe);
  if leveltipe='mingguan' then
  begin
    prm := '0_param';
    tbl := 'v_summary';
  end else
  begin
    prm := '0_param2';
    tbl := 'v_summary2';
  end;

  qk := createquery;
  qs := createquery;
  qr := createquery;
  qk.Query('select * from t_payroll limit 0');
  qs.Query('select * from t_summary limit 0');

  idtype := '';
//  if confirm('Ingin Isi ID Type ?') = 'YES' then
//  begin
//    InputQuery('Input ID Type', 'ID Type', idtype);
//    idtype := ' (e.employee_id in (select employee_id from m_employee where idtype='''+idtype+''') ) ';
//  end;
  if idtype='' then idtype := ' (0=0) ';

  {if confirm('Show Lookup ?') = 'YES' then
  begin
    qk.Query('select p.employee_id, e.name, p.nip, p.bankaccountnumber, p.bankaccountname, '+es+
           'e.joindate, e.resigndate, e.idtype, '+es+
           'p.division_id, p.department_id, p.workarea_id, p.position_id, p.level_id, p.lvl_id, p.employeestatus_id '+es+
           'from t_payroll p '+es+
           'left join m_employee e on p.employee_id=e.employee_id '+es+
           'cross join '+prm+' prm '+es+
           'where p.tdate>=prm.startdate and p.tdate<=prm.enddate and '+sy+' '+es+
           'and e.idtype<>''xx'' and '+idtype+' ');
    pesan(qk.SQL.Text);
    if LookupQuery('Choose Employee', qk, 800, True, '', 't_payroll') =False then
    begin
      qk.Free;
      qs.Free;
      qr.Free;
      MsgError('CANCEL');
      exit;
    end;
    ss := ' (employee_id in '+ getColumnFromFilter(qk, 'employee_id')+ ') ';
  end else
  begin
    ss := sy + ' and ' + idtype;
  end;
  pesan(ss);}

  ss := '(0=0)';
  query := 'select e.* from '+tbl+' e '+es+
           'where '+ss+' and '+idtype+' and '+es+
           '$syarat and $security and $filtertgl '+es+
           'order by nip, tdate';
  query := Replace(query, '$filtertgl', ' tdate >=''$startdate'' and tdate <=''$enddate''  ' );
  query := Replace(query, '$startdate', date2sql(startdate) );
  query := Replace(query, '$enddate', date2sql(enddate) );
  query := Replace(query, '$syarat', '(0=0)' ); //sy
  query := Replace(query, '$tablename', 't_payroll' );
  query := Replace(query, '$security', getSecurity(txtid.Text) );
  //msgok('5');
  //msgok('cc');
  Pesan(query);
  qk.Query(query);

  //pesan(qk.SQL.Text);
  //msgok(qk.SQL.Text);

  if confirm('Show Lookup ?') = 'YES' then
  begin
    if LookupQuery('Choose Employee', qk, 800, True, '', 't_summary') =False then
    begin
      qk.Free;
      qs.Free;
      qr.Free;
      MsgError('CANCEL');
      exit;
    end;
  end;

  ss := ' (employee_id in '+ getColumnFromFilter(qk, 'employee_id')+ ') ';
  listemployee := '';
  //msgok('xx');
  dbg(qk.RecordCount);
  qk.First;
  while not qk.Eof do
  begin
    SetProgressbarDefault(qk);
    listemployee := listemployee + qk.getFieldString('employee_id') + ',';

    qs.Query('select * from t_summary where '+gets('employee_id', qk)+' and '+es+
             'tdate >='''+date2sql(startdate)+''' and tdate <= '''+date2sql(enddate)+''' ');
    //pesan(qs.SQL.text);
    if qs.RecordCount > 0 then
    begin
      qs.Edit;
      isiKolomUser(false, qs);
    end else
    begin
      qs.Append;
      isiKolomUser(true, qs);
    end;

    //qs.setField('transferdate', tgltransfer );
    isInsert := false;
    for x := 0 to qs.FieldCount - 1 do
    begin
      if LowerCase(qs.fieldName(x))='payroll_id'  then isInsert := true;
      if LowerCase(qs.fieldName(x))='gajipokok'   then isInsert := false;

      if LowerCase(qs.fieldName(x))='taxallowance' then isInsert := true;
      if LowerCase(qs.fieldName(x))='deptname'     then isInsert := false;
      //if LowerCase(qs.fieldName(x))='transferdate' then isInsert := false;

      if isInsert then
      begin
        qs.setField(qs.fieldName(x), qk.getField(qs.fieldName(x)) ) ;
      end;
    end;
    //pesan(qs.SQL.Text);
    //qs.setField('level', getQValueString('select level from m_level where '+gets('level_id', qs)+' '));
    qs.setfield('level', leveltipe);
    qs.setField('deptname', getQValueString('select name from m_department where '+gets('department_id', qs)+' '));
    qs.setField('empname', getQValueString('select  name from m_employee   where '+gets('employee_id', qs)+' '));

    qr.Query('select * from m_salary where acc=''D'' and '+es+
             'summaryorder>0 and summaryorder <99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where acc=''C'' and '+es+
             'summaryorder>0 and summaryorder <100 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where '+es+
             'summaryorder>=99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    if qs.getFieldString('bankaccountnumber') = '' then
    begin
      qs.setField('tipe', 'Cash');
    end else
    begin
      qs.setField('tipe', 'Transfer');
      if qs.getFieldDouble('takehomepay') <= 10000 then qs.setField('tipe', 'Cash');
    end;

    qs.SetMultiFieldQ('codestatus,codelevel,code,basicsalary,overtime', qk);

    qs.Post;
    qk.Next;
  end;

  if listemployee <> '' then listemployee := '(' + midstr(listemployee,0, length(listemployee)-1) + ')';

  qk.Free;
  qs.Free;
  qr.Free;
end;

procedure TFrmPayrollSummary.CreateSummary2(leveltipe:string; sy:string);
var
  qr, qk, qs :tzquery;
  idm, x : integer;
  isAddColumn, isInsert : boolean;
  idtype, caption, queryD, queryC, queryA, query, fieldawal, fieldakhir, fn, lastcolumn : string;
begin

  qk := createquery;
  qs := createquery;
  qr := createquery;
  qk.Query('select * from t_payroll limit 0');
  qs.Query('select * from t_summary limit 0');
  fieldawal   := '';
  fieldakhir  := '(taxallowance+thrbonustaxallowance) as taxallowance, (tax21_monthly+tax21_irregular+thrbonustax) as tax21,';
  //fieldakhir  := '(thrbonus+thrbonus2) as thrbonus2,thrbonustaxallowance,(thrbonustax+tax21_irregular) as tax21_irregular,';
  for x := 0 to qk.FieldCount - 1 do
  begin
    fn := lowercase(qk.fieldName(x));
    if x <= 8  then fieldawal := fieldawal + 't_payroll.' + qk.fieldName(x) + ',';
    if x >= 57 then
    begin
      if fn='department_id' then begin end else
      if fn='position_id' then begin end else
      if fn='division_id' then begin end else
      if fn='workarea_id' then begin end else
      if fn='joindate' then begin end else
      if fn='resigndate' then begin end else
      if fn='bankaccountnumber' then begin end else
      if fn='bankaccountname' then begin end else
      if fn='harikerja' then begin end else
      if fn='masuk' then begin end else
      if fn='libur' then begin end else
      if fn='libur3' then begin end else
      if fn='cuti' then begin end else
      if fn='sakit' then begin end else
      if fn='izin' then begin end else
      if fn='sakit2' then begin end else
      if fn='alpa' then begin end else
      if fn='off' then begin end else
      begin fieldakhir := fieldakhir + qk.fieldName(x) + ','; end;
    end;
  end;

  //msgok('1');
  fieldawal   := hilangkanKomaBelakang(fieldawal);
  fieldakhir  := hilangkanKomaBelakang(fieldakhir);
  //pesan(fieldakhir);
  fieldawal   := fieldawal + ', '''+tgltransfer+''' as transferdate, department_id,position_id,division_id,workarea_id,joindate,resigndate,'+es+
                 'bankaccountnumber,bankaccountname,harikerja,masuk,libur,libur3,cuti,sakit,izin,sakit2,alpa,off, ';
  queryD := '';
  queryC := '';
  queryA := '';
  qk.Query('select * from m_salary where acc=''D'' and '+es+
           'summaryorder>0 and summaryorder <99 group by name order by summaryorder ');
  qk.First;
  lastcolumn := 'basejamsostek';
  isAddColumn:= false;
  while not qk.Eof do
  begin
    queryD := queryD +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where acc=''D'' and name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('columndb')+'`,';
    if not qs.isFieldExist(qk.getFieldString('columndb')) then
    begin
      isAddColumn:= true;
      pesan('alter table t_summary add '+qk.getFieldString('columndb')+
                 ' double default ''0'' after '+lastcolumn+';');
      ExecuteSQL('alter table t_summary add '+qk.getFieldString('columndb')+
                 ' double default ''0'' after '+lastcolumn+';');
    end;
    lastcolumn := qk.getFieldString('columndb');
    qk.Next;
  end;
  //msgok('2');
  qk.Query('select * from m_salary where acc=''C'' and '+es+
           'summaryorder>0 and summaryorder <100 group by name order by summaryorder ');
  qk.First;
  while not qk.Eof do
  begin
    queryC := queryC +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where acc=''C'' and name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('columndb')+'`,';
    if not qs.isFieldExist(qk.getFieldString('columndb')) then
    begin
      isAddColumn:= true;
      ExecuteSQL('alter table t_summary add '+qk.getFieldString('columndb')+
                 ' double default ''0'' after '+lastcolumn+';');
    end;
    lastcolumn := qk.getFieldString('columndb');
    qk.Next;
  end;
  //msgok('3');
  qk.Query('select * from m_salary where '+es+
           'summaryorder>=99 group by name order by summaryorder ');
  qk.First;
  while not qk.Eof do
  begin
    queryA := queryA +es+ ' coalesce( ( select sum(amount) from t_payroll_detail where name='''+qk.getFieldString('name')+''' and payroll_id=t_payroll.payroll_id group by name), 0) as `'+qk.getFieldString('columndb')+'`,';
    if not qs.isFieldExist(qk.getFieldString('columndb')) then
    begin
      isAddColumn:= true;
      ExecuteSQL('alter table t_summary add '+qk.getFieldString('columndb')+
                 ' double default ''0'' after '+lastcolumn+';');
    end;
    lastcolumn := qk.getFieldString('columndb');
    qk.Next;
  end;
  //msgok('4');
  idtype := '';
  if confirm('Ingin Isi ID Type ?') = 'YES' then
  begin
    InputQuery('Input ID Type', 'ID Type', idtype);
  end;

  query := 'select '+fieldawal+
           queryD+queryC+queryA+
           es+fieldakhir+es+
           ' from t_payroll '+es+
           'where  '+es+
           'employee_id in ( select employee_id from m_employee where idtype='''+idtype+''' ) and '+es+
           '$syarat and $security and $filtertgl '+es+
           'order by nip, tdate';
           //'and employee_id in ( select employee_id from m_employee where idtype=''02'' ) '+es+
           //employee_id in ( select employee_id from m_employee where idtype=''01'' ) and
           //' '+es+
           //employee_id in ( select employee_id from m_employee where idtype=''02'' ) and
  query := Replace(query, '$filtertgl', ' tdate >=''$startdate'' and tdate <=''$enddate''  ' );
  query := Replace(query, '$startdate', date2sql(startdate) );
  query := Replace(query, '$enddate', date2sql(enddate) );
  query := Replace(query, '$syarat', sy );
  query := Replace(query, '$tablename', 't_payroll' );
  query := Replace(query, '$security', getSecurity(txtid.Text) );
  //msgok('5');
  if isAddColumn then
  begin
    MsgError('Please Logout & Login First');
    qk.Free;
    qs.Free;
    qr.Free;
    exit;
  end;

  Pesan(query);

  qk.Query(query);
  //dbg(qk.SQL.Text);
  if confirm('Show Lookup ?') = 'YES' then
  begin
    if LookupQuery('Choose Employee', qk, 800, True, '', 't_payroll') =False then
    begin
      //dbg('4');
      qk.Free;
      qs.Free;
      qr.Free;
      MsgError('CANCEL');
      exit;
    end;
  end;

  qk.First;
  while not qk.Eof do
  begin
    SetProgressbarDefault(qk);
    qs.Query('select * from t_summary where '+gets('employee_id', qk)+' and '+es+
             'tdate >='''+date2sql(startdate)+''' and tdate <= '''+date2sql(enddate)+''' ');
    if qs.RecordCount > 0 then
    begin
      qs.Edit;
      isiKolomUser(false, qs);
    end else
    begin
      qs.Append;
      isiKolomUser(true, qs);
    end;

    //qs.setField('transferdate', tgltransfer );
    isInsert := false;
    for x := 0 to qs.FieldCount - 1 do
    begin
      if LowerCase(qs.fieldName(x))='payroll_id'  then isInsert := true;
      if LowerCase(qs.fieldName(x))='gajipokok'   then isInsert := false;

      if LowerCase(qs.fieldName(x))='taxallowance' then isInsert := true;
      if LowerCase(qs.fieldName(x))='deptname'     then isInsert := false;
      //if LowerCase(qs.fieldName(x))='transferdate' then isInsert := false;

      if isInsert then
      begin
        qs.setField(qs.fieldName(x), qk.getField(qs.fieldName(x)) ) ;
      end;
    end;
    //pesan(qs.SQL.Text);
    //qs.setField('level', getQValueString('select level from m_level where '+gets('level_id', qs)+' '));
    qs.setfield('level', leveltipe);
    qs.setField('deptname', getQValueString('select name from m_department where '+gets('department_id', qs)+' '));
    qs.setField('empname', getQValueString('select  name from m_employee   where '+gets('employee_id', qs)+' '));

    qr.Query('select * from m_salary where acc=''D'' and '+es+
             'summaryorder>0 and summaryorder <99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where acc=''C'' and '+es+
             'summaryorder>0 and summaryorder <100 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where '+es+
             'summaryorder>=99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    if qs.getFieldString('bankaccountnumber') = '' then
    begin
      qs.setField('tipe', 'Cash');
    end else
    begin
      qs.setField('tipe', 'Transfer');
      if qs.getFieldDouble('takehomepay') <= 10000 then qs.setField('tipe', 'Cash');
    end;

    qs.Post;
    qk.Next;
  end;

  qk.Free;
  qs.Free;
  qr.Free;
end;

procedure TFrmPayrollSummary.CreateTransfer2(leveltipe:string; sy:string);
var
  qp, qt : tzquery;
  dt, kolom, idtype, sql  : string;
  databaru : boolean;
  sisa : double;
begin
  SetProgressbar('Please Wait', 0);
  qp := createquery;
  kolom := 'payroll_id,employee_id,nip,tdate,bankaccountnumber,bankaccountname,takehomepay,'+
           'department_id,bank_id,bankbranch,company_id,division_id,workarea_id,position_id,level_id,employeestatus_id';

  idtype := '';
  {if confirm('Ingin Isi ID Type ?') = 'YES' then
  begin
    InputQuery('Input ID Type', 'ID Type', idtype);
    idtype := ' employee_id in (select employee_id from m_employee where idtype='''+idtype+''') ';
  end;}
  if idtype='' then idtype := ' (0=0) ';

  if listemployee = '' then
  begin
    listemployee := '(0=0)';
  end else
  begin
    listemployee := 'employee_id in '+listemployee+'';
  end;

  sql := 'select '+kolom+' from t_payroll where '+getSecurity(txtid.Text)+' and '+es+
             ' '+idtype+' and '+es+
             ''+listemployee+' and '+es+
             'tdate >= '''+date2sql(startdate)+''' and '+es+
             'tdate <= '''+date2sql(enddate)+''' '+es+
             'and (0=0) and '+sy+' '+es+
             'order by department_id, nip';
  pesan(sql);
  Qp.Query(sql);

  //'and employee_id in ( select employee_id from m_employee where idtype=''02'' ) '+es+
  //and employee_id in ( select employee_id from m_employee where idtype=''02'' )
  //employee_id in ( select employee_id from m_employee where idtype=''01'' )
  //and employee_id in ( select employee_id from m_employee where idtype=''cc'' )
  //dbg(qp.SQL.Text);
  //pesan(qp.SQL.Text);

  {if confirm('Show Lookup ?') = 'YES' then
  begin
    if LookupQuery('Choose Employee', qp, 800, True, '', 't_payroll') =False then
    begin
      qp.Free;
      MsgError('CANCEL');
      exit;
    end;
  end;}

  qt := createquery;
  qp.First;
  while not qp.Eof do
  begin
    SetProgressbarDefault(qp);
    qt.Query('select * from t_transferbank where '+gets('employee_id', qp)+' '+es+
            ' and month(tdate)=month('''+qp.date2sql('tdate')+''') and '+es+
            ' year(tdate)=year('''+qp.date2sql('tdate')+''')');
    if qt.RecordCount > 0 then
    begin
      qt.Edit;
      databaru := false;
    end else
    begin
      qt.Append;
      databaru := true;
    end;
    qt.copyData(qp);
    //qt.setfield('level', getQValueString('select level from m_level where '+gets('level_id', qt)+' ') );
    qt.setfield('level', leveltipe);
    qt.setField('deptname', getQValueString('select name from m_department where '+gets('department_id', qt)+' ') );
    qt.setField('empname', getQValueString('select name from m_employee where '+gets('employee_id', qt)+' ') );
    qt.setField('tdate2', tgltransfer);
    isiKolomUser(databaru, qt);
    if qt.getFieldString('bankaccountnumber') = '' then
    begin
      qt.setField('tipe', 'Cash');
    end else
    begin
      qt.setField('tipe', 'Transfer');
      if qt.getFieldDouble('takehomepay') <= 10000 then qt.setField('tipe', 'Cash');
    end;
    qt.SetMultiField('takehomepay2,t100000,t50000,t20000,t10000,t5000,t2000,t1000,t500,t200,t100', '0');
    if LowerCase(qt.getFieldString('tipe')) ='cash' then
    begin
      qt.setField('bankaccountnumber', '');
      qt.setField('takehomepay2',  int(qt.getFieldDouble('takehomepay')/100)*100 );
      sisa := qt.getFieldDouble('takehomepay2');
      if sisa > 0 then
      begin
        qt.setField('t100000', int(sisa/100000) );
        sisa := sisa - (qt.getFieldDouble('t100000')*100000); qt.setField('t50000',  int(sisa/50000) );
        sisa := sisa - (qt.getFieldDouble('t50000')*50000);   qt.setField('t20000',  int(sisa/20000) );
        sisa := sisa - (qt.getFieldDouble('t20000')*20000);   qt.setField('t10000',  int(sisa/10000) );
        sisa := sisa - (qt.getFieldDouble('t10000')*10000);   qt.setField('t5000',   int(sisa/5000) );
        sisa := sisa - (qt.getFieldDouble('t5000')*5000);     qt.setField('t2000',   int(sisa/2000) );
        sisa := sisa - (qt.getFieldDouble('t2000')*2000);     qt.setField('t1000',   int(sisa/1000) );
        sisa := sisa - (qt.getFieldDouble('t1000')*1000);     qt.setField('t500',    int(sisa/500) );
        sisa := sisa - (qt.getFieldDouble('t500')*500);       qt.setField('t200',    int(sisa/200) );
        sisa := sisa - (qt.getFieldDouble('t200')*200);       qt.setField('t100',    int(sisa/100) );
      end;
    end;
    qt.Post;
    qp.Next;
  end;
  qp.Free;
end;



procedure TFrmPayrollSummary.N3CreateExcelManager1Click(Sender: TObject);
begin
  showprogressbar;
  reloadclick(' (level=''Manager'') ');
  CreateExcel('Manager');
  CreateCSV('Manager');
  HideProgressbar;
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C start excel '+ExcelName), SW_Hide);
end;

procedure TFrmPayrollSummary.N6ExportWeekly1Click(Sender: TObject);
begin
  showprogressbar;
  reloadclick(' (level=''Mingguan'') ');
  CreateExcel('Mingguan');
  CreateCSV('Mingguan');
  HideProgressbar;
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C start excel '+ExcelName), SW_Hide);
end;

procedure TFrmPayrollSummary.N7DeleteAllDataSummary1Click(Sender: TObject);
var
  id, psn : string;
  q : tzquery;
begin
  if q_master.RecordCount = 0 then exit;

  if confirm('Do You Want Delete '+q_master.RecordCountStr+' Data Summary ?') <> 'YES' then exit;


  id := getColumnFromFilter(Q_master, 'payroll_id');
  //dbg(id);
  q := createquery;
  q.Query('select * from t_payroll where payroll_id in '+id+' order by nip');
  q.First;
  psn:= '';
  ShowProgressbar;
  while not q.Eof do
  begin
    SetProgressbarDefault(q);
    if getQValueInteger('select count(*) from t_payroll where '+es+
                        ' employee_id='''+q.getFieldString('employee_id')+''' and '+es+
                        ' tdate > '''+q.date2sql('tdate')+''' ') > 0 then
    begin
      psn := psn + q.getFieldString('nip') + '>' + q.date2sql('tdate') + ', ';
    end else
    begin
      //ExecuteSQL('delete from t_transferbank where '+gets('payroll_id', Q_Master)+' ');
      DeleteAllDataDetail(txtID.Text, Q.getFieldString('payroll_id'));
      ExecuteSQL('delete from t_transferbank where '+gets('payroll_id', Q)+' ');
      ExecuteSQL('delete from t_summary where '+gets('payroll_id', Q)+' ');
      //BeforeDeletePayroll(q);
      //ExecuteSQL('delete from t_payroll where '+gets('payroll_id', Q)+' ');
    end;
    q.Next;
  end;
  q_master.Refresh;
  q_transfer.Refresh;
  q_cash.Refresh;
  q.Free;
  HideProgressbar;
  if psn<> '' then
  begin
    MsgError('Already Newest Payroll : ' +psn);
  end;
end;

procedure TFrmPayrollSummary.N2ExportToExcel1Click(Sender: TObject);
begin
  showprogressbar;
  reloadclick(' (level=''Non Manager'') ');
  CreateExcel('Non Manager');
  CreateCSV('Non Manager');
  HideProgressbar;
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C start excel '+ExcelName), SW_Hide);
end;

procedure TFrmPayrollSummary.CreateExcel(level:String);
const
  col : array[1..234] of string = ('A','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ',
                          'BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ',
                          'CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV','CW','CX','CY','CZ',
                          'DA','DB','DC','DD','DE','DF','DG','DH','DI','DJ','DK','DL','DM','DN','DO','DP','DQ','DR','DS','DT','DU','DV','DW','DX','DY','DZ',
                          'EA','EB','EC','ED','EE','EF','EG','EH','EI','EJ','EK','EL','EM','EN','EO','EP','EQ','ER','ES','ET','EU','EV','EW','EX','EY','EZ',
                          'FA','FB','FC','FD','FE','FF','FG','FH','FI','FJ','FK','FL','FM','FN','FO','FP','FQ','FR','FS','FT','FU','FV','FW','FX','FY','FZ',
                          'GA','GB','GC','GD','GE','GF','GG','GH','GI','GJ','GK','GL','GM','GN','GO','GP','GQ','GR','GS','GT','GU','GV','GW','GX','GY','GZ',
                          'HA','HB','HC','HD','HE','HF','HG','HH','HI','HJ','HK','HL','HM','HN','HO','HP','HQ','HR','HS','HT','HU','HV','HW','HX','HY');
var
  ASheet1, ASheet2 : TdxSpreadSheet;
  ATable : TdxSpreadSheetTableView;
  FolderName, FName, db1, db2, db3, db4, periode: string;

  xls, wrb, sheet1 : variant;
  range, pvt, pvtCache : olevariant;
  col1, col2, col3, col4, x : integer;

begin
  periode := formatdatetime('yyyyMM',startdate);
  if not DirectoryExists('D:\'+periode) then CreateDir('D:\'+periode);

  if LowerCase(level) = 'non manager' then
  begin
    if not DirectoryExists('D:\'+periode+'\'+Periode+'_Animo') then CreateDir('D:\'+periode+'\'+Periode+'_Animo');
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo';
    FName := Periode + '_Animo.xlsx';
  end else
  if LowerCase(level) = 'manager' then
  begin
    if not DirectoryExists('D:\'+periode+'\'+Periode+'_Animo_Level3') then CreateDir('D:\'+periode+'\'+Periode+'_Animo_Level3');
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo_Level3';
    FName := Periode + '_Animo_Level3.xlsx';
  end else
  if Lowercase(level) = 'mingguan' then
  begin
    if not DirectoryExists('D:\'+periode+'\'+Periode+'_Animo_Mingguan') then CreateDir('D:\'+periode+'\'+Periode+'_Animo_Mingguan');
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo_Mingguan';
    FName := Periode + '_Animo_Mingguan.xlsx';
  end;

  ExcelName := FolderName + '\' + FName;

  cash.OptionsView.Footer     := false;
  transfer.OptionsView.Footer := false;
  master.OptionsView.Footer   := false;
  TRANSFERlevel.Visible       := false;
  Cashlevel.Visible           := false;
  //msgok('1');
  setprogressbar('Please Wait', 0);
  ExportGrid('XLSX', grid_transfer, False, 'Transfer');
  ExportGrid('XLSX', grid_cash, False, 'Cash');
  ExportGrid('XLSX', grid_Master, False, 'Summary');

  cash.OptionsView.Footer     := true;
  transfer.OptionsView.Footer := true;
  master.OptionsView.Footer   := true;
  TRANSFERlevel.Visible       := true;
  Cashlevel.Visible           := true;
  //msgok('2');
  ASheet1 := TdxSpreadSheet.Create(Self);

  ASheet1.AddSheet('Transfer');
  ASheet1.AddSheet('Cash');
  ASheet1.AddSheet('PayrollSummary');
  ASheet1.AddSheet('PivotTransfer');
  ASheet1.AddSheet('PivotCash');
  ASheet1.AddSheet('PivotSummary');
  ASheet1.AddSheet('PivotGroup');

  ASheet2 := TdxSpreadSheet.Create(Self);
  ASheet2.LoadFromFile('Transfer.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 1;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  setprogressbar('Please Wait', 10);
  //msgok('3');
  ASheet2.LoadFromFile('Cash.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 2;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  //msgok('4a');
  ASheet2.LoadFromFile('Summary.xlsx');
  atable  := (ASheet2.Sheets[0] as TdxSpreadSheetTableView);
  atable.Selection.SelectAll;
  atable.CopyToClipboard;
  asheet1.ActiveSheetIndex := 3;
  asheet1.ActiveSheetAsTable.PasteFromClipboard;
  setprogressbar('Please Wait', 20);
  //msgok('4b');
  asheet1.Sheets[0].Destroy;
  asheet1.SaveToFile(ExcelName);
  asheet1.Free;
  asheet2.Free;
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C taskkill /f /im excel.exe'), SW_Hide);
  setprogressbar('Please Wait', 30);
  //msgok('4c');
  db1 := 'Transfer!A1:F'+ inttostr(Q_Transfer.RecordCount+1); //G650';
  db2 := 'Cash!A1:Q'+ inttostr(q_cash.RecordCount+1);//db2 := 'Cash!A1:R19';
  db3 := 'PayrollSummary!A1:CS'+ inttostr(q_master.RecordCount+1);//db3 := 'PayrollSummary!A1:CS668';
  db4 := 'PayrollSummary!A1:CS'+ inttostr(q_master.RecordCount+1);//db3 := 'PayrollSummary!A1:CS668';
  //msgok('4d');
  xls := CreateOleObject('Excel.Application');
  wrb := xls.workbooks.open(ExcelName);
  //msgok('4e');
  sheet1 := wrb.worksheets.item['Transfer'];
  sheet1.select;
  sheet1.range['A1:F'+inttostr(Q_Transfer.RecordCount+1)].WrapText := false;
  sheet1.range['A:F'].EntireColumn.Autofit;
  sheet1.range['A2'].select;
  xls.ActiveWindow.FreezePanes := True;
  //msgok('4f');
  sheet1 := wrb.worksheets.item['Cash'];
  sheet1.select;
  sheet1.range['A1:Q'+inttostr(Q_Cash.RecordCount+1)].WrapText := false;
  sheet1.range['A:Q'].EntireColumn.Autofit;
  sheet1.range['A2'].select;
  xls.ActiveWindow.FreezePanes := True;
  //msgok('4g');
  sheet1 := wrb.worksheets.item['PayrollSummary'];
  sheet1.select;
  sheet1.range['A1:CS'+inttostr(Q_Master.RecordCount+1)].WrapText := false;
  sheet1.range['1:'+inttostr(Q_Master.RecordCount+1)].EntireRow.Autofit;
  sheet1.range['A:CS'].EntireColumn.Autofit;
  sheet1.range['F2'].select;
  xls.ActiveWindow.FreezePanes := True;
  //msgok('4');
  col1:=0; col2:=0; col3:=0;
  if q_transfer.RecordCount > 0 then
  begin
    sheet1 := wrb.worksheets.item['PivotTransfer'];
    sheet1.select;
    range := sheet1.range['A1'];
    range.select;
    pvtCache := wrb.pivotcaches.create(1, db1, 3);
    pvt := pvtcache.createpivottable(range);
    pvt.PivotFields('Dept').orientation := 1;
    pvt.PivotFields('Dept').position := 1;
    pvt.PivotFields('Trans. Amount').orientation := 4;
    pvt.PivotFields('emp.Name').orientation := 4;
    sheet1.range['B3:B100'].NumberFormat := '#,##0';
    for x := 3 to 100 do
    begin
      col1 := x;
      if sheet1.range['A'+inttostr(x)].value = '' then break;
    end;
  end;

  setprogressbar('Please Wait', 40);
  //msgok('5');
  if q_cash.RecordCount > 0 then
  begin
    sheet1 := wrb.worksheets.item['PivotCash'];
    sheet1.select;
    range := sheet1.range['A1'];
    range.select;
    pvtCache := wrb.pivotcaches.create(1, db2, 3);
    pvt := pvtcache.createpivottable(range);
    pvt.PivotFields('Dept').orientation := 1;
    pvt.PivotFields('Dept').position := 1;
    pvt.PivotFields('Trans. Amount').orientation := 4;
    pvt.PivotFields('emp.Name').orientation := 4;
    sheet1.range['B3:B100'].NumberFormat := '#,##0';
    for x := 3 to 100 do
    begin
      col2 := x;
      if sheet1.range['A'+inttostr(x)].value = '' then break;
    end;
  end;

  setprogressbar('Please Wait', 50);
  //msgok('6');
  if q_master.RecordCount > 0 then
  begin
    sheet1 := wrb.worksheets.item['PivotSummary'];
    sheet1.select;
    range := sheet1.range['A1'];
    range.select;
    pvtCache := wrb.pivotcaches.create(1, db3, 3);
    pvt := pvtcache.createpivottable(range);
    pvt.PivotFields('Cost Center').orientation := 1;
    pvt.PivotFields('Cost Center').position := 1;
    pvt.PivotFields('Take Home Pay').orientation := 4;
    pvt.PivotFields('Employee Name').orientation := 4;
    sheet1.range['B3:B100'].NumberFormat := '#,##0';
    for x := 3 to 100 do
    begin
      col3 := x;
      if sheet1.range['A'+inttostr(x)].value = '' then break;
    end;
  end;

  sheet1.range['A'+inttostr(col3+1)] := 'Transfer';
  sheet1.range['A'+inttostr(col3+2)] := 'Cash';

  if col1 > 0 then
  begin
    sheet1.range['B'+inttostr(col3+1)] := '=PivotTransfer!B'+inttostr(col1-1);
    sheet1.range['C'+inttostr(col3+1)] := '=PivotTransfer!C'+inttostr(col1-1);
  end else
  begin
    sheet1.range['B'+inttostr(col3+1)] := '0';
    sheet1.range['C'+inttostr(col3+1)] := '0';
  end;

  if col2 > 0 then
  begin
    sheet1.range['B'+inttostr(col3+2)] := '=PivotCash!B'+inttostr(col2-1);
    sheet1.range['C'+inttostr(col3+2)] := '=PivotCash!C'+inttostr(col2-1);
  end else
  begin
    sheet1.range['B'+inttostr(col3+2)] := '0';
    sheet1.range['C'+inttostr(col3+2)] := '0';
  end;

  sheet1.range['B'+inttostr(col3+3)] := '=B'+inttostr(col3+1)+'+B'+inttostr(col3+2);
  sheet1.range['C'+inttostr(col3+3)] := '=C'+inttostr(col3+1)+'+C'+inttostr(col3+2);


  setprogressbar('Please Wait', 60);
  //msgok('7');
  if q_master.RecordCount > 0 then
  begin
    //msgok('7a');
    sheet1 := wrb.worksheets.item['PivotGroup'];
    sheet1.select;
    range := sheet1.range['A1'];
    range.select;
    //msgok('7b');
    pvtCache := wrb.pivotcaches.create(1, db4, 4);
    //msgok('7c');
    pvt := pvtcache.createpivottable(range);
    //msgok('7d');
    pvt.PivotFields('Summary Code').orientation   := 1;
    pvt.PivotFields('Summary Code').position      := 1;
    //msgok('7e');

    pvt.PivotFields('Employee Name').orientation  := 4;
    pvt.PivotFields('Overtime').orientation       := 4;
    pvt.PivotFields('Basic Salary').orientation   := 4;
    //msgok('7f');
    sheet1.range['C3:C100'].NumberFormat := '#,##0';
    sheet1.range['D3:D100'].NumberFormat := '#,##0';
    //msgok('7g');
    for x := 3 to 100 do
    begin
      col4 := x;
      if sheet1.range['A'+inttostr(x)].value = '' then break;
    end;
    //msgok('7h');
  end;

  if col3 > 0 then
  begin
    sheet1.range['B'+inttostr(col4+1)] := '=PivotSummary!C'+inttostr(col3-1);
    sheet1.range['C'+inttostr(col4+1)] := '=PivotSummary!B'+inttostr(col3-1);
    sheet1.range['D'+inttostr(col4+1)] := '=C'+inttostr(col4-1)+'+D'+inttostr(col4-1);
  end;

  //msgok('8');
  sheet1 := wrb.worksheets.item['PayrollSummary'];
  sheet1.select;
  range := sheet1.range['A1'];
  range.select;
//  sheet1 := wrb.worksheets.item['PayrollSummary'];
//  sheet1.range['A1'].select;

  xls.DisplayAlerts := False;
  xls.ActiveWorkbook.save;

  sheet1 := Unassigned;
  xls.workbooks.close;
  wrb := Unassigned;
  xls.quit;
  xls := Unassigned;
  setprogressbar('Please Wait', 70);
  ShellExecute_AndWait(pchar('cmd.exe'), pchar('/C taskkill /f /im excel.exe'), SW_Hide);
end;

procedure TFrmPayrollSummary.CreateCSV(levelTipe:string);
var
  nama, s, fn, levelid, periode, FolderName, FName : string;
  ts : tstringlist;
begin
  periode := formatdatetime('yyyyMM',startdate);

  if LowerCase(levelTipe) = 'non manager' then
  begin
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo';
    FName := Periode + '_Animo.CSV';
  end else
  if LowerCase(levelTipe) = 'manager' then
  begin
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo_Level3';
    FName := Periode + '_Animo_Level3.CSV';
  end;
  if LowerCase(levelTipe) = 'mingguan' then
  begin
    FolderName := 'D:\'+periode+'\'+Periode+'_Animo_Mingguan';
    FName := Periode + '_Animo_Mingguan.CSV';
  end;

  fn  := FolderName + '\' + FName;
  ts  := tstringlist.Create;
  ts.Clear;
  s   := 'Acc. No.,Trans. Amount,emp.Number,emp.Name,Dept,Trans. Date';
  ts.Add(s);
  q_transfer.First;
  q_transfer.DisableControls;
  while not q_transfer.Eof do
  begin
    nama := q_transfer.getFieldString('empname');
    SetProgressbar('Please Wait',
                   70 + ((q_transfer.recno * 100) div q_transfer.recordcount));
    s := '';
    s := s + q_transfer.getCSV('bankaccountnumber') + ',';
    s := s + q_transfer.getCSV('takehomepay')       + ',';
    s := s + q_transfer.getCSV('nip')               + ',';
    s := s + q_transfer.getCSV('empname')           + ',';
    s := s + q_transfer.getCSV('deptname')          + ',';
    s := s + formatdatetime('MM/dd/yyyy', q_transfer.getField('tdate2'));
    ts.Add(s);
    q_transfer.Next;
  end;
  if ts.Count > 1 then ts.SaveToFile(fn);
  q_transfer.EnableControls;
  ts.Free;
end;

procedure TFrmPayrollSummary.CreateSummary4;
var
  qr, qk, qs :tzquery;
  idm, x : integer;
  isAddColumn, isInsert : boolean;
  caption, queryD, queryC, queryA, query, fieldawal, fieldakhir, fn, lastcolumn, ss : string;
begin

  qk := createquery;
  qs := createquery;
  qr := createquery;
  qk.Query('select * from t_payroll limit 0');
  qs.Query('select * from t_summary limit 0');

  qk.Query('select p.employee_id, e.name, p.nip, p.bankaccountnumber, p.bankaccountname, '+es+
           'e.joindate, e.resigndate, e.idtype, '+es+
           'p.department_id, p.position_id, p.employeestatus_id '+es+
           'from t_payroll p '+es+
           'left join m_employee e on p.employee_id=e.employee_id '+es+
           'where month(p.tdate)>=month('''+date2sql(startdate)+''') '+es+
           'and year(p.tdate)>=year('''+date2sql(startdate)+''') ');

  if confirm('Pilih karyawan ?') = 'YES' then
  begin

    pesan(qk.SQL.Text);
    if LookupQuery('Pilih Karyawan', qk, 800, True, '', 't_payroll') =False then
    begin
      qk.Free;
      qs.Free;
      qr.Free;
      MsgError('CANCEL');
      exit;
    end;
    ss := ' (employee_id in '+ getColumnFromFilter(qk, 'employee_id')+ ') ';
  end else
  begin
    ss := ' (0=0) ';
  end;
  //pesan(ss);

  query := 'select e.* from v_summary e '+es+
           'where '+ss+' and '+es+
           '$syarat and $security and $filtertgl '+es+
           'order by nip, tdate';
  query := Replace(query, '$filtertgl', ' tdate >=''$startdate'' and tdate <=''$enddate''  ' );
  query := Replace(query, '$startdate', date2sql(startdate) );
  query := Replace(query, '$enddate', date2sql(enddate) );
  query := Replace(query, '$syarat', '(0=0)' ); //sy
  query := Replace(query, '$tablename', 't_payroll' );
  query := Replace(query, '$security', getSecurity(txtid.Text) );
  //msgok('5');
  //msgok('cc');
  Pesan(query);
  qk.Query(query);

  dbg(qk.RecordCount);
  qk.First;
  listemployee := '';

  while not qk.Eof do
  begin
    SetProgressbarDefault(qk);
    listemployee := listemployee + qk.getFieldString('employee_id') + ',';

    qs.Query('select * from t_summary where '+gets('employee_id', qk)+' and '+es+
             'tdate >='''+date2sql(startdate)+''' and tdate <= '''+date2sql(enddate)+''' ');
    //pesan(qs.SQL.text);
    if qs.RecordCount > 0 then
    begin
      qs.Edit;
      isiKolomUser(false, qs);
    end else
    begin
      qs.Append;
      isiKolomUser(true, qs);
    end;

    //qs.setField('transferdate', tgltransfer );
    isInsert := false;
    for x := 0 to qs.FieldCount - 1 do
    begin
      if LowerCase(qs.fieldName(x))='payroll_id'  then isInsert := true;
      if LowerCase(qs.fieldName(x))='gajipokok'   then isInsert := false;

      if LowerCase(qs.fieldName(x))='taxallowance' then isInsert := true;
      if LowerCase(qs.fieldName(x))='deptname'     then isInsert := false;
      //if LowerCase(qs.fieldName(x))='transferdate' then isInsert := false;

      if isInsert then
      begin
        qs.setField(qs.fieldName(x), qk.getField(qs.fieldName(x)) ) ;
      end;
    end;
    qs.setfield('level', '');
    qs.setField('deptname', getQValueString('select code from m_department where '+gets('department_id', qs)+' '));
    qs.setField('empname', getQValueString('select  name from m_employee   where '+gets('employee_id', qs)+' '));

    qr.Query('select * from m_salary where acc=''D'' and '+es+
             'summaryorder>0 and summaryorder <99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where acc=''C'' and '+es+
             'summaryorder>0 and summaryorder <100 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    qr.Query('select * from m_salary where '+es+
             'summaryorder>=99 group by name order by summaryorder ');
    qr.First;
    while not qr.Eof do
    begin
      qs.setField( qr.getFieldString('columndb'), qk.getField(qr.getFieldString('columndb')) );
      qr.Next;
    end;

    if qs.getFieldString('bankaccountnumber') = '' then
    begin
      qs.setField('tipe', 'Cash');
    end else
    begin
      qs.setField('tipe', 'Transfer');
      if qs.getFieldDouble('takehomepay') <= 10000 then qs.setField('tipe', 'Cash');
    end;

//    qs.SetMultiFieldQ('codestatus,codelevel,code,basicsalary,overtime', qk);

    qs.Post;
    qk.Next;
  end;

  if listemployee <> '' then listemployee := '(' + midstr(listemployee,0, length(listemployee)-1) + ')';

  qk.Free;
  qs.Free;
  qr.Free;
end;

end.
