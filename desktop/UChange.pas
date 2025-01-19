unit UChange;

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
  dxSkinWhiteprint, dxRibbonSkins, dxSkinsdxRibbonPainter, cxPCdxBarPopupMenu,
  cxPC;

type
  TFrmChange = class(TForm)
    pnlCustomize: TPanel;
    BtnChange: TcxButton;
    BtnClose: TcxButton;
    Label1: TLabel;
    txtOld: TcxTextEdit;
    txtNew: TcxTextEdit;
    Label2: TLabel;
    txtConfirm: TcxTextEdit;
    Label3: TLabel;
    procedure FormActivate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure BtnCloseClick(Sender: TObject);
    procedure BtnChangeClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure txtOldKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure txtNewKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure txtConfirmKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmChange: TFrmChange;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
procedure TFrmChange.FormActivate(Sender: TObject);
begin
  //Top := (Screen.Height - 30 - Height) div 2;
  //Left := (Screen.Width - Width) div 2;
end;

procedure TFrmChange.FormShow(Sender: TObject);
begin
  txtOld.Text         := '';
  txtNew.Text         := '';
  txtConfirm.Text     := '';
  txtold.SetFocus;
end;

procedure TFrmChange.BtnCloseClick(Sender: TObject);
begin
  close;
end;

procedure TFrmChange.BtnChangeClick(Sender: TObject);
var
  old, namatabel, namakolom, userid : string;
  Q : TZQuery;
begin
  if (lowercase(MenuLogin.StatusBar.Panels[0].Text) = 'l') or (lowercase(MenuLogin.StatusBar.Panels[0].Text) = 'admin') then
  begin
     MsgError('Can''t Change Password For Username : "'+MenuLogin.StatusBar.Panels[0].Text+'"');
    exit;
  end;

  Q := createquery;
  q.Query('select id_user, username, password from s_user where username='''+MenuLogin.StatusBar.Panels[0].Text +''' ');
  if q.RecordCount = 0 then
  begin
    q.Query('select id_user, username, password from s_user where username='''+MenuLogin.StatusBar.Panels[0].Text +''' ');
    if q.RecordCount = 0 then
    begin
      MsgError('Username not Found');
    end else
    begin
      old         := q.getFieldString('password');
      namatabel   := 's_user';
      namakolom   := 'id_user';
      userid      := q.getFieldString(namakolom);
    end;
  end else
  begin
    old         := q.getFieldString('password');
    namatabel   := 's_user';
    namakolom   := 'id_user';
    userid      := q.getFieldString(namakolom);
  end;
  q.free;
  //old := getQValue('select `password` from s_user where username='''+MenuLogin.StatusBar.Panels[0].Text +''' ');
  if ConvertToMD5(txtOld.Text) <> old then
  begin
    MsgError('The Old Password is Wrong');
    txtOld.Text         := '';
    txtNew.Text         := '';
    txtConfirm.Text     := '';
    txtold.SetFocus;
    exit;
  end;
//  ShowMessage(old);
  if txtNew.Text <> txtConfirm.Text then
  begin
    MsgError('New and Confirm Password is Not Same');
    txtNew.Text         := '';
    txtConfirm.Text     := '';
    txtnew.SetFocus;
    exit;
  end;

  ExecuteSQL('update '+namatabel+' set `password`='''+
              ConvertToMD5(txtnew.Text)+''' '+
              'where username='''+MenuLogin.StatusBar.Panels[0].Text +''' ');
  MsgOK('Password telah diubah');
  txtNew.Text         := '';
  txtConfirm.Text     := '';
  txtold.Text         := '';
  close;
end;

procedure TFrmChange.FormCreate(Sender: TObject);
begin
{  RibbonColor(label1);
  RibbonColor(label2);
  RibbonColor(label3);}
end;

procedure TFrmChange.txtOldKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then txtnew.SetFocus;
end;

procedure TFrmChange.txtNewKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then txtConfirm.SetFocus;
end;

procedure TFrmChange.txtConfirmKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then BtnChangeClick(sender);
end;

end.
