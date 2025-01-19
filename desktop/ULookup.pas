unit ULookup;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.StrUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, cxGraphics, cxControls, cxLookAndFeels,
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
  cxGridDBBandedTableView, cxClasses, cxGridCustomView, cxGrid, Vcl.StdCtrls,
  Vcl.ExtCtrls,
  cxGridDBTableView,cxDBEditRepository, cxEditRepositoryItems, Vcl.ImgList,
  Vcl.Menus, cxButtons, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light,
  cxDataControllerConditionalFormattingRulesManagerDialog, dxBarBuiltInMenu,
  cxImageList;

type
  TFrmLookup = class(TForm)
    LblJudul: TcxLabel;
    GRID_LOOKUP: TcxGrid;
    VIEW_LOOKUP: TcxGridDBBandedTableView;
    GRID_LOOKUPLevel1: TcxGridLevel;
    ZQuery1: TZQuery;
    Datasource1: TDataSource;
    cxGridPopupMenu1: TcxGridPopupMenu;
    Panel2: TPanel;
    cxImageList1: TcxImageList;
    BtnClose: TcxButton;
    cxButton1: TcxButton;
    VIEW_LOOKUPColumn1: TcxGridDBBandedColumn;
    VIEW_LOOKUPColumn2: TcxGridDBBandedColumn;
    procedure VIEW_LOOKUPKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure SettingFont;
    procedure FormActivate(Sender: TObject);
    procedure VIEW_LOOKUPCellDblClick(Sender: TcxCustomGridTableView;
      ACellViewInfo: TcxGridTableDataCellViewInfo; AButton: TMouseButton;
      AShift: TShiftState; var AHandled: Boolean);
    function LookupQuery(const Title:string; const Q:tzquery;
        const Width:integer;const MultiSelect:Boolean; hidecolumn:string='';
        tablename:string=''; VisibleFirstColumn:Boolean=true;
        isLookupEdit:Boolean=False) : Boolean;
    procedure BtnSetKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure BtnAddKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure ZQuery1AfterCancel(DataSet: TDataSet);
    procedure ZQuery1AfterDelete(DataSet: TDataSet);
    procedure ZQuery1AfterPost(DataSet: TDataSet);
    procedure ZQuery1BeforeEdit(DataSet: TDataSet);
    procedure ZQuery1NewRecord(DataSet: TDataSet);
    procedure BtnCloseClick(Sender: TObject);
    procedure FormShow(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmLookup: TFrmLookup;
  isNowEditL : Boolean;
implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmLookup.VIEW_LOOKUPCellDblClick(Sender: TcxCustomGridTableView;
  ACellViewInfo: TcxGridTableDataCellViewInfo; AButton: TMouseButton;
  AShift: TShiftState; var AHandled: Boolean);
begin
  ModalResult := mrOk;
end;

procedure TFrmLookup.VIEW_LOOKUPKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    ModalResult := mrNone;
    close;
  end else
  if (Key = VK_RETURN) then
  begin
    ModalResult := mrOk;
  end;
end;
procedure TFrmLookup.ZQuery1AfterCancel(DataSet: TDataSet);
begin
  isNowEditL := False;
end;

procedure TFrmLookup.ZQuery1AfterDelete(DataSet: TDataSet);
begin
  isNowEditL := False;
end;

procedure TFrmLookup.ZQuery1AfterPost(DataSet: TDataSet);
begin
  isNowEditL := False;
end;

procedure TFrmLookup.ZQuery1BeforeEdit(DataSet: TDataSet);
begin
  isNowEditL := True;
end;

procedure TFrmLookup.ZQuery1NewRecord(DataSet: TDataSet);
begin
  isNowEditL := True;
end;

procedure TFrmLookup.BtnAddKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    ModalResult := mrNone;
    close;
  end;
end;

procedure TFrmLookup.BtnCloseClick(Sender: TObject);
begin
  ModalResult := mrNone;
  close;
end;

procedure TFrmLookup.BtnSetKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then
  begin
    ModalResult := mrNone;
    close;
  end;
end;

procedure TFrmLookup.FormActivate(Sender: TObject);
begin
  SettingFont;
  GRID_LOOKUP.SetFocus;
end;

procedure TFrmLookup.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  //ModalResult := mrNone;
  if isNowEditL then ZQuery1.Post;
end;

procedure TFrmLookup.FormShow(Sender: TObject);
begin
  self.Caption := lbljudul.Caption;
end;

procedure TFrmLookup.SettingFont;
var
  fs : integer;
begin
  fs := getQValueInteger('select value from s_setting where name=''fontsize'' ');
  {dxRibbon1.Fonts.Group.Name       := 'Tahoma';
  dxRibbon1.Fonts.Group.Size       := fs - 1;
  dxRibbon1.Fonts.GroupHeader.Name := 'Tahoma';
  dxRibbon1.Fonts.GroupHeader.Size := fs - 1;
  dxRibbon1.Fonts.TabHeader.Name   := 'Tahoma';
  dxRibbon1.Fonts.TabHeader.Size   := fs - 1;
  PageHeader.Font.Name             := 'Tahoma';
  PageHeader.Font.Size             := fs - 1;}
  GRID_LOOKUP.Font.Name            := 'Tahoma';
  GRID_LOOKUP.Font.Size            := fs;

  {PageDetail.Font.Name             := 'Tahoma';
  PageDetail.Font.Size             := fs - 1;
  GRID_DETAIL1.Font.Name           := 'Tahoma';
  GRID_DETAIL1.Font.Size           := fs;}
end;

function TFrmLookup.LookupQuery(const Title:string; const Q:tzquery;
        const Width:integer;const MultiSelect:Boolean; hidecolumn:string='';
        tablename:string='';VisibleFirstColumn:Boolean=true;
        isLookupEdit:Boolean=False) : Boolean;
var
  k, x : integer;
  col : array[0..200] of TcxGridDBBandedColumn;
  lq : TcxEditRepositoryLookupComboBoxItem;
  qk, q_ds : tzquery;
  ds1 : tdatasource;
  tipe, caption, tabel : string;
  ts : tstringlist;
begin
  //dbg('1');
  if isLookupEdit then
  begin
    //dbg('edit');
    //VIEW_LOOKUP.Navigator.Visible     := True;
    VIEW_LOOKUP.Navigator.Buttons.Edit.Visible    := True;
    VIEW_LOOKUP.Navigator.Buttons.Cancel.Visible  := True;
    VIEW_LOOKUP.Navigator.Buttons.Post.Visible    := True;
    VIEW_LOOKUP.OptionsData.Appending := False;
    VIEW_LOOKUP.OptionsData.Deleting  := False;
    VIEW_LOOKUP.OptionsData.Editing   := True;
    VIEW_LOOKUP.OptionsData.Inserting := False;
  end else
  begin
    //VIEW_LOOKUP.Navigator.Visible     := False;
    VIEW_LOOKUP.Navigator.Buttons.Edit.Visible    := False;
    VIEW_LOOKUP.Navigator.Buttons.Cancel.Visible  := False;
    VIEW_LOOKUP.Navigator.Buttons.Post.Visible    := False;
    VIEW_LOOKUP.OptionsData.Appending := False;
    VIEW_LOOKUP.OptionsData.Deleting  := False;
    VIEW_LOOKUP.OptionsData.Editing   := False;
    VIEW_LOOKUP.OptionsData.Inserting := False;
  end;
  //dbg('2');
  if Q.RecordCount = 0 then
  begin
    MsgOK('No Data To Choose');
    result := false;
    exit;
  end;
  //dbg('3');
  ts := tstringlist.Create;
  ts.Clear;
  if trim(hidecolumn) <> '' then String2StringList(ts,hidecolumn,',');
  //pesan(q.SQL.Text);
  //pesan('ok : '+Replace( Q.SQL.Text,'from',' ,1 as choosedata from ') );
  LblJudul.Caption := '   '+Title;
  FrmLookup.Width := Width;
  DataSource1.DataSet := Q;
  VIEW_LOOKUP.DataController.Filter.AutoDataSetFilter := MultiSelect;
  VIEW_LOOKUP.ClearItems;
  VIEW_LOOKUP.DataController.DataSource := DataSource1;
  VIEW_LOOKUP.DataController.DataSource.DataSet := Q;
  //dbg('5');
  if tablename <> '' then
  begin
    //dbg('6');
    //procedure SetColumnWidth(id:string; q_master: TZQuery; grid:TcxGridDBBandedTableView; CreateColumn:Boolean=True);
    SetColumnWidth( getQValueString('select tag from s_module '+es+
                                    'where tablename='''+tablename+''' '), Q, VIEW_LOOKUP);

    //dbg('7');
    //VIEW_LOOKUP.Columns
  end else
  begin
    //dbg('8');
    q_ds := tzquery.CreateQuery;
    qk   := tzquery.CreateQuery;
    ds1  := tdatasource.Create(nil);
    lq := TcxEditRepositoryLookupComboBoxItem.Create(nil);

    for x := 0 to Q.FieldCount-1 do
    begin  //begin for
      col[x] := VIEW_LOOKUP.CreateColumn;

      col[x].DataBinding.FieldName := Q.Fields[x].FieldName;
      caption := replace(Q.Fields[x].FieldName,'_id','');
      caption := replace(Caption,'_',' ');
      Caption := SentencesCase(Caption);
      //caption := getCaption(Q.Fields[x].FieldName);
      col[x].Caption := caption;
      if tablename <> '' then
      begin
        qk.Query('select * from s_kolom where '+
                         'columnname='''+col[x].DataBinding.FieldName+''' and '+
                         'tablename='''+tablename+''' ');
        //dbg(qk.SQL.Text);
        if qk.RecordCount > 0 then
        begin
          {dbg('caption : '+qk.getFieldString('captionname')+#13+#10+
              'length  : '+qk.getFieldString('length')+#13+#10+
              'tablename : '+qk.getFieldString('tablename'));}
          col[x].Caption := qk.getFieldString('captionname');
          col[x].Width   := qk.getFieldInteger('length');
          if qk.getFieldInteger('length') = 0 then
          begin
            col[x].VisibleForCustomization := false;
            col[x].Visible := false;
          end;
        end;
      end;
      col[x].DataBinding.ValueType := 'string' ;
      if uppercase(RightStr(Q.Fields[x].FieldName,3)) = '_ID' then
      begin
        tabel := 'm_'+MidStr(Q.Fields[x].FieldName,0,
                             length(Q.Fields[x].FieldName)-3 );
        {q_ds.query('show tables like '''+tabel+''' ');
        if q_ds.RecordCount > 0 then
        begin}
        if isTableExist(tabel) = true then
        begin
          lq := TcxEditRepositoryLookupComboBoxItem.Create(nil);
          q_ds := tzquery.CreateQuery;
          ds1  := tdatasource.Create(nil);

          q_ds.query('select '+MidStr(Q.Fields[x].FieldName,0,
                             length(Q.Fields[x].FieldName)-3 )+
                   '_id, name from m_'+MidStr(Q.Fields[x].FieldName,0,
                             length(Q.Fields[x].FieldName)-3 ));
          ds1.DataSet := Q_ds;
          lq.Properties.ListSource := ds1;
          lq.Properties.KeyFieldNames := MidStr(Q.Fields[x].FieldName,0,
                                     length(Q.Fields[x].FieldName)-3 )+'_id';
          lq.Properties.ListFieldNames := 'name';
          col[x].RepositoryItem := lq;
        end;
      end else
      begin
        tipe         := vartostr(Q.Fields[x].DataType);
        col[x].RepositoryItem := getRepository(tipe);
      end;
      if tablename = '' then col[x].ApplyBestFit;
    end;  //end for
  end;

  //dbg('9');
  for x := 0 to Q.FieldCount-1 do
  begin
    //dbg('10');
    for k := 0 to ts.Count - 1 do
    begin
      if lowercase(Q.Fields[x].FieldName) = lowercase(ts.Strings[k]) then
      begin
        VIEW_LOOKUP.Columns[x].VisibleForCustomization := false;
        VIEW_LOOKUP.Columns[x].Visible := false;
      end;
    end;
  end;
  //dbg('11');
  if getuserlogin <> 'l' then
  begin
    if tablename <> '' then
    begin
      SetUserKolom(tablename, VIEW_Lookup);
    end;
  end;
  //dbg('12');
  if VisibleFirstColumn then
  begin
    //dbg('13');
    VIEW_LOOKUP.Columns[0].Visible := false;
    VIEW_LOOKUP.Columns[0].VisibleForCustomization := false;
    VIEW_LOOKUP.Columns[0].Options.Editing := false;
  end;
  //dbg('14');
  if FrmLookup.ShowModal =mrOK then
  begin
    lq.Free;
    ds1.Free;
    q_ds.Free;
    qk.Free;
    ts.Free;
    result := true;
  end else
  begin
    lq.Free;
    ds1.Free;
    q_ds.Free;
    qk.Free;
    ts.Free;
    result := false;
  end;

end;


end.
