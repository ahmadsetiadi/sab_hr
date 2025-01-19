object FrmImport: TFrmImport
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  Caption = 'Import From Excel'
  ClientHeight = 504
  ClientWidth = 604
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormStyle = fsStayOnTop
  OldCreateOrder = False
  Position = poScreenCenter
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 604
    Height = 113
    Align = alTop
    TabOrder = 0
    object txtFilename: TcxTextEdit
      Left = 97
      Top = 11
      Margins.Left = 0
      Margins.Top = 10
      Margins.Right = 400
      Margins.Bottom = 0
      ParentFont = False
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -16
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 0
      Width = 351
    end
    object cxLabel1: TcxLabel
      Left = 1
      Top = 15
      Caption = 'Filename'
      ParentFont = False
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -16
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      Transparent = True
    end
    object btnFilename: TcxButton
      Left = 456
      Top = 12
      Width = 41
      Height = 26
      Margins.Top = 5
      Margins.Right = 400
      Caption = '...'
      LookAndFeel.SkinName = 'UserSkin'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 2
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Style = []
      ParentFont = False
      OnClick = btnFilenameClick
    end
    object BtnCekFile: TcxButton
      Left = 97
      Top = 76
      Width = 120
      Height = 26
      Margins.Top = 5
      Margins.Right = 400
      Caption = '&Check File'
      LookAndFeel.SkinName = 'UserSkin'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 3
      Visible = False
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Style = []
      ParentFont = False
      OnClick = BtnCekFileClick
    end
    object BtnImport: TcxButton
      Left = 351
      Top = 76
      Width = 97
      Height = 26
      Margins.Top = 5
      Margins.Right = 400
      Caption = '&Import'
      LookAndFeel.SkinName = 'UserSkin'
      ParentShowHint = False
      ShowHint = True
      TabOrder = 4
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Style = []
      ParentFont = False
      OnClick = BtnImportClick
    end
    object cxLabel2: TcxLabel
      Left = 1
      Top = 44
      Caption = 'Sheet Name'
      ParentFont = False
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -16
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      Transparent = True
    end
    object CboSheet: TcxComboBox
      Left = 96
      Top = 41
      ParentFont = False
      Properties.OnChange = CboSheetPropertiesChange
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -16
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 6
      Width = 351
    end
    object Button1: TButton
      Left = 256
      Top = 74
      Width = 75
      Height = 25
      Caption = 'Button1'
      TabOrder = 7
      Visible = False
      OnClick = Button1Click
    end
  end
  object GRID_MASTER: TcxGrid
    Left = 0
    Top = 113
    Width = 604
    Height = 391
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 1
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
      Navigator.Visible = True
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
      OptionsData.Appending = True
      OptionsSelection.MultiSelect = True
      OptionsSelection.CellMultiSelect = True
      OptionsSelection.InvertSelect = False
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
      object MASTERid_module: TcxGridDBBandedColumn
        Caption = 'Module Name'
        DataBinding.FieldName = 'id_module'
        PropertiesClassName = 'TcxLookupComboBoxProperties'
        Properties.KeyFieldNames = 'id_module'
        Properties.ListColumns = <
          item
            FieldName = 'name'
          end>
        Properties.ListSource = DS_Module
        Options.Editing = False
        Width = 179
        Position.BandIndex = 0
        Position.ColIndex = 0
        Position.RowIndex = 0
      end
      object MASTERtablename: TcxGridDBBandedColumn
        DataBinding.FieldName = 'tablename'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 1
        Position.RowIndex = 0
      end
      object MASTERno: TcxGridDBBandedColumn
        DataBinding.FieldName = 'no'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 2
        Position.RowIndex = 0
      end
      object MASTERcolumnexcel: TcxGridDBBandedColumn
        Caption = 'Column Excel'
        DataBinding.FieldName = 'columnexcel'
        PropertiesClassName = 'TcxLookupComboBoxProperties'
        Properties.KeyFieldNames = 'columnname'
        Properties.ListColumns = <
          item
            FieldName = 'columnname'
          end>
        Properties.ListSource = DS_Column
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 5
        Position.RowIndex = 0
      end
      object MASTERcolumnname: TcxGridDBBandedColumn
        Caption = 'Column Database'
        DataBinding.FieldName = 'columnname'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 3
        Position.RowIndex = 0
      end
      object MASTERcaptionname: TcxGridDBBandedColumn
        Caption = 'Column Database'
        DataBinding.FieldName = 'captionname'
        Options.Editing = False
        Width = 158
        Position.BandIndex = 0
        Position.ColIndex = 4
        Position.RowIndex = 0
      end
      object MASTERkolom_id: TcxGridDBBandedColumn
        DataBinding.FieldName = 'kolom_id'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 6
        Position.RowIndex = 0
      end
      object MASTERcolumntype: TcxGridDBBandedColumn
        DataBinding.FieldName = 'columntype'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 7
        Position.RowIndex = 0
      end
      object MASTERlength: TcxGridDBBandedColumn
        DataBinding.FieldName = 'length'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 8
        Position.RowIndex = 0
      end
      object MASTER_visible: TcxGridDBBandedColumn
        DataBinding.FieldName = '_visible'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 9
        Position.RowIndex = 0
      end
      object MASTER_readonly: TcxGridDBBandedColumn
        DataBinding.FieldName = '_readonly'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 10
        Position.RowIndex = 0
      end
      object MASTERtipekolom: TcxGridDBBandedColumn
        DataBinding.FieldName = 'tipekolom'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 11
        Position.RowIndex = 0
      end
      object MASTERisi: TcxGridDBBandedColumn
        DataBinding.FieldName = 'isi'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 12
        Position.RowIndex = 0
      end
      object MASTERlistfieldnames: TcxGridDBBandedColumn
        DataBinding.FieldName = 'listfieldnames'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 13
        Position.RowIndex = 0
      end
      object MASTERkeyfieldnames: TcxGridDBBandedColumn
        DataBinding.FieldName = 'keyfieldnames'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 14
        Position.RowIndex = 0
      end
      object MASTERlookup_id_module: TcxGridDBBandedColumn
        DataBinding.FieldName = 'lookup_id_module'
        Visible = False
        VisibleForCustomization = False
        Width = 200
        Position.BandIndex = 0
        Position.ColIndex = 15
        Position.RowIndex = 0
      end
    end
    object GRID_MASTERLevel1: TcxGridLevel
      GridView = MASTER
    end
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    PopupMenus = <>
    Left = 120
    Top = 128
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 88
    Top = 128
  end
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_kolom'
      'order by `tablename`, `no`')
    Params = <>
    Left = 56
    Top = 128
  end
  object Q_Module: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_module')
    Params = <>
    Left = 48
    Top = 200
  end
  object DS_Module: TDataSource
    DataSet = Q_Module
    Left = 80
    Top = 200
  end
  object Q_Column: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from tmp_kolomexcel')
    Params = <>
    Left = 56
    Top = 264
  end
  object DS_Column: TDataSource
    DataSet = Q_Column
    Left = 88
    Top = 264
  end
end
