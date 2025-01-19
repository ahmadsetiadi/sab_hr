unit UCombo;

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
  cxDateUtils, cxCalc, dxSkinMetropolis, dxSkinMetropolisDark,
  dxSkinOffice2013DarkGray, dxSkinOffice2013LightGray, dxSkinOffice2016Colorful,
  dxSkinOffice2016Dark, dxSkinVisualStudio2013Blue, dxSkinVisualStudio2013Dark,
  dxSkinVisualStudio2013Light;

type
  TFrmCombo = class(TForm)
    LblJudul: TLabel;
    pnlCustomize: TPanel;
    btnSet: TcxButton;
    btnAdd: TcxButton;
    ZQuery1: TZQuery;
    DataSource1: TDataSource;
    CBTgl: TcxDateEdit;
    TXT: TcxTextEdit;
    Cbo: TcxComboBox;
    Clc: TcxCalcEdit;
    procedure btnAddClick(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    function ComboForm(Title:string; Tipe:String) : string;
    procedure FormShow(Sender: TObject);
    procedure TXTKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure CboKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure CBTglKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure ClcKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  FrmCombo: TFrmCombo;

implementation

{$R *.dfm}
uses unit1, UMenuLogin;
function tfrmcombo.ComboForm(Title:string; Tipe:String) : string;
var
  x, hasil : string;
begin
  result := '';
  LblJudul.Caption := Title;
  x       := LowerCase(tipe);
  result  := '';
  if x = 'tanggal' then
  begin
    CBTgl.Visible := true;
    hasil         := formatdatetime('yyyy-MM-dd',CBTgl.Date);
  end;
end;
procedure TFrmCombo.btnAddClick(Sender: TObject);
begin
  ModalResult := mrNone;
  close;
end;

procedure TFrmCombo.FormActivate(Sender: TObject);
begin
  Top := (Screen.Height - 30 - Height) div 2;
  Left := (Screen.Width - Width) div 2;
  if TipeCombo = 'tanggal' then
  begin
    CBTgl.SetFocus;
  end else
  if TipeCombo = 'text' then
  begin
    TXT.SetFocus;
  end else
  if TipeCombo = 'calc' then
  begin
    Clc.SetFocus;
  end else
  if TipeCombo = 'combobox' then
  begin
    Cbo.SetFocus;
  end;

end;

procedure TFrmCombo.FormShow(Sender: TObject);
begin
  cbtgl.Date  := ServerDate;
  txt.Text    := '';
  if cbo.Visible then
  begin
    if cbo.Properties.Items.Count > 0 then
    begin
      cbo.Text := cbo.Properties.Items[0];
    end;
  end;

  if lowercase(LblJudul.Caption)='isi tgl lebaran' then
  begin
    cbtgl.Date := EncodeDate(2019, 6, 5);
  end;

  if lowercase(LblJudul.Caption)='isi tgl dibagikan thr' then
  begin
   cbtgl.Date := EncodeDate(2019, 5, 29);
  end;

  if lowercase(LblJudul.Caption)='isi maksimal joindate' then
  begin
    cbtgl.Date := EncodeDate(2019, 4, 30);
  end;

  if lowercase(LblJudul.Caption)='isi minimal resigndate' then
  begin
    cbtgl.Date := EncodeDate(2019, 5, 30);
  end;

  if lowercase(LblJudul.Caption)='isi cut off batas masa kerja' then
  begin
    cbtgl.Date := EncodeDate(2019, 5, 30);
  end;
end;

procedure TFrmCombo.TXTKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then
  begin
    ModalResult := mrOk;
  end;
end;

procedure TFrmCombo.CboKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then
  begin
    ModalResult := mrOk;
  end;
end;

procedure TFrmCombo.CBTglKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  if key = 13 then
  begin
    ModalResult := mrOk;
  end;
end;

procedure TFrmCombo.ClcKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 // dbg(key);
  if key = 13 then
  begin
    ModalResult := mrOk;
  end;
  if key = 27 then
  begin
    modalresult := mrNone;
    close;
  end;
end;

end.
