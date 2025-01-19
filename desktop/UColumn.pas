unit UColumn;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.DateUtils,
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
  cxLabel, cxCalc, cxLookupEdit, cxDBLookupEdit, Vcl.AppEvnts, dxSkinMetropolis,
  dxSkinMetropolisDark, dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray,
  dxSkinOffice2016Colorful, dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue,
  dxSkinVisualStudio2013Dark, dxSkinVisualStudio2013Light, dxBarBuiltInMenu;

type
  TFrmColumn = class(TForm)
    PageControl: TcxPageControl;
    TabMaster: TcxTabSheet;
    GRID_MASTER: TcxGrid;
    MASTER: TcxGridDBBandedTableView;
    GRID_MASTERLevel1: TcxGridLevel;
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
    DS_Table: TDataSource;
    Q_Table: TZQuery;
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
    MASTERkolom_id: TcxGridDBBandedColumn;
    MASTERtablename: TcxGridDBBandedColumn;
    MASTERcolumnname: TcxGridDBBandedColumn;
    MASTERcaptionname: TcxGridDBBandedColumn;
    MASTERlength: TcxGridDBBandedColumn;
    MASTER_visible: TcxGridDBBandedColumn;
    MASTER_readonly: TcxGridDBBandedColumn;
    MASTERtipekolom: TcxGridDBBandedColumn;
    DS_Column: TDataSource;
    Q_Column: TZQuery;
    MASTERisi: TcxGridDBBandedColumn;
    MASTERlistfieldnames: TcxGridDBBandedColumn;
    MASTERkeyfieldnames: TcxGridDBBandedColumn;
    MASTERid_module: TcxGridDBBandedColumn;
    Q_Module: TZQuery;
    DS_Module: TDataSource;
    ApplicationEvents1: TApplicationEvents;
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
    procedure actFormExecute(Sender: TObject);
    procedure actTabMasterExecute(Sender: TObject);
    procedure actTabDetail1Execute(Sender: TObject);
    procedure ApplicationEvents1Exception(Sender: TObject; E: Exception);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmColumn: TFrmColumn;
  sqlawal, TableName:string;
  DisableChangeDate, isNewRecord : Boolean;
  startdate, enddate : tdatetime;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
//form close, form create
procedure TFrmColumn.BtnCloseClick(Sender: TObject);
begin
  Close;
end;
procedure TFrmColumn.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  cekNowEdit(isnowedit[strtoint(txtid.text)], txtmodulename.Text);
  //isiTableKolom(tablename, master);
  q_master.Active := false;
  action := caFree;
end;
procedure TFrmColumn.FormCreate(Sender: TObject);
begin
  //layout.Margins.Left := RoundDiv(self.Width, 2)-70;
  //layout.Margins.Right:= RoundDiv(self.Width, 2)-70;

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

  SettingQuery;
  ValidasiControl;
  SettingFont;
  StyleGridReadOnly(master);
  //setColumnWidth(TableName, master);
  ShowDateTemplate(False);
end;
procedure TFrmColumn.SettingQuery;
begin
  //TableName  := getTable(txtid.Text);
  //sqlawal    := getQuery(txtid.Text,False, startdate, enddate);
  TableName  := 's_kolom';
  sqlawal    := 'select * from s_kolom order by tablename, no';
  q_master.Query(sqlAwal);
  Q_Module.Active := True;
  //q_table.Active := true;
  //q_column.Active := true;
  q_master.Refresh;
end;
procedure TFrmColumn.ReloadClick;
begin
  startdate := BtnStartdate.Date;
  enddate   := BtnEnddate.Date;
  //TableName  := getTable(txtid.Text);
  //sqlawal    := getQuery(txtid.Text,False, startdate, enddate);
  TableName  := 's_kolom';
  sqlawal    := 'select * from s_kolom';
  q_master.Query(sqlAwal);
  q_master.Refresh;
end;
procedure TFrmColumn.SettingFont;
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
procedure TFrmColumn.ValidasiControl;
var
  mn : string;
begin
  mn := lowercase(txtModuleName.Text);

  SetInsertTable(master, cekValidasi('`insert`', mn));
  SetEditTable(master, cekValidasi('`edit`', mn));
  SetDeleteTable(master, cekValidasi('`delete`', mn));

  ppAdd.Visible    := cekValidasi('`insert`', mn);
  ppEdit.Visible   := cekValidasi('`edit`', mn);
  ppDelete.Visible := cekValidasi('`delete`', mn);

  ppExport.Visible := cekValidasi('`export`', mn);
  ValidasiMenu2(mn, 'disable_menu', 6, BtnMenu, itemMenu );
  ValidasiMenu2(mn, 'disable_print', 7, BtnPrint, itemPrint );

end;
procedure TFrmColumn.ShowDateTemplate(Tipe:Boolean=True);
begin
  LblStartdate.Visible    := Tipe;
  BtnStartdate.Visible    := Tipe;
  LblEnddate.Visible      := Tipe;
  BtnEnddate.Visible      := Tipe;
  BtnDateTemplate.Visible := Tipe;
end;
//end form close, form create

//atur stardate, enddate
procedure TFrmColumn.BtnStartdateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmColumn.BtnStartdatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  startdate := BtnStartdate.Date;
end;
procedure TFrmColumn.BtnEnddateKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then ReloadClick;
end;

procedure TFrmColumn.BtnEnddatePropertiesChange(Sender: TObject);
begin
  if DisableChangeDate then exit;
  enddate := BtnEnddate.Date;
end;
procedure TFrmColumn.MenuItem1Click(Sender: TObject);
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
procedure TFrmColumn.OneMonth1Click(Sender: TObject);
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

procedure TFrmColumn.NextMonth1Click(Sender: TObject);
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
procedure TFrmColumn.PrevMonth1Click(Sender: TObject);
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
procedure TFrmColumn.OneYear1Click(Sender: TObject);
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
procedure TFrmColumn.OneDay1Click(Sender: TObject);
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
procedure TFrmColumn.oday1Click(Sender: TObject);
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
procedure TFrmColumn.actStartdateExecute(Sender: TObject);
begin
  BtnStartdate.SetFocus;
end;
procedure TFrmColumn.actEnddateExecute(Sender: TObject);
begin
  BtnEnddate.SetFocus;
end;
procedure TFrmColumn.actFormExecute(Sender: TObject);
begin

end;

//end atur stardate, enddate

//action list shortcut
procedure TFrmColumn.actAddExecute(Sender: TObject);
begin
  if cekValidasi('`insert`', txtmodulename.Text) = false then exit;
  q_master.Append;
end;
procedure TFrmColumn.actcancelExecute(Sender: TObject);
begin
  q_master.Cancel;
end;
procedure TFrmColumn.actDeleteExecute(Sender: TObject);
begin
  if cekValidasi('`delete`', txtmodulename.Text) = false then exit;
  if confirm('Delete Record?') = 'YES' then q_master.Delete;
end;
procedure TFrmColumn.actEditExecute(Sender: TObject);
begin
  if cekValidasi('`edit`', txtmodulename.Text) = false then exit;
  q_master.Edit;
end;
procedure TFrmColumn.actRefreshExecute(Sender: TObject);
begin
  q_master.Refresh;
end;
procedure TFrmColumn.actSaveExecute(Sender: TObject);
begin
  q_master.Post;
end;
procedure TFrmColumn.actTabDetail1Execute(Sender: TObject);
begin
  //dbg('tes');
end;

procedure TFrmColumn.actTabMasterExecute(Sender: TObject);
begin
  PageControl.SetFocus;
  GRID_MASTER.SetFocus;
end;

procedure TFrmColumn.ApplicationEvents1Exception(Sender: TObject; E: Exception);
begin
  MsgError(e.Message);
  isNowEdit[strtoint(txtid.Text)]    := False;
end;

//end action list shortcut

//popup menu
procedure TFrmColumn.ppExportClick(Sender: TObject);
begin
  if Confirm('Export Master to Excel ?') = 'YES' then  ExportGrid('Excel', grid_master);
end;
procedure TFrmColumn.ppFreezeClick(Sender: TObject);
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
procedure TFrmColumn.ppGroupDefaultClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'default');
end;
procedure TFrmColumn.ppGroupMonthClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'month');
end;
procedure TFrmColumn.ppGroupYearClick(Sender: TObject);
begin
  GroupDateFormatClick(master, 'year');
end;
procedure TFrmColumn.RelativeToday1Click(Sender: TObject);
begin
  GroupDateFormatClick(master, 'relative');
end;
procedure TFrmColumn.ppFindClick(Sender: TObject);
begin
  FindClick(q_master, Master, Tablename);
end;
procedure TFrmColumn.ppShowALLClick(Sender: TObject);
begin
  ShowALLClick(q_master, sqlawal);
end;


//end popup menu

//isnowedit master
procedure TFrmColumn.Q_MASTERNewRecord(DataSet: TDataSet);
begin
  ValidasiInsert(txtmodulename.Text);
  isnowedit[strtoint(txtid.text)] := True;
  isNewRecord := True;
  isiDefaultNewRecord(Q_Master, TableName);
end;
procedure TFrmColumn.Q_MASTERBeforeEdit(DataSet: TDataSet);
begin
  ValidasiEdit(txtmodulename.Text);
  isnowedit[strtoint(txtid.text)] := True;
  isNewRecord := False;
end;

procedure TFrmColumn.Q_MASTERBeforeDelete(DataSet: TDataSet);
begin
  //
end;
procedure TFrmColumn.Q_MASTERAfterDelete(DataSet: TDataSet);
begin
  isnowedit[strtoint(txtid.text)] := False;
end;
procedure TFrmColumn.Q_MASTERBeforePost(DataSet: TDataSet);
begin
  //isiKolomUser(isNewRecord,q_master);
end;
procedure TFrmColumn.Q_MASTERAfterPost(DataSet: TDataSet);
begin
  isnowedit[strtoint(txtid.text)] := False;
end;
procedure TFrmColumn.Q_MASTERAfterRefresh(DataSet: TDataSet);
begin
  q_module.Refresh;
  //q_table.Refresh;
  //q_column.Refresh;
end;
procedure TFrmColumn.Q_MASTERAfterCancel(DataSet: TDataSet);
begin
  isnowedit[strtoint(txtid.text)] := False;
  //Layout.Items.Items[0].control
end;
//end isnowedit master

end.
