unit UTreeView;

interface

uses
  Windows, Messages, StrUtils, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, cxGraphics, cxLookAndFeels, cxLookAndFeelPainters, Menus,
  cxControls, cxStyles, dxSkinsCore, dxSkinBlack, dxSkinBlue,
  dxSkinCaramel, dxSkinCoffee, dxSkinDarkRoom, dxSkinDarkSide, dxSkinFoggy,
  dxSkinGlassOceans, dxSkiniMaginary, dxSkinLilian, dxSkinLiquidSky,
  dxSkinLondonLiquidSky, dxSkinMcSkin, dxSkinMoneyTwins,
  dxSkinOffice2007Black, dxSkinOffice2007Blue, dxSkinOffice2007Green,
  dxSkinOffice2007Pink, dxSkinOffice2007Silver, dxSkinOffice2010Black,
  dxSkinOffice2010Blue, dxSkinOffice2010Silver, dxSkinPumpkin, dxSkinSeven,
  dxSkinSharp, dxSkinSilver, dxSkinSpringTime, dxSkinStardust,
  dxSkinSummer2008, dxSkinsDefaultPainters, dxSkinValentine,
  dxSkinXmas2008Blue, dxSkinscxPCPainter, cxCustomData, cxFilter, cxData,
  cxDataStorage, cxEdit, DB, cxDBData, cxGridLevel, cxClasses,
  cxGridCustomView, cxGridCustomTableView, cxGridTableView,
  cxGridDBTableView, cxGrid, ZAbstractRODataset, ZAbstractDataset,
  ZDataset, StdCtrls, cxButtons, ExtCtrls, cxDBEditRepository, dxRibbon,
  dxRibbonForm, cxContainer, cxTextEdit, cxMaskEdit, cxDropDownEdit,
  cxCalendar, cxDBEdit, dxSkinBlueprint, dxSkinDevExpressDarkStyle,
  dxSkinDevExpressStyle, dxSkinHighContrast, dxSkinOffice2013White,
  dxSkinSevenClassic, dxSkinSharpPlus, dxSkinTheAsphaltWorld, dxSkinVS2010,
  dxSkinWhiteprint, dxRibbonSkins, dxSkinsdxRibbonPainter, Vcl.ComCtrls, dxCore,
  cxDateUtils, dxGDIPlusClasses, System.Actions, Vcl.ActnList, cxTreeView,
  Vcl.ImgList;

type
  TFrmTreeView = class(TForm)
    pnlCustomize: TPanel;
    btnClose: TcxButton;
    ZQuery1: TZQuery;
    DataSource1: TDataSource;
    ActionList1: TActionList;
    actCopy: TAction;
    Label1: TLabel;
    BtnSave: TcxButton;
    TreeView: TcxTreeView;
    txtID_User: TEdit;
    ImageTreeView: TImageList;
    ImageList1: TImageList;
    txtID_Module: TEdit;
    txtTipe: TEdit;
    txtKolom1: TEdit;
    txtKolom2: TEdit;
    procedure SaveTreeView;
    procedure SaveColumn;
    procedure FormActivate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure actCopyExecute(Sender: TObject);
    procedure Memo1KeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure BtnSaveClick(Sender: TObject);
    procedure isiTreeView;
    procedure isiTreeView2(tipe, sql:string; isi:string='');
    procedure SaveUserModule;
    procedure SaveSecurity;
    procedure TreeViewClick(Sender: TObject);
    procedure TreeViewKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmTreeView: TFrmTreeView;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmTreeView.actCopyExecute(Sender: TObject);
begin
  //dbg('1');
  //memo1.CopyToClipboard;
end;

procedure TFrmTreeView.btnCloseClick(Sender: TObject);
begin
  close;
end;
procedure TFrmTreeView.FormActivate(Sender: TObject);
begin
Top := (Screen.Height - 30 - Height) div 2;
Left := (Screen.Width - Width) div 2;
end;

procedure TFrmTreeView.FormCreate(Sender: TObject);
begin
  //
end;

procedure TFrmTreeView.FormShow(Sender: TObject);
begin
  isDebug := True;
  TreeView.FullExpand;
  TreeView.SetFocus;
  TreeView.Items[0].Selected;
end;
procedure tfrmtreeview.isiTreeView;
var
  qf, q1, q2 : tzquery;
  x, k : integer;
  syarat : string;
  td0, td1 : TTreeNode;
begin
  //syarat := ' ( id_module not in (50,51,52,53) ) ';
  syarat := ' (0=0) ';
  TreeView.Items.Clear;
  TreeView.Items.Add(nil, 'CHICKENTOWN');
  qf := CreateQuery;
  q1 := CreateQuery;
  q2 := CreateQuery;

  qf.Query('select * from s_module where active=1 and parentid=0 and '+syarat+' order by no');
  qf.First;
  x := 1;
  while not qf.Eof do
  begin
    td0 := TreeView.Items.AddChild( TreeView.Items[0], qf.getFieldString('name') );
	  q1.Query('select * from s_module where isdetail=0 and active=1 and parentid='''+qf.getFieldString('id_module')+''' and '+syarat+' order by no');
	  q1.First;
      while not q1.Eof do
      begin
        td1 := TreeView.Items.AddChild( td0, q1.getFieldString('name') );
          q2.Query('select * from s_module where isdetail=0 and active=1 and parentid='''+q1.getFieldString('id_module')+''' and '+syarat+' order by no');
          q2.First;
          while not q2.Eof do
          begin
            TreeView.Items.AddChild( td1, q2.getFieldString('name') );
            q2.Next;
          end;
        x := x + q2.RecordCount + 1;
        q1.Next;
      end;
	x := x + q1.RecordCount + 1;
    qf.Next;
  end;

  for x := 1 to TreeView.Items.Count - 1 do
  begin
    if getQValueInteger('select folder from s_module where name='''+
                        TreeView.Items[x].Text+''' ') = 0 then
    begin
      TreeView.Items[x].ImageIndex := 1;
      TreeView.Items[x].SelectedIndex := 1;
      TreeView.Items[x].ImageIndex := 0;
      TreeView.Items[x].SelectedIndex := 0;
    end else
    begin
      TreeView.Items[x].ImageIndex := 0;
      TreeView.Items[x].SelectedIndex := 0;
    end;

    if getQValueInteger('select count(*) from s_usermodule where modulename='''+
                        TreeView.Items[x].Text+''' and id_usergroup='''+txtID_User.Text+''' ') >= 1 then
    begin
      TreeView.Items[x].ImageIndex := 1;
      TreeView.Items[x].SelectedIndex := 1;
    end;
    TreeView.Items[x].StateIndex :=
     getQValueInteger('select tag from s_module where name='''+TreeView.Items[x].Text+''' ');
  end;

  TreeView.Items[0].ImageIndex := -1;
  TreeView.Items[0].SelectedIndex := -1;

  qf.Free;
  q1.Free;
end;
procedure TFrmTreeView.isiTreeView2(tipe, sql:string; isi:string='');
var
  qf : tzquery;
  x,k  : integer;
  nd : TTreeNode;
  tsi : tstringlist;
begin
  TreeView.Items.Clear;
  TreeView.Items.Add(nil, tipe );
  qf := CreateQuery;


  qf.Query(Replace(sql,'$syarat', ' (0=0) '));
  qf.First;
  x := 1;
  while not qf.Eof do
  begin
    nd := TreeView.Items.AddChild( TreeView.Items[0], qf.getColumnString(1) );
    nd.ImageIndex     := 0;
    nd.SelectedIndex  := 0;
    nd.StateIndex     := qf.getColumnInteger(0);
    x := x + 1;
    qf.Next;
  end;

  tsi := tstringlist.Create;
  String2StringList(tsi, isi, ',');
  for x := 1 to TreeView.Items.Count - 1 do
  begin
    TreeView.Items[x].ImageIndex    := 0;
    TreeView.Items[x].SelectedIndex := 0;
    {if lowercase(tipe) = 'hide column' then
    begin
      TreeView.Items[x].StateIndex    :=
       getQValueInteger(Replace(sql,'$syarat', ' columnname='''+TreeView.Items[x].Text+''' '));
    end else
    begin
      TreeView.Items[x].StateIndex    :=
       getQValueInteger(Replace(sql,'$syarat', ' name='''+TreeView.Items[x].Text+''' '));
    end;}
    for k := 0 to tsi.Count-1 do
    begin
      if lowercase(tsi.Strings[k]) = lowercase(TreeView.Items[x].Text) then
      begin
        TreeView.Items[x].ImageIndex    := 1;
        TreeView.Items[x].SelectedIndex := 1;
      end;
    end;
  end;

  TreeView.Items[0].ImageIndex    := -1;
  TreeView.Items[0].SelectedIndex := -1;

  qf.Free;
  tsi.Free;
end;


procedure TFrmTreeView.Memo1KeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then close;

end;

procedure TFrmTreeView.TreeViewClick(Sender: TObject);
begin
  if TreeView.Selected.ImageIndex < 0 then exit;
  if TreeView.Selected.SelectedIndex = 0 then
  begin
    treeview.Selected.SelectedIndex := 1;
    TreeView.Selected.ImageIndex    := 1;
    treeview.Selected.SelectedIndex := 0;
    TreeView.Selected.ImageIndex    := 0;
    treeview.Selected.SelectedIndex := 1;
    TreeView.Selected.ImageIndex    := 1;
  end else
  begin
    if txtTipe.Text = 'usermodule' then
    begin
      if confirm('Do You Want to Delete This Module ?') = 'YES' then
      begin
        treeview.Selected.SelectedIndex := 0;
        TreeView.Selected.ImageIndex    := 0;
      end;
    end else
    begin
      treeview.Selected.SelectedIndex := 0;
      TreeView.Selected.ImageIndex    := 0;
    end;
  end;
end;

procedure TFrmTreeView.TreeViewKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 27 then close;
  if key = 13 then begin BtnSaveClick(sender); ModalResult := mrOk; end;
  if key = 32 then TreeViewClick(sender);
end;

procedure TFrmTreeView.SaveUserModule;
var
  x : integer;
  idu, idm : string;
  qm : tzquery;
begin
  ShowProgressbar;
  idu := txtID_User.Text;
  qm  := createquery;
  for x := 0 to TreeView.Items.Count - 1 do
  begin
    SetProgressbar('Processing', (x*100) div TreeView.Items.Count );
    idm := inttostr(getQValueInteger('select id_module from s_module '+es+
                'where name='''+TreeView.Items[x].Text+''' and tag='''+
                inttostr(TreeView.Items[x].StateIndex)+''' '));
    if TreeView.Items[x].ImageIndex = 1 then
    begin
      qm.Query('select * from s_usermodule where id_usergroup='''+idu+''' and id_module='''+idm+''' ');
      if qm.RecordCount > 0 then
      begin
        qm.Edit;
        isiKolomUser(false, qm);
      end else
      begin
        qm.Append;
        isiKolomUser(true, qm);
        qm.SetMultiField('insert,edit,delete,export,menu,print', '1');
      end;
      qm.setField('id_usergroup', idu );
      qm.setField('id_module', idm );
      qm.setField('groupname', getQValueString('select groupname from s_usergroup where id_usergroup='''+idu+''' '));
      qm.setField('modulename', getQValueString('select name from s_module where id_module='''+idm+''' '));
      qm.Post;
    end else
    begin
      ExecuteSQL('delete from s_usermodule where id_usergroup='''+idu+''' and id_module='''+idm+''' ');
    end;
  end;

  qm.Free;
  HideProgressbar;
end;
procedure TFrmTreeView.SaveSecurity;
var
  x : integer;
  kol1, kol2, idu, idm : string;
  qm : tzquery;
begin
  ShowProgressbar;
  idu := txtID_User.Text;
  idm := txtID_Module.Text;
  qm  := createquery;
  kol1:= '';
  kol2:= '';
  for x := 0 to TreeView.Items.Count - 1 do
  begin
    SetProgressbar('Processing', (x*100) div TreeView.Items.Count );
    if TreeView.Items[x].ImageIndex = 1 then
    begin
      kol1 := kol1 + inttostr(TreeView.Items[x].StateIndex) + ',' ;
      kol2 := kol2 + TreeView.Items[x].Text + ',' ;
    end;
  end;

  kol1 := HilangkanKomaBelakang(kol1);
  kol2 := HilangkanKomaBelakang(kol2);

  qm.Query('select * from s_security where id_user='''+idu+''' and id_module='''+idm+''' ');
  //dbg(qm.SQL.Text);
  if qm.RecordCount > 0 then
  begin
    qm.Edit;
    isiKolomUser(false, qm);
  end else
  begin
    qm.Append;
    isiKolomUser(true, qm);
  end;
  qm.setField('id_user', idu );
  qm.setField('id_module', idm );
  qm.setField('username', getQValueString('select username from s_user where id_user='''+idu+''' '));
  qm.setField('modulename', getQValueString('select name from s_module where id_module='''+idm+''' '));
  qm.setField(txtKolom1.Text, kol1 );
  qm.setField(txtKolom2.Text, kol2 );
  qm.Post;

  qm.Free;
  HideProgressbar;
end;
procedure TFrmTreeView.SaveTreeView;
var
  x : integer;
  kol1, idu, idm : string;
  qm : tzquery;
begin
  ShowProgressbar;
  idu := txtID_User.Text;
  idm := txtID_Module.Text;
  qm  := createquery;
  kol1:= '';
  for x := 0 to TreeView.Items.Count - 1 do
  begin
    SetProgressbar('Processing', (x*100) div TreeView.Items.Count );
    if TreeView.Items[x].ImageIndex = 1 then kol1 := kol1 + TreeView.Items[x].Text + ',' ;
  end;

  kol1 := HilangkanKomaBelakang(kol1);

  qm.Query('select * from s_usermodule where id_usergroup='''+idu+''' and id_module='''+idm+''' ');
  //dbg(qm.SQL.Text);
  if qm.RecordCount > 0 then
  begin
    qm.Edit;
    isiKolomUser(false, qm);
  end else
  begin
    qm.Append;
    isiKolomUser(true, qm);
  end;
  qm.setField('id_usergroup', idu );
  qm.setField('id_module', idm );
  qm.setField('groupname', getQValueString('select groupname from s_usergroup where id_usergroup='''+idu+''' '));
  qm.setField('modulename', getQValueString('select name from s_module where id_module='''+idm+''' '));
  qm.setField(txtKolom1.Text, kol1 );
  qm.Post;

  qm.Free;
  HideProgressbar;
end;
procedure TFrmTreeView.SaveColumn;
var
  x : integer;
  kol1, kol2, idu, idm : string;
  qm : tzquery;
begin
  ShowProgressbar;
  idu := txtID_User.Text;
  idm := txtID_Module.Text;
  qm  := createquery;
  kol1:= '';
  kol2:= '';
  for x := 0 to TreeView.Items.Count - 1 do
  begin
    SetProgressbar('Processing', (x*100) div TreeView.Items.Count );
    if TreeView.Items[x].ImageIndex = 1 then
    begin
      //kol1 := kol1 + getQValueString('select columnname from s_kolom where kolom_id='''+inttostr(TreeView.Items[x].StateIndex)+''' and id_module='''+idm+''' ') + ',' ;
      kol1 := kol1 + inttostr(TreeView.Items[x].StateIndex) + ',' ;
      kol2 := kol2 + TreeView.Items[x].Text + ',' ;
    end;
  end;

  kol1 := HilangkanKomaBelakang(kol1);
  kol2 := HilangkanKomaBelakang(kol2);

  qm.Query('select * from s_usermodule where id_usergroup='''+idu+''' and id_module='''+idm+''' ');
  //dbg(qm.SQL.Text);
  if qm.RecordCount > 0 then
  begin
    qm.Edit;
    isiKolomUser(false, qm);
  end else
  begin
    qm.Append;
    isiKolomUser(true, qm);
  end;
  qm.setField('id_usergroup', idu );
  qm.setField('id_module', idm );
  qm.setField('groupname', getQValueString('select groupname from s_usergroup where id_usergroup='''+idu+''' '));
  qm.setField('modulename', getQValueString('select name from s_module where id_module='''+idm+''' '));
  qm.setField(txtKolom1.Text, kol1 );
  qm.setField(txtKolom2.Text, kol2 );
  qm.Post;

  qm.Free;
  HideProgressbar;
end;
procedure TFrmTreeView.BtnSaveClick(Sender: TObject);
begin
  if txtTipe.Text = 'usermodule' then
  begin
    SaveUserModule;
  end else
  if txtTipe.Text = 'security' then
  begin
    SaveSecurity;
  end else
  if txtTipe.Text = 'menu' then
  begin
    SaveTreeView;
  end else
  if txtTipe.Text = 'column' then
  begin
    SaveColumn;
  end else
  begin
  end;
end;



end.
