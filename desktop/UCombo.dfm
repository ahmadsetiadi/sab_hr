object FrmCombo: TFrmCombo
  Left = 276
  Top = 247
  BorderIcons = [biSystemMenu]
  Caption = 'Combo Form'
  ClientHeight = 142
  ClientWidth = 381
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  OnActivate = FormActivate
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object LblJudul: TLabel
    Left = 0
    Top = 0
    Width = 381
    Height = 41
    Align = alTop
    AutoSize = False
    Caption = '  Type city name to incremental search'
    Color = 4707838
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clBlack
    Font.Height = -19
    Font.Name = 'Tahoma'
    Font.Style = [fsBold, fsItalic]
    ParentColor = False
    ParentFont = False
    Layout = tlCenter
    WordWrap = True
    ExplicitTop = 27
  end
  object pnlCustomize: TPanel
    Left = 0
    Top = 93
    Width = 381
    Height = 49
    Align = alBottom
    Color = 15451300
    TabOrder = 4
    object btnSet: TcxButton
      Left = 8
      Top = 8
      Width = 75
      Height = 25
      Caption = '&Pilih'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      ModalResult = 1
      TabOrder = 0
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object btnAdd: TcxButton
      Left = 89
      Top = 8
      Width = 75
      Height = 25
      Caption = '&Tutup'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      TabOrder = 1
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = btnAddClick
    end
  end
  object CBTgl: TcxDateEdit
    Left = 19
    Top = 58
    RepositoryItem = MenuLogin.RepDate
    ParentFont = False
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -15
    Style.Font.Name = 'Tahoma'
    Style.Font.Style = []
    Style.IsFontAssigned = True
    TabOrder = 3
    Visible = False
    OnKeyDown = CBTglKeyDown
    Width = 354
  end
  object TXT: TcxTextEdit
    Left = 19
    Top = 57
    ParentFont = False
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -13
    Style.Font.Name = 'Trebuchet MS'
    Style.Font.Style = []
    Style.IsFontAssigned = True
    TabOrder = 2
    Visible = False
    OnKeyDown = TXTKeyDown
    Width = 354
  end
  object Cbo: TcxComboBox
    Left = 20
    Top = 56
    ParentFont = False
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -13
    Style.Font.Name = 'Trebuchet MS'
    Style.Font.Style = []
    Style.IsFontAssigned = True
    TabOrder = 1
    Text = 'Cbo'
    Visible = False
    OnKeyDown = CboKeyDown
    Width = 353
  end
  object Clc: TcxCalcEdit
    Left = 20
    Top = 56
    EditValue = 0.000000000000000000
    ParentFont = False
    Style.Font.Charset = ANSI_CHARSET
    Style.Font.Color = clWindowText
    Style.Font.Height = -13
    Style.Font.Name = 'Trebuchet MS'
    Style.Font.Style = []
    Style.IsFontAssigned = True
    TabOrder = 0
    OnKeyDown = ClcKeyDown
    Width = 353
  end
  object ZQuery1: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select costcenter_id, name from m_costcenter')
    Params = <>
    Left = 256
  end
  object DataSource1: TDataSource
    DataSet = ZQuery1
    Left = 296
    Top = 8
  end
end
