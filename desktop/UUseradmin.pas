unit UUseradmin;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.DateUtils,
  System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, dxSkinsCore, dxSkinBlack, dxSkinBlue,
  dxSkinBlueprint, dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide,
  dxSkinDevExpressDarkStyle, dxSkinDevExpressStyle, dxSkinFoggy,
  dxSkinGlassOceans, dxSkinHighContrast, dxSkiniMaginary, dxSkinLilian,
  dxSkinLiquidSky, dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinOffice2013White,
  dxSkinPumpkin, dxSkinSeven, dxSkinSevenClassic, dxSkinSharp, dxSkinSharpPlus,
  dxSkinSilver, dxSkinSpringTime, dxSkinStardust, dxSkinSummer2008,
  dxSkinTheAsphaltWorld, dxSkinsDefaultPainters, dxSkinValentine, dxSkinVS2010,
  dxSkinWhiteprint, dxSkinXmas2008Blue, dxSkinsdxBarPainter, cxGraphics,
  cxControls, cxLookAndFeels, cxLookAndFeelPainters, dxRibbonSkins,
  dxSkinsdxRibbonPainter, dxRibbon, cxClasses, dxBar, dxSkinsForm,
  dxSkinscxPCPainter, cxPCdxBarPopupMenu, cxStyles, cxCustomData, Data.DB,
  cxDBData, cxFilter, cxData, cxDataStorage, cxEdit, cxNavigator,
  cxDBLookupComboBox, System.Actions, Vcl.ActnList, cxGridCustomPopupMenu,
  cxGridPopupMenu, ZAbstractRODataset, ZAbstractDataset, ZDataset, Vcl.Menus,
  Vcl.StdCtrls, cxGridTableView, cxGridBandedTableView, cxGridDBBandedTableView,
  cxGridLevel, dxLayoutContainer, cxGridLayoutView, cxGridCustomTableView,
  cxGridDBLayoutView, cxGridCustomView, cxGridCustomLayoutView, cxGrid, cxPC,
  cxCalendar, dxBarExtItems, cxBarEditItem, dxSkinsdxStatusBarPainter,
  dxStatusBar, cxContainer, dxLayoutcxEditAdapters, cxCheckBox, cxDBEdit,
  cxDropDownEdit, cxTextEdit, cxMaskEdit, cxSpinEdit, dxLayoutLookAndFeels,
  dxLayoutControl, cxDBNavigator, cxSplitter;

type
  TFrmUseradmin = class(TForm)
    BarManager: TdxBarManager;
    dxbFile: TdxBar;
    GroupDate: TdxBar;
    Ribbon: TdxRibbon;
    tabToolbar: TdxRibbonTab;
    rtSelection: TdxRibbonTab;
    btnMenu: TdxBarSubItem;
    btnExport: TdxBarLargeButton;
    btnPrint: TdxBarSubItem;
    PageControl: TcxPageControl;
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
    PopupMenu: TPopupMenu;
    ppFind: TMenuItem;
    ppShowALL: TMenuItem;
    Q_MASTER: TZQuery;
    DS_MASTER: TDataSource;
    cxGridPopupMenu1: TcxGridPopupMenu;
    ActionList1: TActionList;
    actRefresh: TAction;
    actForm: TAction;
    actTable: TAction;
    actSave: TAction;
    btnGroupDate: TdxBarSubItem;
    btnGroupDateDefault: TdxBarButton;
    btnGroupDateRelativeToday: TdxBarButton;
    btnGroupDateMonth: TdxBarButton;
    btnGroupDateYear: TdxBarButton;
    btnShowFixedBand: TdxBarLargeButton;
    btnClose: TdxBarLargeButton;
    btnDateTemplate: TdxBarSubItem;
    btnFirstdate: TdxBarButton;
    btnToday: TdxBarButton;
    btnOneMonth: TdxBarButton;
    btnNextMonth: TdxBarButton;
    btnOneDay: TdxBarButton;
    btnPrevMonth: TdxBarButton;
    btnOneYear: TdxBarButton;
    btnEnddate: TdxBarDateCombo;
    btnStartdate: TdxBarDateCombo;
    btnReload: TdxBarLargeButton;
    btnForm: TdxBarLargeButton;
    TabMaster: TcxTabSheet;
    actAdd: TAction;
    actEdit: TAction;
    statusBar: TdxStatusBar;
    dxBarButton1: TdxBarButton;
    MASTERid_user: TcxGridDBBandedColumn;
    MASTERname: TcxGridDBBandedColumn;
    MASTERtempatlahir: TcxGridDBBandedColumn;
    MASTERtanggallahir: TcxGridDBBandedColumn;
    MASTERperusahaan_id: TcxGridDBBandedColumn;
    MASTERnamaperusahaan: TcxGridDBBandedColumn;
    MASTERusername: TcxGridDBBandedColumn;
    MASTERpassword: TcxGridDBBandedColumn;
    MASTERpertanyaan: TcxGridDBBandedColumn;
    MASTERjawaban: TcxGridDBBandedColumn;
    MASTERactive: TcxGridDBBandedColumn;
    cxSplitter1: TcxSplitter;
    PageDetail: TcxPageControl;
    TabDetail: TcxTabSheet;
    GRID_DETAIL1: TcxGrid;
    DETAIL1: TcxGridDBBandedTableView;
    GRID_DETAIL1Level1: TcxGridLevel;
    cxGridPopupMenu2: TcxGridPopupMenu;
    DS_DETAIL1: TDataSource;
    Q_DETAIL1: TZQuery;
    DETAIL1id: TcxGridDBBandedColumn;
    DETAIL1id_user: TcxGridDBBandedColumn;
    DETAIL1id_module: TcxGridDBBandedColumn;
    DETAIL1insert: TcxGridDBBandedColumn;
    DETAIL1edit: TcxGridDBBandedColumn;
    DETAIL1delete: TcxGridDBBandedColumn;
    DETAIL1export: TcxGridDBBandedColumn;
    DETAIL1menu: TcxGridDBBandedColumn;
    DETAIL1print: TcxGridDBBandedColumn;
    DETAIL1disable_menu: TcxGridDBBandedColumn;
    DETAIL1disable_print: TcxGridDBBandedColumn;
    DETAIL1disable_detail: TcxGridDBBandedColumn;
    DS_MODULE: TDataSource;
    Q_MODULE: TZQuery;
    PopupMenu1: TPopupMenu;
    ppFind1: TMenuItem;
    ppShowALL1: TMenuItem;
    txtID: TEdit;
    txtModuleName: TEdit;
    procedure SettingFont;
    procedure SettingQuery;
    procedure ValidasiControl;
    procedure FormCreate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure actRefreshExecute(Sender: TObject);
    procedure btnGroupDateDefaultClick(Sender: TObject);
    procedure btnGroupDateMonthClick(Sender: TObject);
    procedure btnGroupDateYearClick(Sender: TObject);
    procedure btnGroupDateRelativeTodayClick(Sender: TObject);
    procedure btnExportClick(Sender: TObject);
    procedure ppFindClick(Sender: TObject);
    procedure ppShowALLClick(Sender: TObject);
    procedure btnShowFixedBandClick(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure btnFirstdateClick(Sender: TObject);
    procedure ReloadClick;
    procedure btnOneMonthClick(Sender: TObject);
    procedure btnNextMonthClick(Sender: TObject);
    procedure btnPrevMonthClick(Sender: TObject);
    procedure btnOneYearClick(Sender: TObject);
    procedure btnOneDayClick(Sender: TObject);
    procedure btnTodayClick(Sender: TObject);
    procedure btnStartdateChange(Sender: TObject);
    procedure btnEnddateChange(Sender: TObject);
    procedure btnReloadClick(Sender: TObject);
    procedure btnFormClick(Sender: TObject);
    procedure actFormExecute(Sender: TObject);
    procedure actTableExecute(Sender: TObject);
    procedure Q_MASTERBeforePost(DataSet: TDataSet);
    procedure Q_MASTERBeforeEdit(DataSet: TDataSet);
    procedure Q_MASTERNewRecord(DataSet: TDataSet);
    procedure actSaveExecute(Sender: TObject);
    procedure actAddExecute(Sender: TObject);
    procedure actEditExecute(Sender: TObject);
    procedure Q_MASTERAfterPost(DataSet: TDataSet);
    procedure Q_MASTERAfterCancel(DataSet: TDataSet);
    procedure Q_MASTERAfterDelete(DataSet: TDataSet);
    procedure Q_MASTERAfterRefresh(DataSet: TDataSet);
    procedure DETAIL1id_modulePropertiesPopup(Sender: TObject);
    procedure Q_DETAIL1NewRecord(DataSet: TDataSet);
    procedure Q_DETAIL1AfterCancel(DataSet: TDataSet);
    procedure Q_DETAIL1AfterDelete(DataSet: TDataSet);
    procedure Q_DETAIL1AfterPost(DataSet: TDataSet);
    procedure Q_DETAIL1BeforeEdit(DataSet: TDataSet);
    procedure ppFind1Click(Sender: TObject);
    procedure ppShowALL1Click(Sender: TObject);
    procedure Q_DETAIL1BeforePost(DataSet: TDataSet);
  private
    { Private declarations }
  public
    { Public declarations }
    //property RibbonDemoStyle: TRibbonDemoStyle read GetRibbonDemoStyle write SetRibbonDemoStyle;
  end;

var
  FrmUseradmin: TFrmUseradmin;
  pwd, TableName, TableName1, SQLAwal, SQLAwal1 : String;
  isNewRecord, isNewRecord1, DisableChangeDate : Boolean;
  Startdate, Enddate : tdatetime;

implementation

{$R *.dfm}
uses UMenuLogin, Unit1;
//form create
procedure TFrmUseradmin.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  isitablekolom(TableName, master);
  isitablekolom(TableName1, detail1);
  cekNowEdit(isNowEdit[idUseradmin], TabMaster.Caption);
  cekNowEdit(isNowEdit[idUseradminDetail], TabDetail.Caption);
  action := cafree;
end;
procedure TFrmUseradmin.FormCreate(Sender: TObject);
begin
  //txtID.Text         := inttostr(MenuLogin.TreeView.Selected.StateIndex);
  //txtModuleName.Text := MenuLogin.TreeView.Selected.Text;
  txtID.Text         := IDModule;
  txtModuleName.Text := ModuleName;
  DisableChangeDate  := False;
  tabToolbar.Caption := self.Caption;
  BtnStartdate.Date  := ServerDate;
  BtnEnddate.Date    := ServerDate;
  PageControl.ActivePageIndex := 0;
  SettingQuery;
  ValidasiControl;
  SettingFont;
  StyleGridReadOnly(master);
  StyleGridReadOnly(detail1);
  setColumnWidth(TableName, q_master, master);
  setColumnWidth(TableName1, q_detail1, DETAIL1);
end;
procedure TFrmUseradmin.SettingQuery;
begin
  TableName         := 's_user';
  TableName1        := 's_usermodule';
  SQLAwal           := 'select * from '+TableName+' ';
  SQLAwal1          := 'select * from '+TableName1+' ';
  q_master.Query(SQLAwal);
  Q_DETAIL1.Query(SQLAwal1);
  Q_MODULE.Active   := True;
  q_master.Refresh;
end;
procedure TFrmUseradmin.SettingFont;
var
  fs : integer;
  fn : string;
begin
  fs := strtoint(ReadIniFile('visual','fontsize'));
  Ribbon.Fonts.Group.Name       := 'Tahoma';
  Ribbon.Fonts.Group.Size       := fs - 1;
  Ribbon.Fonts.GroupHeader.Name := 'Tahoma';
  Ribbon.Fonts.GroupHeader.Size := fs - 1;
  Ribbon.Fonts.TabHeader.Name   := 'Tahoma';
  Ribbon.Fonts.TabHeader.Size   := fs - 1;

  PageControl.Font.Name         := 'Tahoma';
  PageControl.Font.Size         := fs - 1;
  TabMaster.Font.Name           := 'Tahoma';
  GRID_MASTER.Font.Name         := 'Tahoma';
  GRID_MASTER.Font.Size         := fs;

  PageDetail.Font.Name          := 'Tahoma';
  PageDetail.Font.Size          := fs - 1;
  TabDetail.Font.Size           := fs - 1;
  GRID_Detail1.Font.Name        := 'Tahoma';
  GRID_Detail1.Font.Size        := fs;
end;
procedure TFrmUseradmin.ValidasiControl;
//var
  //mn : string;
begin
  ///
end;
//end form create

procedure TFrmUseradmin.btnFormClick(Sender: TObject);
var
  caption : string;
begin
  caption := lowercase( Replace(btnForm.Caption,'&','') );
  if caption = 'form' then
  begin
    {PageControl.Properties.ActivePage := TabInput;
    btnform.LargeImageIndex := 38;
    GRID_LAYOUT.SetFocus;
    btnForm.Caption      := '&Table';}
  end else
  begin
    actTableExecute(sender);
    btnform.LargeImageIndex := 37;
    btnForm.Caption      := '&Form';
  end;
end;

procedure TFrmUseradmin.btnExportClick(Sender: TObject);
begin
  if Confirm('Export to '+TabMaster.Caption+' Excel ?') = 'YES' then
  begin
    //actTableExecute(sender);
    ExportGrid('Excel', grid_master);
  end;
  if Confirm('Export to '+Tabdetail.Caption+' Excel ?') = 'YES' then
  begin
    //actTableExecute(sender);
    ExportGrid('Excel', GRID_DETAIL1);
  end;
end;
procedure TFrmUseradmin.btnShowFixedBandClick(Sender: TObject);
var
  caption : string;
  x : integer;
begin
  actTableExecute(sender);
  caption := lowercase( Replace(btnShowFixedBand.Caption,'&','') );
  if caption = 'show fixed band' then
  begin
    master.Bands[1].FixedKind   := fkLeft;
    master.Bands[1].Visible     := true;
    DETAIL1.Bands[1].FixedKind  := fkLeft;
    DETAIL1.Bands[1].Visible    := true;
    btnShowFixedBand.Caption      := '&Hide Fixed Band';
  end else
  begin
    for x := 0 to master.Bands[1].ColumnCount - 1 do
    begin
      master.Bands[1].Columns[0].Position.BandIndex := 0;
      master.Bands[0].Columns[master.Bands[0].columncount-1].Position.ColIndex := x;
    end;

    for x := 0 to detail1.Bands[1].ColumnCount - 1 do
    begin
      detail1.Bands[1].Columns[0].Position.BandIndex := 0;
      detail1.Bands[0].Columns[detail1.Bands[0].columncount-1].Position.ColIndex := x;
    end;
    master.Bands[1].FixedKind   := fkLeft;
    master.Bands[1].Visible     := false;
    DETAIL1.Bands[1].FixedKind  := fkLeft;
    DETAIL1.Bands[1].Visible    := false;
    btnShowFixedBand.Caption      := '&Show Fixed Band';
  end;
end;
procedure TFrmUseradmin.btnGroupDateDefaultClick(Sender: TObject);
begin
  actTableExecute(sender);
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmUseradmin.btnGroupDateMonthClick(Sender: TObject);
begin
  actTableExecute(sender);
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmUseradmin.btnGroupDateYearClick(Sender: TObject);
begin
  actTableExecute(sender);
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmUseradmin.btnGroupDateRelativeTodayClick(Sender: TObject);
begin
  actTableExecute(sender);
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmUseradmin.btnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmUseradmin.btnReloadClick(Sender: TObject);
begin
  ReloadClick;
end;
procedure TFrmUseradmin.ReloadClick;
begin
  if GroupDate.Visible = False then Exit;
  PageControl.Properties.ActivePage := TabMaster;
  //GRID_MASTER.SetFocus;
  startdate := BtnStartdate.Date;
  enddate   := BtnEnddate.Date;
  q_master.Query('select * from '+TableName+' ');
end;
procedure TFrmUseradmin.btnFirstdateClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := ServerDate;
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnOneMonthClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnNextMonthClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate := EncodeDate(yearof(addMonths(BtnStartdate.Date, 1)),
                          MonthOf(addMonths(BtnStartdate.Date,1)),1 );
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnPrevMonthClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), MonthOf(BtnStartdate.Date), 1);
  startdate := addMonths(startdate, -1);
  enddate   := addDays(addMonths(startdate,1), -1);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnOneYearClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate := EncodeDate(YearOf(BtnStartdate.Date), 1, 1);
  enddate   := EncodeDate(YearOf(BtnStartdate.Date), 12, 31);
  BtnStartdate.Date := startdate;
  BtnEnddate.Date   := enddate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnOneDayClick(Sender: TObject);
begin
  DisableChangeDate := true;
  BtnEnddate.Date := BtnStartdate.Date;
  startdate       := BtnStartdate.Date;
  enddate         := BtnEnddate.Date;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.btnTodayClick(Sender: TObject);
begin
  DisableChangeDate := true;
  startdate         := ServerDate;
  enddate           := ServerDate;
  BtnStartdate.Date := ServerDate;
  BtnEnddate.Date   := ServerDate;
  ReloadClick;
  DisableChangeDate := false;
end;
procedure TFrmUseradmin.DETAIL1id_modulePropertiesPopup(Sender: TObject);
begin
  {LookupStandar(QM:TZQuery;
            JudulLookup,JudulInputBox, NamaTable,
            NamaKolom, NamaOrder, KolomSet : String;
            syarat:string=''; hidecolumn:string='');}
   //LookupStandar(Q_Detail1, 'module'
   LookupStandar(Q_Detail1,'Search Module', 'Input Nama Module', 's_module', 'name',
                'name', 'id_module', ' active=1 ',
                'id_module,folder,no,parentid,isdetail,code_module,active,tablename,tag,query');
end;

procedure TFrmUseradmin.btnStartdateChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := btnstartdate.Date;
  ReloadClick;
end;
procedure TFrmUseradmin.btnEnddateChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
  ReloadClick;
end;

procedure TFrmUseradmin.ppFind1Click(Sender: TObject);
begin
  FindClick(q_detail1, detail1, Tablename1, ' (0=0) ');
end;
procedure TFrmUseradmin.ppShowALL1Click(Sender: TObject);
begin
  //ShowALLClick(q_detail1, sqlawal1);
  ReloadClick;
end;
procedure TFrmUseradmin.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename, ' (0=0) ');
end;
procedure TFrmUseradmin.ppShowALLClick(Sender: TObject);
begin
  //ShowALLClick(q_master, sqlawal);
  ReloadClick;
end;

procedure TFrmUseradmin.Q_DETAIL1AfterCancel(DataSet: TDataSet);
begin
  isNowEdit[idUseradminDetail] := False;
end;

procedure TFrmUseradmin.Q_DETAIL1AfterDelete(DataSet: TDataSet);
begin
  isNowEdit[idUseradminDetail] := False;
end;

procedure TFrmUseradmin.Q_DETAIL1AfterPost(DataSet: TDataSet);
begin
  isNowEdit[idUseradminDetail] := False;
end;

procedure TFrmUseradmin.Q_DETAIL1BeforeEdit(DataSet: TDataSet);
begin
  isNowEdit[idUseradminDetail] := True;
end;

procedure TFrmUseradmin.Q_DETAIL1BeforePost(DataSet: TDataSet);
begin
  cekIndexUnique(TableName1, q_detail1, detail1, isNewRecord1);
  cekFieldMustbeFilled(TableName1, q_detail1, detail1);
end;

procedure TFrmUseradmin.Q_DETAIL1NewRecord(DataSet: TDataSet);
begin
  isNowEdit[idUseradminDetail] := True;
  Q_DETAIL1.SetMultiField('insert,edit,delete,export,menu,print', '1');
end;

procedure TFrmUseradmin.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  isNowEdit[idUseradmin] := False;
end;

procedure TFrmUseradmin.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  isNowEdit[idUseradmin] := False;
end;

procedure TFrmUseradmin.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  isNowEdit[idUseradmin] := False;
end;

procedure TFrmUseradmin.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  Q_DETAIL1.Refresh;
  Q_MODULE.Refresh;
end;

procedure TFrmUseradmin.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  pwd := q_master.getFieldString('password');
  isNewRecord := False;
  isNowEdit[idUseradmin] := True;
end;

procedure TFrmUseradmin.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  cekIndexUnique(TableName, q_master, master, isNewRecord);
  cekFieldMustbeFilled(TableName, q_master, master);

  if pwd <> q_master.getFieldString('password') then
  begin
    q_master.setField('password', ConvertToMD5(q_master.getFieldString('password')));
  end;
  //isikolomuser(isNewRecord, q_master);
end;

procedure TFrmUseradmin.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  q_detail1.Refresh;
  pwd := '';
  isNewRecord := True;
  isNowEdit[idUseradmin] := True;
  q_master.setField('active', '1');
end;

procedure TFrmUseradmin.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmUseradmin.actFormExecute(Sender: TObject);
begin
  //PageControl.Properties.ActivePage := TabInput;
  //GRID_LAYOUT.SetFocus;
end;
procedure TFrmUseradmin.actTableExecute(Sender: TObject);
begin
  PageControl.Properties.ActivePage := TabMaster;
  GRID_MASTER.SetFocus;
end;
procedure TFrmUseradmin.actAddExecute(Sender: TObject);
begin
  actFormExecute(sender);
  q_master.Append;
end;
procedure TFrmUseradmin.actEditExecute(Sender: TObject);
begin
  actFormExecute(sender);
  q_master.Edit;
end;
procedure TFrmUseradmin.actSaveExecute(Sender: TObject);
begin
  if isNowEdit[idUseradmin] then q_master.Post;
  if isNowEdit[idUseradminDetail] then Q_DETAIL1.Post;
end;
end.
