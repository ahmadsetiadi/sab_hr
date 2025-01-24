unit UPayroll;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
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
  dxSkinVisualStudio2013Light, dxBarBuiltInMenu,
  cxDataControllerConditionalFormattingRulesManagerDialog;

type
  TFrmPayroll = class(TForm)
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
    Q_Laporan: TZQuery;
    frxDBDataset1: TfrxDBDataset;
    FR_Report: TfrxReport;
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
    DS_Employee: TDataSource;
    Q_Employee: TZQuery;
    N1CreateTHR1: TMenuItem;
    actDBG: TAction;
    N2CreatePayrollSetahun1: TMenuItem;
    DS_Laporan1: TDataSource;
    Q_Laporan1: TZQuery;
    frxDBDataset2: TfrxDBDataset;
    DS_Laporan: TDataSource;
    frxDBDataset3: TfrxDBDataset;
    DS_Laporan2: TDataSource;
    Q_Laporan2: TZQuery;
    N1PayrolSlip1: TMenuItem;
    SMTP: TIdSMTP;
    MailMessage: TIdMessage;
    IdSSLIOHandlerSocketOpenSSL1: TIdSSLIOHandlerSocketOpenSSL;
    IdSSLIOHandlerSocketOpenSSL2: TIdSSLIOHandlerSocketOpenSSL;
    N2PreviewPayrollSlip1: TMenuItem;
    importdataemail1: TMenuItem;
    kirimemailproposal1: TMenuItem;
    MASTERpayroll_id: TcxGridDBBandedColumn;
    MASTERtdate1: TcxGridDBBandedColumn;
    MASTERstartdate: TcxGridDBBandedColumn;
    MASTERenddate: TcxGridDBBandedColumn;
    MASTERemployee_id: TcxGridDBBandedColumn;
    MASTERnip1: TcxGridDBBandedColumn;
    MASTERtypejamsostek: TcxGridDBBandedColumn;
    MASTERbasejamsostek: TcxGridDBBandedColumn;
    MASTERtotalincome: TcxGridDBBandedColumn;
    MASTERtaxallowance: TcxGridDBBandedColumn;
    MASTERjkm: TcxGridDBBandedColumn;
    MASTERjkk: TcxGridDBBandedColumn;
    MASTERjkn: TcxGridDBBandedColumn;
    MASTERjpk: TcxGridDBBandedColumn;
    MASTERins: TcxGridDBBandedColumn;
    MASTERgross: TcxGridDBBandedColumn;
    MASTERgrossmonthly: TcxGridDBBandedColumn;
    MASTERthrbonus: TcxGridDBBandedColumn;
    MASTERgross_yearly: TcxGridDBBandedColumn;
    MASTERgross_ytd: TcxGridDBBandedColumn;
    MASTERthrbonus2: TcxGridDBBandedColumn;
    MASTERthrbonustaxallowance: TcxGridDBBandedColumn;
    MASTERnettosebelum: TcxGridDBBandedColumn;
    MASTERgrossdeduct: TcxGridDBBandedColumn;
    MASTERgrossdeduct_yearly: TcxGridDBBandedColumn;
    MASTERgrossdeduct_ytd: TcxGridDBBandedColumn;
    MASTERtotalgross: TcxGridDBBandedColumn;
    MASTERbjab: TcxGridDBBandedColumn;
    MASTERbjab2: TcxGridDBBandedColumn;
    MASTERjhtemployee: TcxGridDBBandedColumn;
    MASTERjhtemployee_ytd: TcxGridDBBandedColumn;
    MASTERjhtemployee_yearly: TcxGridDBBandedColumn;
    MASTERtotaljhtemployee: TcxGridDBBandedColumn;
    MASTERjpsemployee: TcxGridDBBandedColumn;
    MASTERjpsemployee_ytd: TcxGridDBBandedColumn;
    MASTERjpsemployee_yearly: TcxGridDBBandedColumn;
    MASTERtotaljpsemployee: TcxGridDBBandedColumn;
    MASTERothertaxdeduct: TcxGridDBBandedColumn;
    MASTERtotaltaxdeduct: TcxGridDBBandedColumn;
    MASTERnett: TcxGridDBBandedColumn;
    MASTERnontaxableincome: TcxGridDBBandedColumn;
    MASTERtaxableincome: TcxGridDBBandedColumn;
    MASTERroundtaxableincome: TcxGridDBBandedColumn;
    MASTERtax21_yearly: TcxGridDBBandedColumn;
    MASTERtax21_ytd: TcxGridDBBandedColumn;
    MASTERthrbonustax: TcxGridDBBandedColumn;
    MASTERpph21sebelum: TcxGridDBBandedColumn;
    MASTERtax21_irregular: TcxGridDBBandedColumn;
    MASTERtax21_monthly: TcxGridDBBandedColumn;
    MASTERotherincome: TcxGridDBBandedColumn;
    MASTERjknemployee: TcxGridDBBandedColumn;
    MASTERotherdeduction: TcxGridDBBandedColumn;
    MASTERgrandtotal: TcxGridDBBandedColumn;
    MASTERrounding: TcxGridDBBandedColumn;
    MASTERtakehomepay: TcxGridDBBandedColumn;
    MASTERjpscompany: TcxGridDBBandedColumn;
    MASTERjhtcompany: TcxGridDBBandedColumn;
    MASTERnpwpemployee: TcxGridDBBandedColumn;
    MASTERnpwpdate: TcxGridDBBandedColumn;
    MASTERnpwpcompany: TcxGridDBBandedColumn;
    MASTERbank_id: TcxGridDBBandedColumn;
    MASTERbankaccountname: TcxGridDBBandedColumn;
    MASTERbankaccountnumber: TcxGridDBBandedColumn;
    MASTERbankbranch: TcxGridDBBandedColumn;
    MASTERcompany_id: TcxGridDBBandedColumn;
    MASTERdivision_id: TcxGridDBBandedColumn;
    MASTERdepartment_id: TcxGridDBBandedColumn;
    MASTERworkarea_id: TcxGridDBBandedColumn;
    MASTERposition_id: TcxGridDBBandedColumn;
    MASTERemployeestatus_id: TcxGridDBBandedColumn;
    MASTERjoindate: TcxGridDBBandedColumn;
    MASTERresigndate: TcxGridDBBandedColumn;
    MASTERuseradded: TcxGridDBBandedColumn;
    MASTERdateadded: TcxGridDBBandedColumn;
    MASTERuseredited: TcxGridDBBandedColumn;
    MASTERdateedited: TcxGridDBBandedColumn;
    MASTERjamsostek_id: TcxGridDBBandedColumn;
    MASTERtaxtype: TcxGridDBBandedColumn;
    MASTERtaxirregular: TcxGridDBBandedColumn;
    MASTERtaxfinal: TcxGridDBBandedColumn;
    ApplicationEvents1: TApplicationEvents;
    N3ReportBPJSTenagaKerja1: TMenuItem;
    N4ReportBPJSKesehatan1: TMenuItem;
    Fr_RTK: TfrxReport;
    Frx_RTK: TfrxDBDataset;
    Q_RTK: TZQuery;
    Frx_RKS: TfrxDBDataset;
    Q_RKS: TZQuery;
    Q_RTKK: TZQuery;
    Frx_RTKK: TfrxDBDataset;
    Q_RKSK: TZQuery;
    Frx_RKSK: TfrxDBDataset;
    Fr_RKS: TfrxReport;
    MASTERbasejamsostek1: TcxGridDBBandedColumn;
    MASTERjkk1: TcxGridDBBandedColumn;
    MASTERjkm1: TcxGridDBBandedColumn;
    MASTERjhtemployee1: TcxGridDBBandedColumn;
    MASTERjhtcompany1: TcxGridDBBandedColumn;
    MASTERjknemployee1: TcxGridDBBandedColumn;
    MASTERjkn1: TcxGridDBBandedColumn;
    MASTERjpsemployee1: TcxGridDBBandedColumn;
    MASTERjpscompany1: TcxGridDBBandedColumn;
    MASTERlevel_id: TcxGridDBBandedColumn;
    Fr_RPayroll: TfrxReport;
    Frx_RPayroll: TfrxDBDataset;
    Q_RPayroll: TZQuery;
    N5ReportPayroll1: TMenuItem;
    IdSSLIOHandlerSocketOpenSSL3: TIdSSLIOHandlerSocketOpenSSL;
    N2CreateCSVSPTBulanan1: TMenuItem;
    N4IsDebug1: TMenuItem;
    Q_Label: TZQuery;
    DataSource1: TDataSource;
    frxDBDataset4: TfrxDBDataset;
    Fr_Label: TfrxReport;
    N6PrintLabel1: TMenuItem;
    N2CreatePayrollManager1: TMenuItem;
    N7PreviewPayrollSlipManager1: TMenuItem;
    frxDBDataset5: TfrxDBDataset;
    frxDBDataset6: TfrxDBDataset;
    DataSource2: TDataSource;
    QM_Detail2: TZQuery;
    QM_Detail1: TZQuery;
    DataSource3: TDataSource;
    DataSource4: TDataSource;
    QM_Master: TZQuery;
    frxDBDataset7: TfrxDBDataset;
    FR_SAB: TfrxReport;
    N8ExportPayrollSlipManager1: TMenuItem;
    MASTERlevel: TcxGridDBBandedColumn;
    MASTERptkp: TcxGridDBBandedColumn;
    MASTERnote1: TcxGridDBBandedColumn;
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
    MASTERmasuk4: TcxGridDBBandedColumn;
    MASTERlibur4: TcxGridDBBandedColumn;
    MASTERlibur3_4: TcxGridDBBandedColumn;
    MASTERcodestatus: TcxGridDBBandedColumn;
    MASTERcodelevel: TcxGridDBBandedColumn;
    MASTERcode: TcxGridDBBandedColumn;
    MASTERbasicsalary: TcxGridDBBandedColumn;
    MASTERovertime: TcxGridDBBandedColumn;
    MASTERlvl_id: TcxGridDBBandedColumn;
    hisWeek1: TMenuItem;
    N6CreatePayrollMingguan1: TMenuItem;
    N7DeleteAllDataPayroll1: TMenuItem;
    hisMonth1: TMenuItem;
    N9ExportPayrollSlipMingguan1: TMenuItem;
    N8ExportPayrollSlipNonManager1: TMenuItem;
    PrevWeek1: TMenuItem;
    NextWeek1: TMenuItem;
    frxReport1: TfrxReport;
    MASTERallowance: TcxGridDBBandedColumn;
    MASTERmasuk5: TcxGridDBBandedColumn;
    MASTERtransferdate: TcxGridDBBandedColumn;
    MASTERbumilda: TcxGridDBBandedColumn;
    frxReport2: TfrxReport;
    frxReport3: TfrxReport;
    FR_SlipManager2: TfrxReport;
    MASTERsisapinjaman: TcxGridDBBandedColumn;
    MASTERgross_nonthp: TcxGridDBBandedColumn;
    MASTERgross_thp: TcxGridDBBandedColumn;
    FR_SlipManager_241103: TfrxReport;
    N3: TMenuItem;
    N2TotalPembayaran1: TMenuItem;
    FR_Total: TfrxReport;
    frxDBDataset8: TfrxDBDataset;
    DataSource5: TDataSource;
    QM_Total: TZQuery;
    TabSummary: TcxTabSheet;
    GRID_SUMMARY: TcxGrid;
    SUMMARY: TcxGridDBBandedTableView;
    GRID_SUMMARYLevel1: TcxGridLevel;
    Q_SUMMARY: TZQuery;
    DS_SUMMARY: TDataSource;
    cxGridPopupMenu2: TcxGridPopupMenu;
    SUMMARYno: TcxGridDBBandedColumn;
    SUMMARYpayroll_id: TcxGridDBBandedColumn;
    SUMMARYtransferdate: TcxGridDBBandedColumn;
    SUMMARYtdate: TcxGridDBBandedColumn;
    SUMMARYstartdate: TcxGridDBBandedColumn;
    SUMMARYenddate: TcxGridDBBandedColumn;
    SUMMARYnip: TcxGridDBBandedColumn;
    SUMMARYemployee_id: TcxGridDBBandedColumn;
    SUMMARYname: TcxGridDBBandedColumn;
    SUMMARYdepartment: TcxGridDBBandedColumn;
    SUMMARYemployeestatus: TcxGridDBBandedColumn;
    SUMMARYposition: TcxGridDBBandedColumn;
    SUMMARYcompany_id: TcxGridDBBandedColumn;
    SUMMARYdepartment_id: TcxGridDBBandedColumn;
    SUMMARYposition_id: TcxGridDBBandedColumn;
    SUMMARYemployeestatus_id: TcxGridDBBandedColumn;
    SUMMARYjoindate: TcxGridDBBandedColumn;
    SUMMARYresigndate: TcxGridDBBandedColumn;
    SUMMARYbankaccountnumber: TcxGridDBBandedColumn;
    SUMMARYbankaccountname: TcxGridDBBandedColumn;
    SUMMARYgajipokok: TcxGridDBBandedColumn;
    SUMMARYuang_makan: TcxGridDBBandedColumn;
    SUMMARYbpjs_company: TcxGridDBBandedColumn;
    SUMMARYbpjs_jkk_company: TcxGridDBBandedColumn;
    SUMMARYthr: TcxGridDBBandedColumn;
    SUMMARYbonus: TcxGridDBBandedColumn;
    SUMMARYp_bpjs_company: TcxGridDBBandedColumn;
    SUMMARYp_bpjs_jkk_company: TcxGridDBBandedColumn;
    SUMMARYp_bpjs_ks_employee: TcxGridDBBandedColumn;
    SUMMARYtotal_pendapatan: TcxGridDBBandedColumn;
    SUMMARYtotal_potongan: TcxGridDBBandedColumn;
    SUMMARYgrandtotal: TcxGridDBBandedColumn;
    SUMMARYrounding: TcxGridDBBandedColumn;
    SUMMARYtakehomepay: TcxGridDBBandedColumn;
    SUMMARYidtype: TcxGridDBBandedColumn;
    SUMMARYptkp: TcxGridDBBandedColumn;
    SUMMARYnpwpemployee: TcxGridDBBandedColumn;
    SUMMARYnpwpdate: TcxGridDBBandedColumn;
    SUMMARYnpwpcompany: TcxGridDBBandedColumn;
    SUMMARYbank_id: TcxGridDBBandedColumn;
    SUMMARYbankbranch: TcxGridDBBandedColumn;
    SUMMARYjamsostek_id: TcxGridDBBandedColumn;
    FR_NSA: TfrxReport;
    QS_SAB: TZQuery;
    DataSource6: TDataSource;
    FRX_SAB: TfrxDBDataset;
    QS_NSA: TZQuery;
    DataSource7: TDataSource;
    FRX_NSA: TfrxDBDataset;
    N1PreviewPayrollSlip1: TMenuItem;
    SUMMARYbankname: TcxGridDBBandedColumn;
    SUMMARYno_bpjsks: TcxGridDBBandedColumn;
    SUMMARYno_bpjstk: TcxGridDBBandedColumn;
    SUMMARYdob: TcxGridDBBandedColumn;
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure ReloadClick;
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
    function getFocusGridCX : TcxGrid;
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
    procedure DeleteLoan(qm:tzquery);

    procedure ImportFromExcel1Click(Sender: TObject);
    procedure MASTERemployee_idPropertiesPopup(Sender: TObject);
    procedure N1CreateTHR1Click(Sender: TObject);
    procedure QDAfterPost(DataSet: TDataSet);
    procedure QDBeforeEdit(DataSet: TDataSet);
    procedure actDBGExecute(Sender: TObject);
    procedure N2CreatePayrollSetahun1Click(Sender: TObject);
    procedure N1PayrolSlip1Click(Sender: TObject);
    procedure N2PreviewPayrollSlip1Click(Sender: TObject);
    procedure importdataemail1Click(Sender: TObject);
    procedure kirimemailproposal1Click(Sender: TObject);
    procedure PopupMenuPopup(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
    procedure N3ReportBPJSTenagaKerja1Click(Sender: TObject);
    procedure N4ReportBPJSKesehatan1Click(Sender: TObject);
    procedure N5ReportPayroll1Click(Sender: TObject);
    procedure N2CreateCSVSPTBulanan1Click(Sender: TObject);
    procedure N4IsDebug1Click(Sender: TObject);
    procedure N6PrintLabel1Click(Sender: TObject);

    procedure processPayroll;
    procedure N2CreatePayrollManager1Click(Sender: TObject);
    procedure N7PreviewPayrollSlipManager1Click(Sender: TObject);
    procedure N8ExportPayrollSlipManager1Click(Sender: TObject);
    procedure hisWeek1Click(Sender: TObject);
    procedure N6CreatePayrollMingguan1Click(Sender: TObject);
    procedure N7DeleteAllDataPayroll1Click(Sender: TObject);

    procedure BeforeDeletePayroll(q:tzquery);
    procedure hisMonth1Click(Sender: TObject);
    procedure N8ExportPayrollSlipNonManager1Click(Sender: TObject);
    procedure N9ExportPayrollSlipMingguan1Click(Sender: TObject);

    procedure ExportPayrollSlip(tipepayroll:string);
    procedure PrevWeek1Click(Sender: TObject);
    procedure NextWeek1Click(Sender: TObject);
    procedure N2TotalPembayaran1Click(Sender: TObject);
    procedure TabMasterClick(Sender: TObject);
    procedure TabSummaryClick(Sender: TObject);
    procedure TabMasterEnter(Sender: TObject);
    procedure TabSummaryEnter(Sender: TObject);
    procedure N1PreviewPayrollSlip1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmPayroll: TFrmPayroll;
  isNowEditDate, DisableChangeDate : Boolean;
  startdate, enddate : tdatetime;
  sqldetail : array[0..200] of string;
  isNewRecord: array[0..1000] of boolean;
  TabActive : string;
implementation

{$R *.dfm}
uses unit1, UMenuLogin, UImport, Unit2, ULookup;
//form close, form create
procedure TFrmPayroll.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmPayroll.cekAllEditModule(idm:integer);
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
procedure TFrmPayroll.isiALLTableKolom;
var
  idm : integer;
  qk : tzquery;
begin
  idm := strtoint(txtid.Text);
  isiTableKolom(tablename[idm], master);
  isiTableKolom(tablename[37], summary);

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
procedure TFrmPayroll.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekAllEditModule(strtoint(txtid.Text));
  isiALLTableKolom;
  isiMenuPrint(ItemMenu, ItemPrint, txtID.Text);
  q_master.Active := false;
  q_summary.Active:= false;
  FreeAllColumn(txtid.Text);
  action := caFree;
end;
procedure TFrmPayroll.FormCreate(Sender: TObject);
begin
  isDebug := False;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  lbljudul.Caption   := SentencesCase(txtModuleName.Text);
  self.Caption       := lbljudul.Caption;
  tabmaster.Caption  := SentencesCase(txtModuleName.Text);
  tabsummary.Caption := 'Summary';
  tabactive := 'master';

  DisableChangeDate  := false;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  startdate          := btnstartdate.Date;
  enddate            := BtnEnddate.Date;

  SettingQuery;
  ValidasiControl;
  SettingFont;
  ShowDateTemplate;

  N2CreatePayrollSetahun1.Visible := False;
  importdataemail1.Visible        := False;
  kirimemailproposal1.Visible     := False;
  //if CekMotherBoard then N2CreatePayrollSetahun1.Visible := True;
  //if CekMotherBoard then importdataemail1.Visible        := True;
  //if CekMotherBoard then kirimemailproposal1.Visible     := True;
end;
procedure TFrmPayroll.SettingQuery;
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
  setColumnWidth(txtid.Text, q_master, master, false);

  q_summary.Tag     := 37;
  summary.Tag   := 37;
  TableName[37] := 'v_summary';
  SQLGrid[37] := getQuery('37', true, startdate, enddate);
  q_summary.Query(SQLGrid[37]);
  setColumnWidth('37', q_summary, summary, false);

  //StyleGridReadOnly(master);
  AutoActiveQuery;
  q_master.Refresh;
end;
procedure TFrmPayroll.ReloadClick;
var
  idm : integer;
  ss  : string;
begin

//  if (tipe='') then
//  begin
//    ss := '(0=0)';
//  end else
//  begin
//    ss := ' (level=''Mingguan'') ';
//  end;
  master.DataController.Filter.Clear;
  summary.DataController.Filter.Clear;
  idm               := strtoint(txtid.Text);
  startdate         := BtnStartdate.Date;
  enddate           := BtnEnddate.Date;
  TableName[idm]    := getTable(txtid.Text);
  SQLGrid[idm]      := getQuery(txtid.Text, True, startdate, enddate);
  dbg(SQLGrid[idm]);
  q_master.Query(SQLGrid[idm]);

  TableName[37] := 'v_summary';
  SQLGrid[37] := getQuery('37', true, startdate, enddate);
  q_summary.Query(SQLGrid[37]);

  q_master.Refresh;
  q_summary.Refresh;
  //grid_master.SetFocus;
end;
procedure TFrmPayroll.SettingFont;
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
procedure TFrmPayroll.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, False);
  SetEditTable(master, False);
  SetDeleteTable(master, cekValidasi('`delete`', mn));
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );
  ValidasiColumn(mn, 'hide_column', master);
  ValidasiColumn(mn, 'readonly_column', master);

  readonlyAllColumn(master);
  ReadOnlyDataset(summary);
  master.NavigatorButtons.Cancel.Visible  := False;
  master.NavigatorButtons.Post.Visible    := False;
end;
procedure TFrmPayroll.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
procedure TFrmPayroll.TabMasterClick(Sender: TObject);
begin
   TabActive := 'master';
end;

procedure TFrmPayroll.TabMasterEnter(Sender: TObject);
begin
  TabActive := 'master';
end;

procedure TFrmPayroll.TabSummaryClick(Sender: TObject);
begin
  TabActive := 'summary';
end;

procedure TFrmPayroll.TabSummaryEnter(Sender: TObject);
begin
  TabActive := 'summary';
end;

//end form close, form create

//atur stardate, enddate
procedure TFrmPayroll.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPayroll.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmPayroll.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmPayroll.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmPayroll.MenuItem1Click(Sender: TObject);
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
procedure TFrmPayroll.OneMonth1Click(Sender: TObject);
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

procedure TFrmPayroll.NextMonth1Click(Sender: TObject);
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

procedure TFrmPayroll.PrevMonth1Click(Sender: TObject);
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

procedure TFrmPayroll.OneYear1Click(Sender: TObject);
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
procedure TFrmPayroll.OneDay1Click(Sender: TObject);
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
procedure TFrmPayroll.oday1Click(Sender: TObject);
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
procedure TFrmPayroll.PrevWeek1Click(Sender: TObject);
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
  ReloadClick;
  DisableChangeDate := false;

end;

procedure TFrmPayroll.NextWeek1Click(Sender: TObject);
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
  ReloadClick;
  DisableChangeDate := false;

end;

procedure TFrmPayroll.hisWeek1Click(Sender: TObject);
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


  s := '';
  if InputQuery('Isi ID Type', 'Search', s) = False then
  begin
    MsgError('CANCEL');
    exit;
  end;

  if s = '' then
  begin
    ReloadClick;
  end else
  begin
    ReloadClick;
  end;
  DisableChangeDate := false;




end;
procedure TFrmPayroll.hisMonth1Click(Sender: TObject);
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
procedure TFrmPayroll.PopupMenuPopup(Sender: TObject);
var
  mn : string;
begin
  mn := getQValueString('select name from s_module where id_module='''+inttostr(getFocusQuery.Tag)+''' ');
  ppAdd.Visible    := False;
  ppEdit.Visible   := False;

  if tabactive = 'master' then ppDelete.Visible := cekValidasi('`delete`', mn);

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

procedure TFrmPayroll.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmPayroll.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
//end atur stardate, enddate

//grid
function TFrmPayroll.getFocusQuery : TZQuery;
begin
  if tabactive = 'master'  then result := Q_MASTER;
  if tabactive = 'summary'  then result := Q_SUMMARY;
end;
function TFrmPayroll.getFocusTableName : String;
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
function TFrmPayroll.getFocusGrid : TcxGridDBBandedTableView;
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
function TFrmPayroll.getFocusGridView : TcxGridDBBandedTableView;
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
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_summary' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := Summary;
      end;
    end;
  end;
end;
procedure TFrmPayroll.AutoActiveQuery;
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
      if lowercase(TZQuery(Components[x]).Name) = 'q_summary' then
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
procedure TFrmPayroll.AutoRefreshQuery;
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
function TFrmPayroll.getTabByName(nama:string) : TcxTabSheet;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := TabMaster;
  if nama = 'summary'  then result := TabSummary;
end;

function TFrmPayroll.getFocusGridCX : TcxGrid;
var
  x : integer;
begin
  for x := 0 to ComponentCount - 1 do
  begin
    if Components[x] is TcxGrid then
    begin
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_master' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := GRID_MASTER;
      end;
      if lowercase(TcxGridDBBandedTableView(Components[x]).Name) = 'grid_summary' then
      begin
        if TcxGrid(Components[x]).IsFocused then result := GRID_SUMMARY;
      end;
    end;
  end;
end;

procedure TFrmPayroll.ImportFromExcel1Click(Sender: TObject);
var
  tn : string;
  qc, qk, qi : tzquery;
  idm : integer;
begin
  exit;
  idm:= getQueryByName(getFocusGridView.Name).Tag;
  tn := getTable(inttostr(idm));
  qk := createquery;
  qi := createquery;
  qc := createquery;
  qk.Query('show columns from '+tn+' ');
  qk.First;
  while not qk.Eof do
  begin
    qc.Query('select * from s_kolom '+es+
                        'where columnname='''+qk.getColumnString(0)+''' and '+es+
                        '`tablename`='''+tn+''' ');
    if qc.RecordCount > 0 then qc.Edit else qc.Append;
    qc.setField('id_module', idm );
    qc.setField('tablename', tn );
    qc.setField('no', qk.RecNo );
    qc.setField('columntype', qk.getColumnString(1) );
    qc.SetField('columnname', qk.getColumnString(0) );
    qc.Post;
    qk.Next;
  end;
  qk.Free;
  qi.Free;
  qc.Free;
  frmimport.txtFilename.Text := '';
  frmimport.CboSheet.Properties.Items.Clear;
  frmimport.CboSheet.Text    := '';
  FrmImport.q_master.Active := false;
  FrmImport.Q_Module.Active := True;
  frmimport.Show;
end;

function TFrmPayroll.getGridByName(nama:string) : TcxGridDBBandedTableView;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := master;
  if nama = 'summary' then result := Summary;
end;
function TFrmPayroll.getQueryByName(nama:string) : TZQuery;
begin
  nama := lowercase(nama);
  if nama = 'master'  then result := q_master;
  if nama = 'summary' then result := q_Summary;
end;
procedure TFrmPayroll.actLookupExecute(Sender: TObject);
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
procedure TFrmPayroll.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Inserting = False then exit;
  q_master.Append;
end;
procedure TFrmPayroll.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmPayroll.actDBGExecute(Sender: TObject);
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

procedure TFrmPayroll.actDeleteExecute(Sender: TObject);
begin
  if TabActive = 'summary' then
  begin
    exit;
  end;

  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Deleting = False then exit;
  if q_master.RecordCount = 0 then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmPayroll.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  if master.OptionsData.Editing = False then exit;
  q_master.Edit;
end;
procedure TFrmPayroll.actRefreshExecute(Sender: TObject);
begin
  if q_master.active then q_master.Refresh;
  if q_summary.Active then q_summary.Refresh;
end;
procedure TFrmPayroll.actSaveExecute(Sender: TObject);
begin
  if isnowedit[strtoint(txtid.text)]  then q_master.Post;
end;
procedure TFrmPayroll.actTabDetail1Execute(Sender: TObject);
begin
  //
end;
procedure TFrmPayroll.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  //GRID_MASTER.SetFocus;
end;
//end action list shortcut

//popup menu
procedure TFrmPayroll.ppExportClick(Sender: TObject);
begin
  if Confirm('Export to Excel ?') = 'YES' then
  begin
    ExportGrid('Excel', getFocusGridCX);
  end;
end;
procedure TFrmPayroll.ppFreezeClick(Sender: TObject);
var
  caption : string;
  x : integer;
begin
  caption := lowercase( Replace(ppFreeze.Caption,'&','') );
  if caption = 'show freeze column' then
  begin
    getFocusGridView.Bands[1].FixedKind := fkLeft;
    getFocusGridView.Bands[1].Visible := true;
    ppFreeze.Caption := '&Hide Freeze Column';
    ppFreeze.Hint    := 'Hide Freeze Column';
  end else
  begin
    for x := 0 to getFocusGridView.Bands[1].ColumnCount - 1 do
    begin
      getFocusGridView.Bands[1].Columns[0].Position.BandIndex := 0;
      getFocusGridView.Bands[0].Columns[getFocusGridView.Bands[0].columncount-1].Position.ColIndex := x;
    end;

    getFocusGridView.Bands[1].FixedKind := fkLeft;
    getFocusGridView.Bands[1].Visible   := false;
    ppFreeze.Caption          := '&Show Freeze Column';
    ppFreeze.Hint             := 'Show Freeze Column';
  end;
end;
procedure TFrmPayroll.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'default');
end;
procedure TFrmPayroll.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'month');
end;
procedure TFrmPayroll.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'year');
end;
procedure TFrmPayroll.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(getFocusGridView, 'relative');
end;
procedure TFrmPayroll.ppFindClick(Sender: TObject);
begin
  if tabactive = 'master' then
  begin
    FindClick(q_master, Master, Tablename[strtoint(txtid.Text)]);
  end;
  if tabactive = 'summary' then
  begin
    FindClick(q_summary, summary, Tablename[37]);
  end;
end;
procedure TFrmPayroll.ppShowALLClick(Sender: TObject);
begin
  if tabactive = 'master' then
  begin
    ShowALLClick(q_master, SQLGrid[strtoint(txtid.Text)]);
  end;
  if tabactive = 'summary' then
  begin
    ShowALLClick(q_summary, SQLGrid[37]);
  end;

end;
//end popup menu

//isnowedit master
procedure TFrmPayroll.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  NewRecordQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  BeforeEditQ(dataset.Tag, Dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  BeforeDeleteQ(Dataset.Tag, dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  AfterDeleteQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  BeforePostQ(DataSet.Tag, Dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  AfterPostQ(DataSet.Tag, dataset.Name);
end;
procedure TFrmPayroll.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  AutoRefreshQuery;
end;
procedure TFrmPayroll.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  AfterCancelQ(DataSet.Tag, dataset.Name);
end;
//end isnowedit master


//procedure query
procedure TFrmPayroll.AfterCancelQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isNowEdit[idm] := False;
  if nama='master'  then afterCancelMaster;
end;
procedure TFrmPayroll.AfterDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterDeleteMaster;
end;
procedure TFrmPayroll.AfterPostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  isnowedit[idm] := False;
  if nama='master'  then afterPostMaster;
end;
procedure TFrmPayroll.ApplicationEvents1Exception(Sender: TObject;
  E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

procedure TFrmPayroll.BeforeDeleteQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  if nama='master'  then beforeDeleteMaster;
end;
procedure TFrmPayroll.BeforeEditQ(idm : integer; nama:string);
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
procedure TFrmPayroll.BeforePostQ(idm : integer; nama:string);
begin
  nama := lowercase(nama);
  nama := replace(nama, 'q_', '');
  cekFieldMustbeFilled(TableName[idm], getQueryByName(nama), getGridByName(nama));
  isiKolomUser(isNewRecord[idm], getQueryByName(nama));
  if nama='master'  then beforePostMaster;
end;
procedure TFrmPayroll.NewRecordQ(idm : integer; nama:string);
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
procedure TFrmPayroll.newRecordMaster;
begin
  AutoRefreshQuery;
  q_master.setField('tdate', serverdate);
end;
procedure TFrmPayroll.beforePostMaster;
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
procedure TFrmPayroll.afterPostMaster;
begin
  q_master.Refresh;
end;
procedure TFrmPayroll.beforeEditMaster;
begin
  //
end;
procedure TFrmPayroll.beforeDeleteMaster;
begin
  if getQValueInteger('select count(*) from t_payroll where '+es+
                      '  employee_id='''+q_master.getFieldString('employee_id')+''' and '+es+
                      ' tdate > '''+q_master.date2sql('tdate')+''' ') > 0 then
  begin
    MsgError('Payroll Already Exist');
    abort;
    exit;
  end;
  //BeforeDeletePayroll(Q_Master);

  ExecuteSQL('delete from t_transferbank where '+gets('payroll_id', Q_Master)+' ');
  ExecuteSQL('delete from t_summary where '+gets('payroll_id', Q_Master)+' ');
  BeforeDeletePayroll(Q_Master);
  ExecuteSQL('delete from t_payroll where '+gets('payroll_id', Q_Master)+' ');
end;
procedure TFrmPayroll.afterDeleteMaster;
begin
  //
end;
procedure TFrmPayroll.afterCancelMaster;
begin
  //
end;
//end master

procedure TFrmPayroll.MASTERemployee_idPropertiesPopup(Sender: TObject);
begin
  LookupADEmployee_id;
end;
procedure TFrmPayroll.LookupADEmployee_id;
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
  Q.Query('select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'order by name ' );
  if LookupQuery('Choose Employee', Q, 800, False, '', 'm_employee') then
  begin
    Q_Master.SetMultiFieldQ('employee_id,nip,company_id,division_id,position_id,'+
                            'department_id,unit_id,workarea_id,grade_id,'+
                            'employeestatus_id', Q );
  end;
  Q.free;
end;

procedure TFrmPayroll.N1CreateTHR1Click(Sender: TObject);
begin
  processPayroll;
end;

procedure TFrmPayroll.processPayroll;
var
  emp, ql, qd: tzQuery;
  sdate, payrolldate, dt2, dt : tdatetime;
  kolom, syarat, s, f, levelID : string;
  //idtype, mg : string;
  y,m,d: word;
begin
  ql    := createquery;
  qd    := createQuery;
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_payrolldate set tdate = null');
  qd.query('select * from m_payrolldate');
  qd.AfterCancel := QDAfterPost;
  qd.AfterDelete := QDAfterPost;
  qd.AfterPost   := QDAfterPost;
  qd.BeforeEdit  := QDBeforeEdit;
  qd.OnNewRecord := QDBeforeEdit;
  //dbg('x');
  while not qd.eof do
  begin
    qd.Edit;
    dt := startdate;
    dt := adddays(dt, qd.getFieldInteger('comp_month'));
    decodedate(dt,y,m,d);
    d := qd.getFieldInteger('comp_date');
    if d = -1 then
    begin
      dt2 := encodedate(y,m,1);
      dt2 := addmonths(dt2,1);
      dt2 := adddays(dt2,-1);
      qd.setField('tdate',dt2);
    end else
    begin
      dt2 := encodedate(y,m,d);
      qd.setField('tdate',dt2);
    end;
    qd.next;
  end;
  //dbg('1');

//  if LowerCase(levelTipe)='mingguan' then
//  begin
//    executeSQL('update m_payrolldate set tdate='''+date2sql(startdate)+''' where payrollfield=''startdate'' ');
//    executeSQL('update m_payrolldate set tdate='''+date2sql(enddate)+''' where payrollfield in (''tdate'', ''enddate'') ');
//  end;

  qd.Refresh;
  if LookupQuery('Setting Payroll Date', qd, 800, true, 'comp_month,comp_date,payrollfield', '', True, True) = false then
  begin
    qd.Free;
    ql.free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('2');
  if isNowEditDate then qd.Post;

  s := '';
  if InputQuery('Cari Nama Employee', 'Search', s) = False then
  begin
    qd.Free;
    ql.free;
    MsgError('CANCEL');
    exit;
  end;

  emp   := createQuery;
  kolom := '*';
  syarat:= ' (0=0) ';
  emp.Query('select * from s_lookup where tablename=''t_payroll'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  payrolldate := getQValue('select tdate from m_payrolldate where payrollfield=''enddate'' ');
  sdate       := getQValue('select tdate from m_payrolldate where payrollfield=''startdate'' ');
  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');

  {idtype := '';
  if confirm('Ingin Isi ID Type ?') = 'YES' then
  begin
    InputQuery('Input ID Type', 'ID Type', idtype);
  end;

  mg := ' (0=0) ';
  if LowerCase(levelTipe)='mingguan' then
  begin
    mg := ' (division_id=3) ';
  end else
  begin
    mg := ' (division_id<>3) ';
  end;}

  if confirm('Pilih Data ?') = 'YES' then
  begin
    ql.Query('select p.employee_id, p.nip, p.name, '+es+
          'p.employeestatus_id, p.department_id, p.position_id '+es+
          'from m_employee p '+es+
          'where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' )  '+es+
             'order by nip');
    if LookupQuery('Choose Employee', ql, 800, True, '', 'm_employee') =False then
    begin
      //dbg('4');
      emp.free;
      qd.Free;
      ql.free;
      MsgError('CANCEL');
      exit;
    end;

    f := getColumnFromFilter(ql, 'employee_id');
    f := 'employee_id in '+f+'';
  end else
  begin
    f := '(0=0)';
  end;
  //dbg('5');
  ShowProgressbar;

  f := 'select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             ' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and '+es+
             ' ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or resigndate >= '''+date2sql(sdate)+''' '+es+
             ' )  '+es+
             'and '+f+' '+es+
             'order by nip';
  emp.Query(f);

  emp.First;
  while not emp.eof do
  begin
    setProgressbar('Processing '+emp.getFieldString('nip')+
                   ' '+emp.getFieldString('name')+
                   ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                   ', '+inttostr(emp.RecNo)+'/'+inttostr(emp.recordcount),
                   (emp.recno * 100) div emp.recordcount);
    if getQValueInteger('select count(*) from t_payroll '+es+
                        'where '+gets('employee_id', emp)+' and '+es+
                        'tdate > '''+date2sql(payrolldate)+''' ') = 0 then
    begin
      createPayroll(payrolldate,qd,emp,'');
    end else
    begin
      MsgError('Employee : '+emp.getFieldString('name')+', Already Have Newest Payroll');
    end;
    emp.next;
  end;
  //dbg('6');
  emp.free;
  qd.Free;
  ql.free;
//  if LowerCase(levelTipe)='mingguan' then
//  begin
//    ReloadClick(' (level in (''Mingguan'') ) ');
//  end else
//  begin
//    ReloadClick(' (level in (''Non Manager'', ''Manager'') ) ');
//  end;

  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;

procedure TFrmPayroll.N2CreatePayrollManager1Click(Sender: TObject);
begin
  processPayroll;
end;

procedure TFrmPayroll.N2CreatePayrollSetahun1Click(Sender: TObject);
var
  emp, qd: tzQuery;
  dt2, payrolldate, dt : tdatetime;
  kolom, syarat, s : string;
  y, m, d, b1,b2, no, total, x, y1,m1,d1, y2,m2,d2 : word;
begin
  ExecuteSQL('flush tables');
  ExecuteSQL('update m_payrolldate set tdate = null');

  dt := startdate;
  DecodeDate(startdate, y1,m1,d1);
  DecodeDate(enddate, y2,m2,d2);
  b2    := (y2*12) + m2;
  b1    := (y1*12) + m1;
  total := b2 - b1;
  s     := '';
  if InputQuery('Cari Nama Employee', 'Search', s) = False then exit;

  qd    := createQuery;
  emp   := createQuery;
  kolom := '*';
  syarat:= ' (0=0) ';
  emp.Query('select * from s_lookup where tablename=''t_payroll'' and columnname=''employee_id'' ');
  if emp.RecordCount > 0 then
  begin
    kolom := emp.getFieldString('kolom');
    syarat:= emp.getFieldString('syarat');
  end;

  payrolldate := enddate;
  ExecuteSQL('call autoupdateemployee(''' + date2sql(payrolldate) + ''');');
  emp.Query('select '+kolom+' from m_employee where '+getSecurity(txtid.Text)+' and name like ''%'+s+'%'' '+es+
             'and '+syarat+' '+es+
             'and joindate <= '''+date2sql(payrolldate)+''' and   ( '+es+
             'isnull(resigndate) or resigndate<= ''1920-01-01'' or '+es+
             'year(resigndate)=year('''+date2sql(payrolldate)+''') ) '+es+
             'order by name');
  pesan(emp.SQL.Text);
  if LookupQuery('Choose Employee', emp, 800, True, '', 'm_employee') =False then
  begin
    //dbg('4');
    emp.free;
    qd.Free;
    MsgError('CANCEL');
    exit;
  end;
  //dbg('5');
  ShowProgressbar;
  no := 1;
  for x := 0 to total do
  begin
    qd.query('select * from m_payrolldate');
    qd.AfterCancel := QDAfterPost;
    qd.AfterDelete := QDAfterPost;
    qd.AfterPost   := QDAfterPost;
    qd.BeforeEdit  := QDBeforeEdit;
    qd.OnNewRecord := QDBeforeEdit;
    //dbg('x');
    while not qd.eof do
    begin
      qd.Edit;
      //dt := startdate;
      dt := addMonths(startdate, x);
      dt := addMonths(dt, qd.getFieldInteger('comp_month'));
      decodedate(dt,y,m,d);
      d := qd.getFieldInteger('comp_date');
      if d = -1 then
      begin
        dt2 := encodedate(y,m,1);
        dt2 := addmonths(dt2,1);
        dt2 := adddays(dt2,-1);
        qd.setField('tdate',dt2);
      end else
      begin
        dt2 := encodedate(y,m,d);
        qd.setField('tdate',dt2);
      end;
      qd.next;
    end;
    if isNowEditDate then qd.Post;
    //LookupQuery('Setting Payroll Date', qd, 800, true, 'comp_month,comp_date,payrollfield', 'm_payrolldate', True, True);
    payrolldate := getQValue('select tdate from m_payrolldate where payrollfield=''tdate'' ');
    //ShowMessage(date2sql(payrolldate));
    emp.First;      
    while not emp.eof do
    begin
      setProgressbar('Processing '+emp.getFieldString('nip')+
                     ' '+emp.getFieldString('name')+
                     ', '+FormatDateTime('dd MMM yyyy', payrolldate)+
                     ', '+inttostr(no)+'/'+inttostr(emp.recordcount*total),
                     (no * 100) div (emp.recordcount*total) );
      if formatdatetime('yyyy-mm-01', emp.getFieldDateTime('joindate'))
         <= formatdatetime('yyyy-mm-01',payrolldate)  then
      begin
        if emp.isNotNull('resigndate') then
        begin
          if formatdatetime('yyyy-mm-01', emp.getFieldDateTime('resigndate'))
             >= formatdatetime('yyyy-mm-01',payrolldate)  then createPayroll(payrolldate,qd,emp,'');
        end else
        begin
          createPayroll(payrolldate,qd,emp,'');
        end;
      end;
      no := no + 1;
      emp.next;
    end;
  end;
  //dbg('6');
  emp.free;
  qd.Free;
  ReloadClick;
  HideProgressbar;
  msgok('Finished');
end;
procedure TFrmPayroll.QDAfterPost(DataSet: TDataSet);
begin
  isNowEditDate := False;
end;
procedure TFrmPayroll.QDBeforeEdit(DataSet: TDataSet);
begin
  isNowEditDate := True;
end;

procedure TFrmPayroll.N1PayrolSlip1Click(Sender: TObject);
var
  fn, pwd :string;
  body, smtpPass, smtpUser, smtpHost : string;
  smtpPort :Integer;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_laporan.Active  := False;
  q_laporan1.Active := False;
  q_laporan2.Active := False;

  if LookupQuery('Choose Payroll', q_master, 800, True, '', 't_payroll' ) = false then exit;
  q_master.DisableControls;
  showprogressbar;
  smtpHost := getQValueString('select value from s_setting where name=''smtphost'' ');
  smtpPort := getQValueInteger('select value from s_setting where name=''smtpport'' ');
  smtpUser := getQValueString('select value from s_setting where name=''smtpusername'' ');
  smtpPass := getQValueString('select value from s_setting where name=''smtppassword'' ');

  SetProgressbar('Processing ', 0 );
  q_master.First;
  while not q_master.Eof do
  begin

    q_laporan.Query('select p.*, e.name as employeename,'+es+
                    'e.email as email, e.password, '+es+
                    'c.name as companyname, c.logo, '+es+
                    'd.name as divisionname,'+es+
                    'dp.name as departmentname,'+es+
                    'w.name as workareaname,'+es+
                    'po.name as positionname,'+es+
                    'l.name as levelname,'+es+
                    'es.name as employeestatusname '+es+
                    'from t_payroll p '+es+
                    'left join m_employee e on p.employee_id = e.employee_id '+es+
                    'left join m_company c on p.company_id = c.company_id '+es+
                    'left join m_division d on p.division_id = d.division_id '+es+
                    'left join m_department dp on p.department_id = dp.department_id '+es+
                    'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                    'left join m_position po on p.position_id = po.position_id '+es+
                    'left join m_level l on p.level_id = l.level_id '+es+
                    'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                    'where p.payroll_id ='''+q_master.getFieldString('payroll_id')+'''  '+es+
                    'order by p.nip, p.tdate');
    if q_laporan.RecordCount > 0 then
    begin
      q_laporan1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''D'' and s.sliporder > 0 '+es+
                    'and pd.amount <> 0 '+es+
                    'group by pd.payroll_id, s.slipname');
      q_laporan2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                    'from t_payroll_detail pd '+es+
                    'left join m_salary s on pd.salary_id = s.salary_id '+es+
                    'where s.acc=''C'' and s.sliporder > 0 '+es+
                    'and pd.amount <> 0 '+es+
                    'group by pd.payroll_id, s.slipname');
        fn := '';
        fn := Extractfilepath(Application.exename)+'\';
        fn := fn + q_laporan.getFieldString('nip')+'-';
        fn := fn + FormatDateTime('yyyymm', q_master.getFieldDateTime('tdate') );
        fn := fn + '.pdf';
        pwd:= q_laporan.getFieldString('password');
        pwd:= Decrypt(pwd);
        exportReporttoPDF(Fr_Report,  fn, pwd);
        if q_laporan.getFieldString('email') <> '' then
        begin
          {body := 'Berikut Kami kirimkan PAYROLL SLIP Periode '+FormatDateTime('mmm yyyy', q_master.getFieldDateTime('tdate') )+'. '+es+
                  ''+es+
                  'Password File : '+pwd+es+
                  ''+es+
                  'Terlampir.';}
          body := getQValueString('select value from s_setting where setting_id=''13'' ');
          body := Replace(body, '$periode', FormatDateTime('mmm yyyy', q_master.getFieldDateTime('tdate') ) );
          body := Replace(body, '$password', pwd );
          SendEmail(q_laporan.getFieldString('email'),
                    'Payroll Slip '+
                      FormatDateTime('mmm yyyy', q_master.getFieldDateTime('tdate') ) + ' '+
                      uppercase(q_laporan.getFieldString('companyname')),
                    body, fn, smtpHost, smtpUser, smtpPass, smtpPort);
        end;
        DeleteFile(fn);
    end;
    setprogressbardefault(q_master);
    q_master.Next;
  end;
  FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
  q_master.EnableControls;
  hideprogressbar;
  MsgOK('Finished');
end;

procedure TFrmPayroll.N1PreviewPayrollSlip1Click(Sender: TObject);
var
  pwd, s, fn :string;
  qm : tzquery;
  isexport: boolean;
begin

  isexport := false;
  if confirm('Export PDF?') = 'YES' then isexport := true;
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm_master.Active  := False;
  QM_Detail1.Active := False;
  QM_Detail2.Active := False;

  qm := createquery;
  qm.Query('select p.payroll_id, p.nip, p.employee_id, p.startdate, p.enddate, '+es+
          'p.employeestatus_id, p.department_id, p.position_id '+es+
          'from t_payroll p '+es+
          'left join m_department d on p.department_id=d.department_id '+es+
          'left join m_employee e on p.employee_id=e.employee_id '+es+
          'where p.company_id=1 and '+es+
          'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' '+es+
          'order by e.nip');
  //pesan(qm.SQL.Text);

  if LookupQuery('Choose Data', qm, 800, True, '', 't_payroll' ) = false then exit;

  s := getColumnFromFilter(qm, 'payroll_id');
  QS_SAB.Query('select p.* '+es+
               'from v_summary p  '+es+
               'left join m_company c on p.company_id = c.company_id '+es+
               'left join m_department dp on p.department_id = dp.department_id '+es+
               'left join m_position po on p.position_id = po.position_id '+es+
               'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
               'WHERE p.company_id=1 and p.payroll_id in '+s+' ');

  if QS_SAB.RecordCount > 0 then
  begin
    if isexport then
    begin
      qm.First;
      //while not qm.Eof do
      //begin
         QS_SAB.Query('select p.* '+es+
               'from v_summary p  '+es+
               'left join m_company c on p.company_id = c.company_id '+es+
               'left join m_department dp on p.department_id = dp.department_id '+es+
               'left join m_position po on p.position_id = po.position_id '+es+
               'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
               'WHERE p.company_id=1 and p.payroll_id=''22'' ');
               //'+qm.getFieldString('payroll_id')+'
         if QS_SAB.RecordCount>0 then
         begin
            fn := '';
            fn := Extractfilepath(Application.exename)+'\Slip\Slip_';
            fn := fn + QS_SAB.getFieldString('nip')+'_';
            fn := fn + FormatDateTime('yyyymm', QS_SAB.getFieldDateTime('tdate') );
            fn := fn + '.pdf';
            pwd:= qs_sab.getFieldString('no_bpjstk');
            if pwd='' then pwd := '0302';
            pwd:= LeftStr(pwd,4);
            pwd:= leftstr(pwd,2) + replace(qs_sab.date2sql('dob'), '-', '') + rightstr(pwd, 2);
            //exportReporttoPDF(FR_SAB,  fn, pwd);
            FR_SAB.ShowReport;
         end;
        //qm.Next;
      //end;

    end else
    begin
      FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
      FR_SAB.ShowReport;
    end;

    //exportReporttoPDF(Fr_Report,  fn, pwd);
  end else
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;

procedure TFrmPayroll.N2PreviewPayrollSlip1Click(Sender: TObject);
var
  s :string;
  qm : tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_laporan.Active  := False;
  q_laporan1.Active := False;
  q_laporan2.Active := False;
  qm := createquery;
  //qm.Query('select * from t_payroll where tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' ');
  qm.Query('select payroll_id, employee_id, nip, division_id, department_id, workarea_id, '+es+
           'position_id, level_id, employeestatus_id from t_payroll where '+es+
           'level_id not in (10, 11, 12, 13) and '+es+
           'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' and '+es+
           'nip in ( select nip from t_slip where print=0 and '+es+
           '         tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' ) ');

  pesan(qm.SQL.Text);

  if LookupQuery('Choose Payroll', qm, 800, True, '', 't_payroll' ) = false then exit;
  //q_master.DisableControls;
  s := getColumnFromFilter(qm, 'payroll_id');
  q_laporan.Query('select p.*, e.name as employeename,'+es+
                  'e.email as email, e.password, '+es+
                  'c.name as companyname, case p.department_id when 20 then c.logo2 else c.logo end as logo, '+es+
                  'd.name as divisionname,'+es+
                  'dp.name as departmentname,'+es+
                  'w.name as workareaname,'+es+
                  'po.name as positionname,'+es+
                  'l.name as levelname,'+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id = l.level_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id in '+s+' '+es+
                  'order by p.tdate, dp.name, e.name');
  if q_laporan.RecordCount > 0 then
  begin
    q_laporan1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''D'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    {q_laporan1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount, s.sliporder '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''D'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'union '+es+
                  'select p.payroll_id, ''THR'' as slipname, b.amount, ''17'' as sliporder '+es+
                  'from t_payroll p '+es+
                  'inner join ( '+es+
                  'select employee_id, sum(takehomepay) as amount '+es+
                  'from t_thr '+es+
                  'where tdate between '''+date2sql(startdate)+''' and '''+date2sql(enddate)+''' '+es+
                  'group by employee_id '+es+
                  ') b on p.employee_id=b.employee_id '+es+
                  'where tdate between '''+date2sql(startdate)+''' and '''+date2sql(enddate)+''' '+es+
                  'order by payroll_id, convert(sliporder, signed)');}
    //pesan(q_laporan1.SQL.Text);
    q_laporan2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''C'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    FR_Report.ShowReport;
  end else
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;

procedure TFrmPayroll.importdataemail1Click(Sender: TObject);
var
  s, sheet, namapt, email, fn, dtsql, tn, eid : string;
  x, joingaji : integer;
  ts : tstringlist;
  qe, qk : tzquery;
begin
  if confirm('Do You Want to Import Email ?') <> 'YES' then exit;
  fn := '';
  fn := FileOpenDialog('Excel Files 2007 (*.xlsx)|*.xlsx|Excel Files 2003 (*.xls)|*.xls');
  dbg(fn);
  if FileExists(fn) = False then exit;
  dbg('1');
  if ConnectExcel(fn) = false then exit;
  dbg('2');
  ts := tstringlist.Create;
  ts.clear;
  GetTableExcel(ts);
  s := '';
  for x := 0 to ts.Count -1 do
  begin
    s := s + ts.Strings[x] + ',';
  end;
  s := HilangkanKomaBelakang(s);
  sheet := ComboForm('Choose Sheet Import', 'combobox', s);

  if sheet = '' then
  begin
    DisconnetExcel;
    ts.Free;
    MsgError('Please Choose Sheet Import');
    exit;
  end;
  dbg('3');
  tn := getQValueString('select tablename from s_sheet where name='''+sheet+''' ');
  if tn = '' then
  begin
    DisconnetExcel;
    ts.Free;
    MsgError('This Sheet is Not Allowed to Import');
    exit;
  end;
  dbg('4');
  qe := createquery;
  qe.QueryExcel('select * from ['+sheet+']'); //select dari excel
  if (qe.isFieldExist('namapt') = False) or (qe.isFieldExist('email') = False) then
  begin
    MsgError('Pastikan Kolom (namapt,email) ada semua di Excel');
    qe.Free;
    ts.Free;
    DisconnetExcel;
    exit;
  end;

  if LookupQuery('Choose Data From Excel', qe, 800, true, '', '',false) =false then
  begin
    qe.Free;
    ts.Free;
    DisconnetExcel;
    exit;
  end;

  dbg('5');
  ShowProgressbar;
  qk := createquery;
  q_master.DisableControls;
  qe.First;
  while not qe.Eof do
  begin
    SetProgressbarDefault(qe);
    namapt := Replace(qe.getFieldString('namapt'), '''', '');
    email  := Replace(qe.getFieldString('email'), '''', '');
    qk.Query('select * from dataemail where '+
             'namapt='''+namapt+''' and email='''+email+''' ');
    if qk.RecordCount > 0 then qk.Edit else qk.Append;
    qk.setField('namapt', namapt);
    qk.setField('email', email);
    qk.Post;
    qe.Next;
  end;

  qe.Free;
  qk.Free;
  ts.Free;
  DisconnetExcel;
  HideProgressbar;
  MsgOK('Finished');
end;
procedure TFrmPayroll.kirimemailproposal1Click(Sender: TObject);
var
  qe : tzquery;
  body, subject, fn, email, smtpPass, smtpUser, smtpHost : string;
  smtpPort :Integer;
begin
  qe := createquery;
  qe.Query('select * from dataemail where sudah=0 order by id');
  if LookupQuery('Choose Payroll', qe, 800, True, '', 't_payroll' ) = false then
  begin
    qe.Free;
    exit;
  end;

  showprogressbar;
  smtpHost := getQValueString('select value from s_setting where name=''smtphost'' ');
  smtpPort := getQValueInteger('select value from s_setting where name=''smtpport'' ');
  smtpUser := getQValueString('select value from s_setting where name=''smtpusername'' ');
  smtpPass := getQValueString('select value from s_setting where name=''smtppassword'' ');

  subject := 'Proposal Penawaran Payroll Software';
  body    := 'Dear HRD'+es+
             ''+es+
             'Kami dari Tim Developer AS Payroll ingin menawarkan Proposal Payroll Software.'+es+
             'Kami siap presentasikan Demo Payroll Software kami di kantor anda.'+es+
             ''+es+
             'Jika ada yang ingin ditanyakan dapat hubungi kami.'+es+
             ''+es+
             'Best Regards'+es+
             'ASCorpindo Media'+es+
             '0812 8900 7233';
  qe.First;
  while not qe.Eof do
  begin
    setprogressbardefault(qe);
    qe.Edit;
    email := trim(qe.getFieldString('email'));
    fn := '';
    fn := Extractfilepath(Application.exename)+'\';
    fn := fn + 'PROPOSAL_SOFTWARE_PAYROLL_ASCorpindo_Media.pdf';
    if email <> '' then
    begin
      qe.setField('sudah', '0');
      if SendEmail(email, subject, body, fn, smtpHost, smtpUser, smtpPass, smtpPort) then qe.setField('sudah', '1');
    end;
    qe.Post;
    qe.Next;
  end;
  qe.free;
  hideprogressbar;
  MsgOK('Finished');
end;
procedure TFrmPayroll.N3ReportBPJSTenagaKerja1Click(Sender: TObject);
var
  param1, s :string;
  ts2, ts1 : tstringlist;
  x : integer;
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  Q_RTK.Active      := False;
  param1            := trim(getQValueString('select value from s_reportparam '+es+
                        'where name=''REPORT BPJS Tenaga Kerja'' and '+es+
                        'paramname=''param 1'' '));
  ts1 := tstringlist.Create;
  ts2 := tstringlist.Create;
  ts2.Clear;
  ts1.Clear;
  if param1 = '' then
  begin
    param1 := ' ''0.89%'' as jkkrate, ''0.30%'' as jkmrate, ''3.70%'' as jhtcomprate, '+es+
              ' ''2.00%'' as jhtemprate, 2730000 as umr, ';
  end else
  begin
    //jkkrate:0.54%;jkmrate:0.30%;jhtcomprate:3.70%;jhtemprate:2.00%;umr:2730000
    String2StringList(ts1, param1, ';');
    param1 := '';
    for x := 0 to ts1.Count-1 do
    begin
      String2StringList(ts2, ts1.Strings[x], ':');
      param1 := param1 + ' '''+ts2.Strings[1]+''' as '+ts2.Strings[0]+', ';
    end;
  end;

  ts1.Clear;
  ts2.Clear;

  {if LookupQuery('Choose Payroll', q_master, 800, True, '', 't_payroll' ) = false then exit;
  s := getColumnFromFilter(q_master, 'payroll_id');}
  Q_RTK.Query('select p.payroll_id, p.tdate, p.employee_id, p.nip, e.name as employeename, '+es+
              'p.basejamsostek, p.jkm, p.jkk, p.jhtcompany, p.jhtemployee, '+es+
              '(p.jkm+p.jkk+p.jhtcompany) as totalbayar, '+es+
              '(p.jkm+p.jkk+p.jhtcompany+p.jhtemployee) as total, '+es+
              'p.basejamsostek1, p.jkm1, p.jkk1, p.jhtcompany1, p.jhtemployee1, '+es+
              '(p.jkm1+p.jkk1+p.jhtcompany1) as totalbayar1, '+es+
              '(p.jkm1+p.jkk1+p.jhtcompany1+p.jhtemployee1) as total1, '+es+
              '(p.jkm1 - p.jkm) as selisihjkm, (p.jkk1 - p.jkk) as selisihjkk, '+es+
              '(p.jhtcompany1 - p.jhtcompany) as selisihjhtcompany, '+es+
              '(p.jhtemployee1 - p.jhtemployee) as selisihjhtemployee, '+es+param1+es+
              'c.name as companyname, d.name as divisionname, w.name as workareaname, '+es+
              'po.name as positionname, g.name as gradename, es.name as employeestatusname '+es+
              'from t_payroll p '+es+
              'left join m_employee e on p.employee_id = e.employee_id '+es+
              'left join m_company c on p.company_id = c.company_id '+es+
              'left join m_division d on p.division_id = d.division_id '+es+
              'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
              'left join m_position po on p.position_id = po.position_id '+es+
              'left join m_grade g on p.grade_id = g.grade_id '+es+
              'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
              'where p.tdate >= '''+date2sql(startdate)+''' and p.tdate <= '''+date2sql(enddate)+''' '+es+
              'and p.jamsostek_id in (2,9) and '+getsecurity(txtid.Text, '*', 'p.')+' '+es+
              'order by p.nip ');

  pesan(q_rtk.SQL.Text);
  if Q_RTK.RecordCount > 0 then
  begin
    Fr_RTK.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;
end;


procedure TFrmPayroll.N4IsDebug1Click(Sender: TObject);
begin
  if isDebug then
  begin
    isdebug:=False;
    msgok('Debug OFF');
  end else
  begin
    isdebug:=true;
    msgok('Debug ON');
  end;
end;

procedure TFrmPayroll.N4ReportBPJSKesehatan1Click(Sender: TObject);
var
  param1, s :string;
  ts2, ts1 : tstringlist;
  x : integer;
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  Q_RKS.Active      := False;
  param1            := trim(getQValueString('select value from s_reportparam '+es+
                        'where name=''REPORT BPJS Kesehatan'' and '+es+
                        'paramname=''param 1'' '));
  ts1 := tstringlist.Create;
  ts2 := tstringlist.Create;
  ts2.Clear;
  ts1.Clear;
  if param1 = '' then
  begin
    param1 := ' ''4%'' as jkncomprate, ''1%'' as jknemprate, 2362500 as ptkpk10, '+es+
              ' 4000000 as ptkpk15, 8000000 as ptkpk20, ';
  end else
  begin
    //jkncomprate:4%;jknemprate:1%;ptkpk10:2362500;ptkpk15:3543750;ptkpk20:4725000
    String2StringList(ts1, param1, ';');
    param1 := '';
    for x := 0 to ts1.Count-1 do
    begin
      String2StringList(ts2, ts1.Strings[x], ':');
      param1 := param1 + ' '''+ts2.Strings[1]+''' as '+ts2.Strings[0]+', ';
    end;
  end;

  ts1.Clear;
  ts2.Clear;

  Q_RKS.Query('select p.payroll_id, p.tdate, p.employee_id, p.nip, e.name as employeename, '+es+
              'p.basejamsostek, p.jkn, p.jknemployee, (p.jkn+p.jknemployee) as totaliuran, '+es+
              'p.basejamsostek1, p.jkn1, p.jknemployee1, (p.jkn1+p.jknemployee1) as totaliuran1, '+es+
              '(p.jkn1-p.jkn) as selisihjkn, (p.jknemployee1-p.jknemployee) as selisihjknemployee, '+es+
              '( (p.jkn1+p.jknemployee1)-(p.jkn+p.jknemployee) ) as selisihtotaliuran, '+es+
              ' '+param1+' '+es+
              'c.name as companyname, d.name as divisionname, w.name as workareaname, '+es+
              'po.name as positionname, g.name as gradename, es.name as employeestatusname '+es+
              'from t_payroll p '+es+
              'left join m_employee e on p.employee_id = e.employee_id '+es+
              'left join m_company c on p.company_id = c.company_id '+es+
              'left join m_division d on p.division_id = d.division_id '+es+
              'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
              'left join m_position po on p.position_id = po.position_id '+es+
              'left join m_grade g on p.grade_id = g.grade_id '+es+
              'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
              'where p.tdate >= '''+date2sql(startdate)+''' and p.tdate <= '''+date2sql(enddate)+''' '+es+
              'and p.jamsostek_id in (2,8) and '+getsecurity(txtid.Text, '*', 'p.')+' '+es+
              'order by p.nip');
  pesan(Q_RKS.SQL.Text);
  if Q_RKS.RecordCount > 0 then
  begin
    Fr_RKS.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;
end;


procedure TFrmPayroll.N5ReportPayroll1Click(Sender: TObject);
var
  ql : tzquery;
  s : string;
begin
  Q_RPayroll.Active := False;
  ql := Createquery;
  ql.Query('select * from m_level where '+getSecurity(txtid.Text, 'level_id')+' order by name');
  if LookupQuery('Choose Level', ql, 800, True, '', 'm_level') =False then
  begin
    ql.Free;
    exit;
  end;
  s := getColumnFromFilter(ql, 'level_id');
  ql.Free;
  Q_RPayroll.Query('select p.payroll_id, p.tdate, p.level_id, p.employee_id, p.nip, '+es+
                   'e.name as employeename, p.takehomepay, l.name as levelname, '+es+
                   'c.name as companyname, d.name as divisionname, w.name as workareaname, '+es+
                   'po.name as positionname, g.name as gradename, es.name as employeestatusname, '+es+
                   'db.name as paramname1, db.value as paramvalue1, '+es+
                   'dk.name as paramname2, dk.value as paramvalue2, '+es+
                   'ds.name as paramname3, ds.value as paramvalue3 '+es+
                   'from t_payroll p '+es+
                   'left join m_employee e on p.employee_id = e.employee_id '+es+
                   'left join m_company c on p.company_id = c.company_id '+es+
                   'left join m_division d on p.division_id = d.division_id '+es+
                   'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                   'left join m_position po on p.position_id = po.position_id '+es+
                   'left join m_grade g on p.grade_id = g.grade_id '+es+
                   'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                   'left join m_level l on p.level_id = l.level_id '+es+
                   'cross join (select * from s_reportparam where reportname=''report payroll'' and paramname=''param1'' ) db '+es+
                   'cross join (select * from s_reportparam where reportname=''report payroll'' and paramname=''param2'' ) dk '+es+
                   'cross join (select * from s_reportparam where reportname=''report payroll'' and paramname=''param3'' ) ds '+es+
                   'where p.tdate >= '''+date2sql(startdate)+''' and '+es+
                   'p.tdate <= '''+date2sql(enddate)+''' and '+es+
                   'p.level_id in '+s+' and '+getSecurity(txtid.Text, '*', 'p.')+' '+es+
                   'order by l.name, p.nip');
  pesan(Q_RPayroll.SQL.Text);
  if Q_RPayroll.RecordCount > 0 then
  begin
    Fr_RPayroll.ShowReport;
  end else
  begin
    MsgError('No Data to Print');
  end;

end;
procedure TFrmPayroll.N6CreatePayrollMingguan1Click(Sender: TObject);
begin
  processPayroll;
end;

procedure TFrmPayroll.N6PrintLabel1Click(Sender: TObject);
var
  s :string;
  qm: tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  q_label.Active  := False;
  qm := createquery;
  //qm.Query('select * from t_payroll where tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' ');
  qm.Query('select payroll_id, employee_id, nip, division_id, department_id, workarea_id, '+es+
           'position_id, level_id, employeestatus_id from t_payroll where '+es+
           'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' and '+es+
           'nip in ( select nip from t_slip where print=0 and '+es+
           '         tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' ) ');

  if LookupQuery('Choose Payroll', qm, 800, True, '', 't_payroll' ) = false then exit;
  //q_master.DisableControls;
  s := getColumnFromFilter(qm, 'payroll_id');
  q_label.Query('select p.payroll_id, p.employee_id, p.nip, e.name as employeename, '+es+
                  'p.tdate,  '+es+
                  'd.name as divisionname, '+es+
                  'dp.code as departmentname, '+es+
                  'w.name as workareaname, '+es+
                  'po.name as positionname, '+es+
                  'l.name as levelname, '+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id = l.level_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id in '+s+' '+es+
                  'order by p.tdate, p.division_id, dp.code, e.name  ');
  if q_label.RecordCount > 0 then
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    Fr_label.ShowReport;
  end else
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    //q_master.EnableControls;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;

procedure TFrmPayroll.BeforeDeletePayroll(q:tzquery);
begin
  DeleteLoan(Q);
  ExecuteSQL('delete from t_payroll_detail where '+gets('payroll_id', Q)+' ');
  DeleteAllDataDetail(txtID.Text, Q.getFieldString('payroll_id'));
end;
procedure TFrmPayroll.N7DeleteAllDataPayroll1Click(Sender: TObject);
var
  id, psn : string;
  q : tzquery;
begin
  if q_master.RecordCount = 0 then exit;

  if confirm('Do You Want Delete '+q_master.RecordCountStr+' Data Payroll ?') <> 'YES' then exit;


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
      ExecuteSQL('delete from t_transferbank where '+gets('payroll_id', Q)+' ');
      ExecuteSQL('delete from t_summary where '+gets('payroll_id', Q)+' ');
      BeforeDeletePayroll(q);
      ExecuteSQL('delete from t_payroll where '+gets('payroll_id', Q)+' ');
    end;
    q.Next;
  end;
  q_master.Refresh;
  q.Free;
  HideProgressbar;
  if psn<> '' then
  begin
    MsgError('Already Newest Payroll : ' +psn);
  end;
end;

procedure TFrmPayroll.N7PreviewPayrollSlipManager1Click(Sender: TObject);
var
  s :string;
  qm : tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm_master.Active  := False;
  QM_Detail1.Active := False;
  QM_Detail2.Active := False;

  qm := createquery;
  qm.Query('select p.payroll_id, p.nip, p.employee_id, p.startdate, p.enddate, '+es+
          'p.employeestatus_id, p.department_id, p.position_id '+es+
          'from t_payroll p '+es+
          'left join m_department d on p.department_id=d.department_id '+es+
          'left join m_employee e on p.employee_id=e.employee_id '+es+
          'where p.company_id=2 and '+es+
          'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' '+es+
          'order by e.nip');
  //pesan(qm.SQL.Text);

  if LookupQuery('Choose Data', qm, 800, True, '', 't_payroll' ) = false then exit;

  s := getColumnFromFilter(qm, 'payroll_id');
  QS_NSA.Query('select p.* '+es+
               'from v_summary p  '+es+
               'left join m_company c on p.company_id = c.company_id '+es+
               'left join m_department dp on p.department_id = dp.department_id '+es+
               'left join m_position po on p.position_id = po.position_id '+es+
               'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
               'WHERE p.company_id=2 and p.payroll_id in '+s+' ');

  if QS_SAB.RecordCount > 0 then
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    FR_NSA.ShowReport;
  end else
  begin
    FrmLookup.VIEW_LOOKUP.DataController.Filter.Clear;
    MsgError('No Data to Print');
  end;
  qm.Free;
end;

procedure TFrmPayroll.N2TotalPembayaran1Click(Sender: TObject);
begin
  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  QM_Total.Active  := False;

  QM_Total.Query('select *  '+es+
          'from v_summary_total '+es+
          'where '+es+
          'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' '+es+
          'order by tdate');
  FR_Total.ShowReport;
end;

procedure TFrmPayroll.N8ExportPayrollSlipNonManager1Click(Sender: TObject);
begin
  ExportPayrollSlip('Non Manager');
end;

procedure TFrmPayroll.N8ExportPayrollSlipManager1Click(Sender: TObject);
begin
  ExportPayrollSlip('Manager');
end;

procedure TFrmPayroll.N9ExportPayrollSlipMingguan1Click(Sender: TObject);
begin
  ExportPayrollSlip('Mingguan');
end;


procedure TFrmPayroll.ExportPayrollSlip(tipepayroll:string);
var
  fn :string;
  //level : integer;
  qm : tzquery;
begin

  startdate         := btnstartdate.Date;
  enddate           := btnenddate.Date;
  qm_master.Active  := False;
  QM_Detail1.Active := False;
  QM_Detail2.Active := False;
  qm := createquery;

  qm.Query('select p.* '+es+
           'from t_payroll p '+es+
           'left join m_department d on p.department_id=d.department_id '+es+
           'left join m_employee e on p.employee_id=e.employee_id '+es+
           'where p.level='''+tipepayroll+''' and '+es+
           'tdate>='''+date2sql(startdate)+''' and tdate<='''+date2sql(enddate)+''' '+es+
           'order by p.level, d.code, e.name');
  //pesan(qm.SQL.Text);

  if LookupQuery('Choose Payroll', qm, 800, True, 'tdate', 't_payroll' ) = false then
  begin
    qm.Free;
    exit;
  end;
  if qm.RecordCount = 0 then
  begin
    qm.Free;
    MsgError('No Data Found');
    exit;
  end;
  ShowProgressbar;
  qm.First;
  while not qm.eof do
  begin
    SetProgressbarDefault(qm);
    qm_master.Query('select p.*, e.name as employeename,'+es+
                  'e.email as email, e.password, '+es+
                  'c.name as companyname, case p.department_id when 20 then c.logo2 else c.logo end as logo, '+es+
                  'd.name as divisionname,'+es+
                  'dp.name as departmentname, dp.code as codedept, '+es+
                  'w.name as workareaname,'+es+
                  'po.name as positionname,'+es+
                  'l.name as levelname,'+es+
                  'es.name as employeestatusname '+es+
                  'from t_payroll p '+es+
                  'left join m_employee e on p.employee_id = e.employee_id '+es+
                  'left join m_company c on p.company_id = c.company_id '+es+
                  'left join m_division d on p.division_id = d.division_id '+es+
                  'left join m_department dp on p.department_id = dp.department_id '+es+
                  'left join m_workarea w on p.workarea_id = w.workarea_id '+es+
                  'left join m_position po on p.position_id = po.position_id '+es+
                  'left join m_level l on p.level_id = l.level_id '+es+
                  'left join m_employeestatus es on p.employeestatus_id = es.employeestatus_id '+es+
                  'where p.payroll_id='''+qm.getFieldString('payroll_id')+''' '+es+
                  'order by p.level, p.tdate, dp.code, e.name');
    qm_detail1.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''D'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 and pd.payroll_id='''+qm.getFieldString('payroll_id')+''' '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    qm_detail2.Query('select pd.payroll_id, s.slipname, sum(pd.amount) as amount '+es+
                  'from t_payroll_detail pd '+es+
                  'left join m_salary s on pd.salary_id = s.salary_id '+es+
                  'where s.acc=''C'' and s.sliporder > 0 '+es+
                  'and pd.amount <> 0 and pd.payroll_id='''+qm.getFieldString('payroll_id')+''' '+es+
                  'group by pd.payroll_id, s.slipname '+es+
                  'order by pd.payroll_id, convert(s.sliporder, signed)');
    fn := 'D:\Temp\';
    if lowercase(tipepayroll) = 'non manager' then
    begin
      if ( qm.getFieldInteger('employee_id')=2572)  or ( qm.getFieldInteger('employee_id')=2573)  or
         ( qm.getFieldInteger('employee_id')=2610)  or ( qm.getFieldInteger('employee_id')=3218) then
      begin
        fn := 'D:\Temp\SLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Level3\';
      end else
      begin
        fn := 'D:\Temp\SLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Non_Manager\';
      end;
    end else
    if lowercase(tipepayroll) = 'manager' then
    begin
      fn := 'D:\Temp\SLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Level3\';
    end else
    if lowercase(tipepayroll) = 'mingguan' then
    begin
      fn := 'D:\Temp\SLIP_'+ formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_Mingguan\';
    end;

    if not DirectoryExists(fn) then CreateDir(fn);
    //fn := fn + 'SLIP_' + formatdatetime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'\';
    //if not DirectoryExists(fn) then CreateDir(fn);
    fn := fn + qm_master.getFieldString('codedept')+'\';
    if not DirectoryExists(fn) then CreateDir(fn);


    if lowercase(tipepayroll) = 'mingguan' then
    begin
      fn := fn + FormatDateTime('yyyyMMdd', qm_master.getFieldDateTime('tdate') ) +'_';
    end else
    begin
      fn := fn + FormatDateTime('yyyyMM', qm_master.getFieldDateTime('tdate') ) +'_';
    end;

    fn := fn + Replace(qm_master.getFieldString('employeename'), ' ', '') + '_'+ qm_master.getFieldString('nip')  + '.pdf';
    exportReporttoJPEG(FR_Sab,  fn);
    //q_master.EnableControls;
    //FR_SlipManager.ShowReport;
    qm.Next;
  end;
  qm.Free;
  HideProgressbar;
  MsgOK('Finished');
end;
procedure TFrmPayroll.N2CreateCSVSPTBulanan1Click(Sender: TObject);
var
  npwp, nama, s, fn, sec : string;
  ts : tstringlist;
  qp : tzquery;
begin
  startdate := BtnStartdate.Date;
  enddate   := BtnEnddate.Date;
  sec:= getSecurity(txtid.Text, ' * ', 'p.');
  qp := createquery;
  qp.Query('select p.payroll_id, p.nip, e.name as employeename, '+es+
           'month(p.tdate) as masapajak, year(p.tdate) as tahunpajak, 0 as pembetulan, '+es+
           'p.npwpemployee,  '+es+
           ' ''21-100-01'' as kodepajak, (totalincome+thrbonustaxallowance+taxallowance+jkm+jkk+jkn+grossmonthly+thrbonus+thrbonus2) as bruto, '+es+
           '(tax21_irregular+tax21_monthly+thrbonustax+p.pph21sebelum) as pph, '+es+
           ' '''' as kodenegara, p.level_id, p.company_id, p.division_id, p.department_id, '+es+
           'p.unit_id, p.workarea_id, p.position_id, p.grade_id, p.employeestatus_id, '+es+
           'p.jamsostek_id '+es+
           'from t_payroll p '+es+
           'left join m_employee e on p.employee_id = e.employee_id '+es+
           'where p.tdate>='''+date2sql(startdate)+''' and '+es+
           'p.tdate<='''+date2sql(enddate)+''' and '+sec+' '+es+
           'order by year(p.tdate), month(p.tdate), e.nip ');
  if qp.RecordCount = 0 then
  begin
    qp.Free;
    MsgError('No Data');
    exit;
  end;

  if LookupQuery('Choose Payroll', qp, 800, true, 'company_id,department_id,unit_id') = False then
  begin
    MsgError('Cancel');
    qp.Free;
    exit;
  end;
  fn  := FileSaveDialog('CSV Files (*.csv)|*.csv');
  if fn = '' then exit;

  ShowProgressbar;
  fn  := fn +'.csv';
  ts  := tstringlist.Create;
  ts.Clear;
  s   := 'Masa Pajak;Tahun Pajak;Pembetulan;NPWP;Nama;Kode Pajak;Jumlah Bruto;Jumlah PPh;Kode Negara';
  ts.Add(s);
  qp.First;
  qp.DisableControls;
  while not qp.Eof do
  begin
    nama := qp.getFieldString('employeename');
    SetProgressbar('Employee : '+qp.getFieldString('nip')+
                   ' '+nama+' '+
                   ', '+inttostr(qp.RecNo)+'/'+inttostr(qp.recordcount),
                   (qp.recno * 100) div qp.recordcount);
    npwp := qp.getCSV('npwpemployee');
    npwp := replace(npwp, '.', '');
    npwp := replace(npwp, '-', '');
    if trim(npwp) = '' then npwp := '000000000000000';
    s := '';
    s := s + qp.getCSV('masapajak')   + ';' + qp.getCSV('tahunpajak')      + ';';
    s := s + qp.getCSV('pembetulan')  + ';' + npwp                         + ';';
    s := s + qp.getCSV('employeename')+ ';' + qp.getCSV('kodepajak') + ';';
    s := s + qp.getCSV('bruto')       + ';' + qp.getCSV('pph')             + ';';
    s := s + qp.getCSV('kodenegara');
    ts.Add(s);
    qp.Next;
  end;

  if ts.Count > 1 then ts.SaveToFile(fn);
  ts.Free;
  qp.EnableControls;
  qp.Free;
  HideProgressbar;
  MsgOK('File Saved to ['+fn+']');
end;

procedure TFrmPayroll.DeleteLoan(qm:tzquery);
var
  qh, qd : tzquery;
  sudahbayar : double;
begin
  qh := createquery;
  qd := createquery;
  qh.Query('select * from t_loan where '+gets('employee_id', qm)+' order by startdate');
  qh.First;
  while not qh.Eof do
  begin
    ExecuteSQL('update t_loan_detail set payrolldate=null where '+es+
               'payrolldate>='''+qm.date2sql('startdate')+''' and '+es+
               'payrolldate<='''+qm.date2sql('enddate')+''' and '+gets('loan_id', qh)+' ');
    qd.Query('select loan_id, sum(amount) as sudahbayar from t_loan_detail '+es+
             'where '+gets('loan_id', qh)+' and payrolldate is not null group by loan_id');
    if qd.RecordCount =0 then
    begin
      sudahbayar := 0;
    end else
    begin
      sudahbayar := qd.getFieldDouble('sudahbayar');
    end;
    qh.Edit;
    qh.setField('sudahbayar', sudahbayar);
    qh.setField('sisa', qh.getFieldDouble('total')-sudahbayar);
    qh.Post;
    qh.Next;
  end;

  qh.Free;
  qd.Free;

end;

end.
