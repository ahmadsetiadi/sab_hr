object FrmReminder: TFrmReminder
  Left = 390
  Top = 66
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = 'Reminder'
  ClientHeight = 574
  ClientWidth = 1131
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  FormStyle = fsStayOnTop
  OldCreateOrder = False
  Position = poScreenCenter
  OnClose = FormClose
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object pnlCustomize: TPanel
    Left = 0
    Top = 525
    Width = 1131
    Height = 49
    Align = alBottom
    Color = 15451300
    TabOrder = 0
    object BtnExport: TcxButton
      Left = 8
      Top = 6
      Width = 75
      Height = 25
      Caption = '&Export'
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
      OnClick = BtnExportClick
      OnKeyDown = BtnExportKeyDown
    end
    object BtnClose: TcxButton
      Left = 191
      Top = 8
      Width = 75
      Height = 25
      Caption = 'C&lose'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      ModalResult = 2
      TabOrder = 1
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = BtnCloseClick
      OnKeyDown = BtnCloseKeyDown
    end
    object BtnSendEmail: TcxButton
      Left = 89
      Top = 8
      Width = 96
      Height = 25
      Caption = '&Send Email'
      LookAndFeel.NativeStyle = False
      LookAndFeel.SkinName = 'UserSkin'
      ModalResult = 1
      TabOrder = 2
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Comic Sans MS'
      Font.Style = [fsBold]
      ParentFont = False
      OnClick = BtnSendEmailClick
      OnKeyDown = BtnSendEmailKeyDown
    end
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 1131
    Height = 41
    Align = alTop
    BevelOuter = bvNone
    Color = 65021
    ParentBackground = False
    TabOrder = 1
    object LblJudul: TLabel
      AlignWithMargins = True
      Left = 10
      Top = 7
      Width = 281
      Height = 31
      Margins.Left = 10
      Margins.Top = 7
      Align = alLeft
      AutoSize = False
      Caption = 'Reminder'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      ExplicitHeight = 607
    end
  end
  object PageHeader: TcxPageControl
    Left = 0
    Top = 41
    Width = 1131
    Height = 484
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 2
    Properties.ActivePage = TabMaster
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 478
    ClientRectLeft = 3
    ClientRectRight = 1125
    ClientRectTop = 29
    object TabMaster: TcxTabSheet
      Caption = 'Reminder'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 1122
        Height = 449
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        TabOrder = 0
        object MASTER: TcxGridDBBandedTableView
          Navigator.Buttons.CustomButtons = <>
          Navigator.Buttons.First.Hint = 'First Record'
          Navigator.Buttons.PriorPage.Visible = False
          Navigator.Buttons.Prior.Hint = 'Prev Record'
          Navigator.Buttons.Next.Hint = 'Next Record'
          Navigator.Buttons.NextPage.Visible = False
          Navigator.Buttons.Last.Hint = 'Last Record'
          Navigator.Buttons.Insert.Hint = 'Add Record'
          Navigator.Buttons.Delete.Hint = 'Delete Record'
          Navigator.Buttons.Edit.Hint = 'Edit Record'
          Navigator.Buttons.Post.Hint = 'Save Record'
          Navigator.Buttons.Cancel.Hint = 'Cancel Operation'
          Navigator.Buttons.Refresh.Hint = 'Refresh Data'
          Navigator.Buttons.SaveBookmark.Visible = False
          Navigator.Buttons.GotoBookmark.Visible = False
          Navigator.Buttons.Filter.Hint = 'Filter Record'
          Navigator.InfoPanel.Visible = True
          DataController.DataSource = DS_MASTER
          DataController.Filter.AutoDataSetFilter = True
          DataController.Options = [dcoAssignGroupingValues, dcoAssignMasterDetailKeys, dcoSaveExpanding, dcoSortByDisplayText, dcoFocusTopRowAfterSorting, dcoInsertOnNewItemRowFocusing]
          DataController.Summary.DefaultGroupSummaryItems = <
            item
              Format = '#,##0.###0'
              Kind = skSum
              Position = spFooter
            end
            item
              Format = '#,##0'
              Kind = skSum
              Position = spFooter
            end
            item
              Format = '#,##0.#0'
              Kind = skSum
              Position = spFooter
            end>
          DataController.Summary.FooterSummaryItems = <
            item
              Format = '#,##0.###0'
              Kind = skSum
            end
            item
              Format = '#,##0'
              Kind = skSum
            end
            item
              Format = '#,##0.#0'
              Kind = skSum
            end>
          DataController.Summary.SummaryGroups = <>
          OptionsBehavior.FocusCellOnTab = True
          OptionsBehavior.FocusFirstCellOnNewRecord = True
          OptionsBehavior.GoToNextCellOnEnter = True
          OptionsBehavior.IncSearch = True
          OptionsBehavior.NavigatorHints = True
          OptionsCustomize.ColumnsQuickCustomization = True
          OptionsCustomize.BandMoving = False
          OptionsCustomize.BandsQuickCustomization = True
          OptionsData.CancelOnExit = False
          OptionsData.Deleting = False
          OptionsData.DeletingConfirmation = False
          OptionsData.Editing = False
          OptionsData.Inserting = False
          OptionsSelection.InvertSelect = False
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.BandHeaders = False
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_MASTERLevel1: TcxGridLevel
          GridView = MASTER
        end
      end
    end
  end
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_reminder'
      'where active=1')
    Params = <>
    Left = 152
    Top = 64
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 184
    Top = 64
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    Grid = GRID_MASTER
    PopupMenus = <>
    Left = 216
    Top = 64
  end
end
