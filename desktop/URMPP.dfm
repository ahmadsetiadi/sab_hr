object FrmRMPP: TFrmRMPP
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 501
  ClientWidth = 1178
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormStyle = fsMDIChild
  OldCreateOrder = False
  Visible = True
  WindowState = wsMaximized
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object PageControl: TcxPageControl
    Left = 0
    Top = 41
    Width = 1178
    Height = 460
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Properties.ActivePage = TabMaster
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 454
    ClientRectLeft = 3
    ClientRectRight = 1172
    ClientRectTop = 29
    object TabMaster: TcxTabSheet
      Caption = 'Master (F2)'
      ImageIndex = 1
      object GRID_MASTER: TcxGrid
        Left = 0
        Top = 0
        Width = 1169
        Height = 206
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
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
      object PageDetail: TcxPageControl
        Left = 0
        Top = 214
        Width = 1169
        Height = 211
        Align = alBottom
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        TabOrder = 1
        Properties.ActivePage = TabDetail1
        Properties.CustomButtons.Buttons = <>
        ClientRectBottom = 205
        ClientRectLeft = 3
        ClientRectRight = 1163
        ClientRectTop = 29
        object TabDetail1: TcxTabSheet
          Caption = 'Master (F2)'
          ImageIndex = 1
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+1 )'
          object GRID_DETAIL1: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL1: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL1
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
            object GRID_DETAIL1Level2: TcxGridLevel
              GridView = DETAIL1
            end
          end
        end
        object TabDetail2: TcxTabSheet
          Caption = 'TabDetail2'
          ImageIndex = 1
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+2 )'
          object GRID_DETAIL2: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL2: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL2
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
            object GRID_DETAIL2Level1: TcxGridLevel
              GridView = DETAIL2
            end
          end
        end
        object TabDetail3: TcxTabSheet
          Caption = 'TabDetail3'
          ImageIndex = 2
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+3 )'
          object GRID_DETAIL3: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL3: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL3
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
            object GRID_DETAIL3Level1: TcxGridLevel
              GridView = DETAIL3
            end
          end
        end
        object TabDetail4: TcxTabSheet
          Caption = 'TabDetail4'
          ImageIndex = 3
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+4 )'
          object GRID_DETAIL4: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL4: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL4
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
            object GRID_DETAIL4Level1: TcxGridLevel
              GridView = DETAIL4
            end
          end
        end
        object TabDetail5: TcxTabSheet
          Caption = 'TabDetail5'
          ImageIndex = 4
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+5 )'
          object GRID_DETAIL5: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL5: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL5
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
            object GRID_DETAIL5Level1: TcxGridLevel
              GridView = DETAIL5
            end
          end
        end
        object TabDetail6: TcxTabSheet
          Caption = 'TabDetail6'
          ImageIndex = 5
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+6 )'
          object GRID_DETAIL6: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL6: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL6
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
            object GRID_DETAIL6Level1: TcxGridLevel
              GridView = DETAIL6
            end
          end
        end
        object TabDetail7: TcxTabSheet
          Caption = 'TabDetail7'
          ImageIndex = 6
          ParentShowHint = False
          ShowHint = True
          TabHint = 'Shortcut ( Ctrl+Alt+7 )'
          object GRID_DETAIL7: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL7: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL7
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
            object GRID_DETAIL7Level1: TcxGridLevel
              GridView = DETAIL7
            end
          end
        end
        object TabDetail8: TcxTabSheet
          Caption = 'TabDetail8'
          ImageIndex = 7
          object GRID_DETAIL8: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL8: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL8
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
            object GRID_DETAIL8Level1: TcxGridLevel
              GridView = DETAIL8
            end
          end
        end
        object TabDetail9: TcxTabSheet
          Caption = 'TabDetail9'
          ImageIndex = 8
          object GRID_DETAIL9: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL9: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL9
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
            object GRID_DETAIL9Level1: TcxGridLevel
              GridView = DETAIL9
            end
          end
        end
        object TabDetail10: TcxTabSheet
          Caption = 'TabDetail10'
          ImageIndex = 9
          object GRID_DETAIL10: TcxGrid
            Left = 0
            Top = 0
            Width = 1160
            Height = 176
            Align = alClient
            Font.Charset = DEFAULT_CHARSET
            Font.Color = clWindowText
            Font.Height = -13
            Font.Name = 'Tahoma'
            Font.Style = []
            ParentFont = False
            PopupMenu = PopupMenu
            TabOrder = 0
            object DETAIL10: TcxGridDBBandedTableView
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
              DataController.DataSource = DS_DETAIL10
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
            object GRID_DETAIL10Level1: TcxGridLevel
              GridView = DETAIL10
            end
          end
        end
      end
      object cxSplitter1: TcxSplitter
        Left = 0
        Top = 206
        Width = 1169
        Height = 8
        AlignSplitter = salBottom
        Control = PageDetail
      end
    end
  end
  object txtID: TEdit
    Left = 352
    Top = 2
    Width = 121
    Height = 21
    TabOrder = 1
    Text = 'txtID'
    Visible = False
  end
  object txtModuleName: TEdit
    Left = 496
    Top = 2
    Width = 121
    Height = 21
    TabOrder = 2
    Text = 'Edit1'
    Visible = False
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 1178
    Height = 41
    Align = alTop
    BevelOuter = bvNone
    Color = 65021
    ParentBackground = False
    TabOrder = 3
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
      Caption = 'LblJudul'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -19
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      ExplicitLeft = 8
      ExplicitTop = 4
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 577
      Top = 13
      Width = 40
      Height = 25
      Margins.Top = 13
      Margins.Right = 0
      Align = alRight
      Caption = '&Enddate'
      ExplicitHeight = 13
    end
    object LblStartdate: TLabel
      AlignWithMargins = True
      Left = 372
      Top = 13
      Width = 46
      Height = 25
      Margins.Top = 13
      Margins.Right = 0
      Align = alRight
      Caption = '&Startdate'
      ExplicitHeight = 13
    end
    object BtnClose: TcxButton
      AlignWithMargins = True
      Left = 1104
      Top = 3
      Width = 71
      Height = 35
      Align = alRight
      Caption = 'C&lose'
      DropDownMenu = ItemMenu
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D9000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000F10000
        006F0000006D00000067000000650000006D0000006D0000006D0000006D0000
        006D0000006D0000006D0000006B000000630000006B0000006D000000AC0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E500000000000000000000
        0011000000160000000000000000000000000000000000000000000000000000
        0000000000000000002B000000000000000000000063000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E70000000000000026000000D5000000E20000
        00300000000000000000000000000000000000000000000000000000007E0000
        00F90000007F000000040000006B000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E600000000000000A6000000FF000000FF000000DC0000002F0000
        00000000000000000000000000000000007D000000FF000000FF000000FF0000
        002E00000063000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00000000002B000000D3000000FF000000FF000000DC00000030000000000000
        00000000007D000000FF000000FF000000FF0000008A000000040000006A0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E700000002000000000000
        0027000000D4000000FF000000FF000000DC0000003100000076000000FF0000
        00FF000000FF0000008800000000000000000000006D000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E7000000020000000000000000000000270000
        00D3000000FF000000FF000000ED000000FA000000FF000000FF000000880000
        000200000000000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E70000000200000000000000000000000000000025000000CA0000
        00FF000000FF000000FF000000F8000000810000000000000000000000000000
        00000000006D000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00020000000000000000000000000000000000000091000000FF000000FF0000
        00FF000000EF00000033000000000000000000000000000000000000006D0000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E700000002000000000000
        0000000000000000007D000000FC000000FF000000FF000000FF000000FF0000
        00DA0000002D0000000000000000000000000000006D000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E70000000200000000000000000000007C0000
        00FE000000FF000000FF00000099000000CA000000FF000000FF000000DB0000
        003100000000000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E700000001000000000000007C000000FF000000FF000000FF0000
        00880000000000000023000000D6000000FF000000FF000000DD0000002D0000
        00000000006D000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000E70000
        00000000007C000000FF000000FF000000FF0000008800000001000000000000
        000000000029000000D3000000FF000000FF000000E20000001C000000650000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000D1000000FF000000E600000000000000770000
        00FF000000FF0000008900000000000000000000000000000000000000000000
        0024000000D5000000FF000000DA0000001F00000066000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000D1000000FF000000E7000000000000000000000078000000880000
        00000000000000000000000000000000000000000000000000000000002A0000
        00A900000029000000000000006D000000FF000000FF00000000000000000000
        0000000000000000000000000000000000000000000000000000000000D10000
        00FF000000E70000000400000001000000000000000000000000000000020000
        0002000000020000000200000002000000020000000000000000000000000000
        00020000006E000000FF000000FF000000000000000000000000000000000000
        000000000000000000000000000000000000000000D1000000FF000000FD0000
        00E7000000E7000000E6000000E7000000E7000000E7000000E7000000E70000
        00E7000000E7000000E7000000E7000000E6000000E7000000E7000000F10000
        00FF000000FF0000000000000000000000000000000000000000000000000000
        00000000000000000000000000DE000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000AC000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D100000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 0
      OnClick = BtnCloseClick
    end
    object BtnPrint: TcxButton
      AlignWithMargins = True
      Left = 1013
      Top = 3
      Width = 85
      Height = 35
      Align = alRight
      Caption = '&Print'
      DropDownMenu = ItemPrint
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000004D000000F3000000F30000
        00F3000000F3000000F3000000F3000000F3000000F3000000F3000000F30000
        00F3000000C40000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000052000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000D10000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000051000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000CE00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004D0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000CD000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000097000000CE000000CE000000CE000000DE000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F6000000CE000000CE000000CE000000C500000000000000000000
        0000000000000000000000000000000000000000000000000000000000C20000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FC000000000000000000000000000000000000
        000000000000000000000000000000000000000000BB000000FF000000E60000
        00830000007E0000007100000071000000710000007100000071000000710000
        0071000000710000007100000071000000710000007500000083000000AA0000
        00FF000000F30000000000000000000000000000000000000000000000000000
        00000000000000000000000000BB000000FF000000C8000000000000001B0000
        007B0000007B0000007B0000007B0000007B0000007B0000007B0000007B0000
        007B0000007B0000007B000000600000000000000042000000FF000000F30000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000BB000000FF000000CC000000000000005A000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000E5000000000000004E000000FF000000F300000000000000000000
        0000000000000000000000000000000000000000000000000000000000BB0000
        00FF000000CC000000000000003F000000C7000000C7000000C7000000C70000
        00C7000000C7000000C7000000C7000000C7000000C7000000C7000000A00000
        00000000004E000000FF000000F3000000000000000000000000000000000000
        000000000000000000000000000000000000000000BB000000FF000000CC0000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004F0000
        00FF000000F30000000000000000000000000000000000000000000000000000
        00000000000000000000000000BB000000FF000000C900000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000044000000FF000000F30000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000BB000000FF000000E1000000690000006900000069000000690000
        0069000000690000006900000069000000690000006900000069000000690000
        0069000000690000006900000098000000FF000000F300000000000000000000
        0000000000000000000000000000000000000000000000000000000000C00000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FA000000000000000000000000000000000000
        000000000000000000000000000000000000000000A6000000E2000000E20000
        00E2000000DC000000D1000000D8000000E2000000E2000000E2000000E20000
        00E2000000E2000000E2000000E0000000D1000000D4000000E2000000E20000
        00E2000000D70000000000000000000000000000000000000000000000000000
        0000000000000000000000000003000000050000000500000005000000370000
        00A20000005B0000000500000005000000050000000500000005000000050000
        000500000013000000A200000086000000050000000500000005000000040000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000053000000FF000000920000
        0000000000000000000000000000000000000000000000000000000000150000
        00FF000000DC0000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000051000000FF0000008900000000000000000000
        00000000000000000000000000000000000000000011000000FF000000D20000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000052000000FF000000EB000000CF000000CF000000CF000000CF0000
        00CF000000CF000000CF000000D4000000FF000000D100000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000000000004F0000
        00F8000000FC000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000F8000000C8000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 1
    end
    object BtnMenu: TcxButton
      AlignWithMargins = True
      Left = 918
      Top = 3
      Width = 89
      Height = 35
      Align = alRight
      Caption = '&Menu'
      DropDownMenu = ItemMenu
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        006E000000770000007600000076000000760000007600000076000000760000
        0076000000760000007600000076000000760000007600000076000000760000
        00770000006E0000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000F1000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000F10000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000FB000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FB00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000B2000000BF000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BF000000B2000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000B2000000BF0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BF000000B20000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000FB000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FB00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000F1000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000F1000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00370000003C0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003C000000370000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000000000000000000000370000003C0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003C000000370000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000F1000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000F100000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000FB000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FB000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00B2000000BF000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BF000000B20000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000B2000000BF000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BF000000B200000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000FB000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FB000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00F1000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F10000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000006E000000770000
        0076000000760000007600000076000000760000007600000076000000760000
        00760000007600000076000000760000007600000076000000770000006E0000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 2
    end
    object BtnDateTemplate: TcxButton
      AlignWithMargins = True
      Left = 776
      Top = 3
      Width = 136
      Height = 35
      Align = alRight
      Caption = '&Date Template'
      DropDownMenu = ItemDate
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.Data = {
        460E0000424D460E00000000000036000000280000001E0000001E0000000100
        200000000000100E000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000D300000000000000000000
        00000000000000000000000000000000000000000000000000CF000000E90000
        005B0000004A0000004A0000004A0000005A0000004F0000004A0000004A0000
        0055000000550000004A0000004A0000004F0000005A0000004A0000004A0000
        004A0000005B000000E9000000CF000000000000000000000000000000000000
        0000000000000000000000000000000000D4000000D6000000000000007C0000
        007E0000007E00000001000000590000007E0000007E00000028000000280000
        007E0000007E00000059000000010000007E0000007E0000007C000000000000
        00D6000000D40000000000000000000000000000000000000000000000000000
        000000000000000000D3000000D50000001A000000FF000000FF000000FF0000
        001F000000CA000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CA0000001F000000FF000000FF000000FF0000001A000000D5000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000D500000018000000FF000000FF000000FF0000001D000000C00000
        00FF000000FF0000006500000065000000FF000000FF000000C00000001D0000
        00FF000000FF000000FF00000018000000D5000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D3000000DB0000
        00030000001D0000001D0000001D00000003000000160000001D0000001D0000
        000C0000000C0000001D0000001D00000016000000030000001D0000001D0000
        001D00000003000000DB000000D3000000000000000000000000000000000000
        0000000000000000000000000000000000D3000000D700000012000000BB0000
        00BD000000BD000000160000008C000000BD000000BD0000004A0000004A0000
        00BD000000BD0000008C00000016000000BD000000BD000000BB000000120000
        00D7000000D30000000000000000000000000000000000000000000000000000
        000000000000000000D3000000D40000001A000000FF000000FF000000FF0000
        001F000000CB000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CB0000001F000000FF000000FF000000FF0000001A000000D4000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000D600000015000000E0000000E3000000E30000001A000000A50000
        00DF000000DF0000005700000057000000DF000000DF000000A5000000190000
        00DF000000DF000000DC00000015000000D6000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D3000000DC0000
        0000000000040000000400000004000000010000000F00000014000000140000
        00080000000800000014000000140000000E0000000200000014000000140000
        001300000002000000DB000000D3000000000000000000000000000000000000
        0000000000000000000000000000000000D3000000DC00000000000000000000
        00000000000000000000000000B9000000EE000000EE0000005D0000005D0000
        00EE000000EE000000B00000001B000000EE000000EE000000EB000000160000
        00D5000000D30000000000000000000000000000000000000000000000000000
        000000000000000000D3000000DC000000000000000000000000000000000000
        0000000000D4000000FF000000FF0000006B0000006B000000FF000000FF0000
        00CA0000001F000000FF000000FF000000FF0000001A000000D5000000D30000
        0000000000000000000000000000000000000000000000000000000000000000
        00D3000000DA0000000000000000000000000000000000000000000000800000
        00A8000000A80000003B0000003B000000A8000000A80000007A000000090000
        00A8000000A8000000A600000005000000D5000000D300000000000000000000
        00000000000000000000000000000000000000000000000000D1000000E40000
        0039000000390000003900000039000000390000002C00000029000000290000
        00320000003200000029000000290000002D0000003700000029000000290000
        002900000037000000E4000000D1000000000000000000000000000000000000
        0000000000000000000000000000000000C9000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000C90000000000000000000000000000000000000000000000000000
        000000000000000000C9000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000C90000
        0000000000000000000000000000000000000000000000000000000000000000
        00CA000000FF000000FF000000FD0000009900000086000000F4000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000F60000
        008C00000094000000FC000000FF000000FF000000CA00000000000000000000
        00000000000000000000000000000000000000000000000000C7000000FC0000
        00FD000000EF0000000300000000000000D7000000FD000000FC000000FC0000
        00FC000000FC000000FC000000FC000000FD000000D700000000000000030000
        00EF000000FD000000FC000000C7000000000000000000000000000000000000
        0000000000000000000000000000000000180000001E0000003E000000EB0000
        000200000000000000E0000000590000001E0000001E0000001E0000001E0000
        001E0000001E00000059000000DF0000000000000002000000EC0000003E0000
        001E000000180000000000000000000000000000000000000000000000000000
        00000000000000000000000000000000001A000000FF0000007D000000640000
        00FF000000380000000000000000000000000000000000000000000000000000
        0038000000FF0000006B00000076000000FF0000001A00000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000060000008E000000D6000000D8000000A90000000E0000
        000000000000000000000000000000000000000000000000000E000000A10000
        00D8000000D70000009500000006000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000}
      TabOrder = 3
    end
    object BtnEnddate: TcxDateEdit
      AlignWithMargins = True
      Left = 620
      Top = 7
      Hint = 'Enddate'
      Margins.Top = 7
      Margins.Bottom = 7
      Align = alRight
      RepositoryItem = MenuLogin.RepDate
      EditValue = 41905d
      ParentFont = False
      ParentShowHint = False
      Properties.DisplayFormat = 'DDD, dd/mm/yyyy'
      Properties.OnChange = BtnEnddatePropertiesChange
      ShowHint = True
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -13
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 4
      OnKeyDown = BtnEnddateKeyDown
      Width = 150
    end
    object BtnStartdate: TcxDateEdit
      AlignWithMargins = True
      Left = 421
      Top = 7
      Hint = 'Startdate'
      Margins.Top = 7
      Margins.Bottom = 7
      Align = alRight
      RepositoryItem = MenuLogin.RepDate
      EditValue = 41905d
      ParentFont = False
      ParentShowHint = False
      Properties.DisplayFormat = 'DDD, dd/mm/yyyy'
      Properties.OnChange = BtnStartdatePropertiesChange
      ShowHint = True
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -13
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 5
      OnKeyDown = BtnStartdateKeyDown
      Width = 150
    end
  end
  object Layout: TdxLayoutControl
    Left = 432
    Top = 94
    Width = 41
    Height = 26
    TabOrder = 4
    Visible = False
    LayoutLookAndFeel = dxLayoutCxLookAndFeel1
    object dxLayoutGroup1: TdxLayoutGroup
      AlignHorz = ahLeft
      AlignVert = avTop
      ButtonOptions.Buttons = <>
      Hidden = True
      ShowBorder = False
      Index = -1
    end
  end
  object Edit1: TEdit
    Left = 387
    Top = 80
    Width = 121
    Height = 21
    TabOrder = 5
    Text = 'employee data'
    Visible = False
  end
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    AfterRefresh = Q_MASTERAfterRefresh
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from t_mpp'
      'order by workarea_id, group1, group2, _order')
    Params = <>
    Left = 104
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 136
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    Grid = GRID_MASTER
    PopupMenus = <>
    Left = 168
  end
  object ActionList1: TActionList
    Left = 280
    object actRefresh: TAction
      Caption = '&Refresh Data'
      ShortCut = 116
      OnExecute = actRefreshExecute
    end
    object actAdd: TAction
      Caption = '&Add Record'
      ShortCut = 16462
      OnExecute = actAddExecute
    end
    object actEdit: TAction
      Caption = 'E&dit Record'
      ShortCut = 16453
      OnExecute = actEditExecute
    end
    object actSave: TAction
      Caption = 'actSave'
      ShortCut = 16467
      OnExecute = actSaveExecute
    end
    object actDelete: TAction
      Caption = 'De&lete Record'
      ShortCut = 16452
      OnExecute = actDeleteExecute
    end
    object actcancel: TAction
      Caption = 'actcancel'
      ShortCut = 16474
      OnExecute = actcancelExecute
    end
    object actFirst: TAction
      Caption = 'actFirst'
      ShortCut = 16433
      OnExecute = MenuItem1Click
    end
    object actOneMonth: TAction
      Caption = 'actOneMonth'
      ShortCut = 16434
      OnExecute = OneMonth1Click
    end
    object actNextMonth: TAction
      Caption = 'actNextMonth'
      ShortCut = 16435
      OnExecute = NextMonth1Click
    end
    object actPrevMonth: TAction
      Caption = 'actPrevMonth'
      ShortCut = 16436
      OnExecute = PrevMonth1Click
    end
    object actOneYear: TAction
      Caption = 'actOneYear'
      ShortCut = 16437
      OnExecute = OneYear1Click
    end
    object actOneDay: TAction
      Caption = 'actOneDay'
      ShortCut = 16438
      OnExecute = OneDay1Click
    end
    object actToday: TAction
      Caption = 'actToday'
      ShortCut = 16439
      OnExecute = oday1Click
    end
    object actStartdate: TAction
      Caption = 'actStartdate'
      ShortCut = 32851
      OnExecute = actStartdateExecute
    end
    object actEnddate: TAction
      Caption = 'actEnddate'
      ShortCut = 32837
      OnExecute = actEnddateExecute
    end
    object actTabMaster: TAction
      Caption = 'actTabMaster'
      ShortCut = 113
      OnExecute = actTabMasterExecute
    end
    object actTabDetail1: TAction
      Caption = 'actTabDetail1'
      ShortCut = 49201
      OnExecute = actTabDetail1Execute
    end
    object actLookup: TAction
      Caption = 'actLookup'
      ShortCut = 118
      OnExecute = actLookupExecute
    end
    object actTabDetail2: TAction
      Caption = 'actTabDetail2'
      ShortCut = 49202
      OnExecute = actTabDetail2Execute
    end
  end
  object PopupMenu: TPopupMenu
    Images = MenuLogin.SmallImage
    MenuAnimation = [maTopToBottom]
    OnPopup = PopupMenuPopup
    Left = 312
    object ppGroup: TMenuItem
      Caption = '&Group Date Format'
      ImageIndex = 11
      object ppGroupDefault: TMenuItem
        Caption = '&Default'
        Hint = 'Group Date Default'
        OnClick = ppGroupDefaultClick
      end
      object ppGroupMonth: TMenuItem
        Caption = '&Month'
        Hint = 'Group Date Month'
        OnClick = ppGroupMonthClick
      end
      object ppGroupYear: TMenuItem
        Caption = '&Year'
        Hint = 'Group Date Year'
        OnClick = ppGroupYearClick
      end
      object RelativeToday1: TMenuItem
        Caption = '&Relative Today'
        Hint = 'Group Date Relative Today'
        OnClick = RelativeToday1Click
      end
    end
    object N1: TMenuItem
      Caption = '-'
    end
    object ppExport: TMenuItem
      Caption = '&Export to Excel'
      Hint = 'Export to Excel'
      ImageIndex = 7
      ShortCut = 16496
      OnClick = ppExportClick
    end
    object ppFreeze: TMenuItem
      Caption = '&Show Freeze Column'
      Hint = 'Show Freeze Column'
      ImageIndex = 10
      ShortCut = 16497
      OnClick = ppFreezeClick
    end
    object ImportFromExcel1: TMenuItem
      Caption = '&Import From Excel'
      ImageIndex = 6
      ShortCut = 16498
      Visible = False
    end
    object ppFind: TMenuItem
      Caption = '&Find'
      Hint = 'Find'
      ImageIndex = 8
      ShortCut = 16454
      OnClick = ppFindClick
    end
    object ppShowALL: TMenuItem
      Caption = 'S&how All Data'
      Hint = 'Show All Data'
      ImageIndex = 16
      ShortCut = 16455
      OnClick = ppShowALLClick
    end
    object N2: TMenuItem
      Caption = '-'
    end
    object ppAdd: TMenuItem
      Action = actAdd
      ImageIndex = 0
    end
    object ppEdit: TMenuItem
      Action = actEdit
      ImageIndex = 3
    end
    object ppDelete: TMenuItem
      Action = actDelete
      ImageIndex = 2
    end
    object ppRefresh: TMenuItem
      Action = actRefresh
      ImageIndex = 14
    end
  end
  object ItemMenu: TPopupMenu
    Left = 344
    object N1CreateReport1: TMenuItem
      Caption = '&1 Create Report'
      OnClick = N1CreateReport1Click
    end
  end
  object ItemPrint: TPopupMenu
    Left = 376
    object N1PrintReport1: TMenuItem
      Caption = '&1 Print Report'
      OnClick = N1PrintReport1Click
    end
  end
  object ItemDate: TPopupMenu
    Left = 408
    object MenuItem1: TMenuItem
      Caption = '&First Date of Year to Now'
      ShortCut = 16433
      OnClick = MenuItem1Click
    end
    object OneMonth1: TMenuItem
      Caption = '&One Month'
      ShortCut = 16434
      OnClick = OneMonth1Click
    end
    object NextMonth1: TMenuItem
      Caption = '&Next Month'
      ShortCut = 16435
      OnClick = NextMonth1Click
    end
    object PrevMonth1: TMenuItem
      Caption = '&Prev Month'
      ShortCut = 16436
      OnClick = PrevMonth1Click
    end
    object OneYear1: TMenuItem
      Caption = 'On&e Year'
      ShortCut = 16437
      OnClick = OneYear1Click
    end
    object OneDay1: TMenuItem
      Caption = 'One &Day'
      ShortCut = 16438
      OnClick = OneDay1Click
    end
    object oday1: TMenuItem
      Caption = '&Today'
      ShortCut = 16439
      OnClick = oday1Click
    end
  end
  object FR_Report: TfrxReport
    Version = '4.15.6'
    DotMatrixReport = False
    IniFile = '\Software\Fast Reports'
    PreviewOptions.Buttons = [pbPrint, pbLoad, pbSave, pbExport, pbZoom, pbFind, pbOutline, pbPageSetup, pbTools, pbEdit, pbNavigator, pbExportQuick]
    PreviewOptions.Zoom = 1.000000000000000000
    PrintOptions.Printer = 'Default'
    PrintOptions.PrintOnSheet = 0
    ReportOptions.CreateDate = 42422.956441574100000000
    ReportOptions.LastChange = 42423.605563888900000000
    ScriptLanguage = 'PascalScript'
    ScriptText.Strings = (
      ''
      'procedure GroupFooter1OnBeforePrint(Sender: TfrxComponent);'
      'begin'
      '  //'
      '  if <master."workarea_id"> = '#39'3'#39' then'
      '  begin'
      '    //showmessage('#39'tes'#39');'
      '    memo57.visible             := False;'
      '    memooperasional2.visible   := False;'
      '    memooperasional1.visible   := False;'
      '    memohrd2.text := <master."managerhrd2">;'
      '    memohrd1.text := <master."managerhrd1">;'
      '    memodirektur2.text := <master."managerdirektur2">;'
      '    memodirektur1.text := <master."managerdirektur1">;        '
      '  end else'
      '  begin'
      '    memo57.visible             := True;'
      '    memooperasional2.visible   := True;'
      '    memooperasional1.visible   := True;'
      '    memohrd2.text := <master."seniorhrd2">;'
      '    memohrd1.text := <master."seniorhrd1">;'
      '    memodirektur2.text := <master."managerhrd2">;'
      '    memodirektur1.text := <master."managerhrd1">;  '
      '  end;            '
      'end;'
      ''
      'begin'
      ''
      'end.')
    Left = 632
    Top = 96
    Datasets = <
      item
        DataSet = frxDBDataset1
        DataSetName = 'master'
      end>
    Variables = <>
    Style = <>
    object Data: TfrxDataPage
      Height = 1000.000000000000000000
      Width = 1000.000000000000000000
    end
    object Page1: TfrxReportPage
      PaperWidth = 210.000000000000000000
      PaperHeight = 297.000000000000000000
      PaperSize = 9
      LeftMargin = 8.000000000000000000
      RightMargin = 8.000000000000000000
      TopMargin = 8.000000000000000000
      BottomMargin = 8.000000000000000000
      object MasterData1: TfrxMasterData
        Height = 26.456710000000000000
        Top = 230.551330000000000000
        Width = 733.228820000000000000
        DataSet = frxDBDataset1
        DataSetName = 'master'
        RowCount = 0
        Stretched = True
        object Memo28: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[master."EMPLOYEENAME"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo31: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 472.441250000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[master."nip"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo33: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 578.268090000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[master."note"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo52: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo32: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          HideZeros = True
          Memo.UTF8W = (
            '[master."gap"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo26: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 26.456710000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          SuppressRepeated = True
          VAlign = vaCenter
        end
        object Memo27: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 26.456710000000000000
          Width = 162.519790000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DataField = 'positionname'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[master."positionname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo29: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 188.976500000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          HideZeros = True
          Memo.UTF8W = (
            '[master."ideal"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo30: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          DisplayFormat.FormatStr = '%2.0n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = []
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          HideZeros = True
          Memo.UTF8W = (
            '[master."existing"]')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object PageFooter1: TfrxPageFooter
        Height = 22.677180000000000000
        Top = 657.638220000000000000
        Width = 733.228820000000000000
        object Memo1: TfrxMemoView
          Left = 657.638220000000000000
          Width = 75.590600000000000000
          Height = 18.897650000000000000
          Visible = False
          ShowHint = False
          HAlign = haRight
          Memo.UTF8W = (
            '[Page#]')
        end
      end
      object GroupHeader1: TfrxGroupHeader
        Height = 90.708720000000000000
        Top = 18.897650000000000000
        Width = 733.228820000000000000
        Condition = 'master."workareaname"'
        ResetPageNumbers = True
        StartNewPage = True
        Stretched = True
        object Memo2: TfrxMemoView
          Align = baWidth
          Top = 3.779530000000000000
          Width = 733.228820000000000000
          Height = 30.236240000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -19
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          HAlign = haCenter
          Memo.UTF8W = (
            'MPP [master."workareaname"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo4: TfrxMemoView
          Top = 64.252010000000000000
          Width = 26.456710000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'NO')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo5: TfrxMemoView
          Left = 26.456710000000000000
          Top = 64.252010000000000000
          Width = 162.519790000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'JABATAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo8: TfrxMemoView
          Left = 188.976500000000000000
          Top = 64.252010000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'MPP IDEAL')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo9: TfrxMemoView
          Left = 268.346630000000000000
          Top = 64.252010000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'EXISTING')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo10: TfrxMemoView
          Left = 336.378170000000000000
          Top = 64.252010000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'NAMA EMPLOYEE')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo11: TfrxMemoView
          Left = 578.268090000000000000
          Top = 64.252010000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'KETERANGAN')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo12: TfrxMemoView
          Left = 544.252320000000000000
          Top = 64.252010000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'GAP')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo13: TfrxMemoView
          Left = 472.441250000000000000
          Top = 64.252010000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            'NIP')
          ParentFont = False
          VAlign = vaCenter
        end
        object masterworkarea_id: TfrxMemoView
          Left = 483.779840000000000000
          Top = 37.795300000000000000
          Width = 79.370130000000000000
          Height = 18.897650000000000000
          Visible = False
          ShowHint = False
          DataField = 'workarea_id'
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Memo.UTF8W = (
            '[master."workarea_id"]')
        end
      end
      object GroupFooter1: TfrxGroupFooter
        Height = 245.669450000000000000
        Top = 351.496290000000000000
        Width = 733.228820000000000000
        OnBeforePrint = 'GroupFooter1OnBeforePrint'
        Stretched = True
        object Memo42: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 26.456710000000000000
          Width = 162.519790000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            'GRANDTOTAL')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo43: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 188.976500000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."ideal">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo44: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."existing">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo45: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo46: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 578.268090000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo47: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."gap">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo48: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 472.441250000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo49: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 26.456710000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo50: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Top = 26.456710000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          DisplayFormat.FormatStr = '%2.2n'
          DisplayFormat.Kind = fkNumeric
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          HAlign = haCenter
          Memo.UTF8W = (
            
              '[<SUM(<master."existing">,MasterData1)>/<SUM(<master."ideal">,Ma' +
              'sterData1)>*100] %')
          ParentFont = False
          VAlign = vaCenter
        end
        object memohrd2: TfrxMemoView
          Left = 26.456710000000000000
          Top = 207.874150000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo51: TfrxMemoView
          Left = 26.456710000000000000
          Top = 83.149660000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            'Pembuat Laporan')
          ParentFont = False
          VAlign = vaCenter
        end
        object memohrd1: TfrxMemoView
          Left = 26.456710000000000000
          Top = 226.771800000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object memodirektur2: TfrxMemoView
          Left = 279.685220000000000000
          Top = 207.874150000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo54: TfrxMemoView
          Left = 279.685220000000000000
          Top = 83.149660000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            'Mengetahui')
          ParentFont = False
          VAlign = vaCenter
        end
        object memodirektur1: TfrxMemoView
          Left = 279.685220000000000000
          Top = 226.771800000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object memooperasional2: TfrxMemoView
          Left = 536.693260000000000000
          Top = 207.874150000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[master."manageroperasional2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo57: TfrxMemoView
          Left = 536.693260000000000000
          Top = 83.149660000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = []
          HAlign = haCenter
          Memo.UTF8W = (
            'Disetujui')
          ParentFont = False
          VAlign = vaCenter
        end
        object memooperasional1: TfrxMemoView
          Left = 536.693260000000000000
          Top = 226.771800000000000000
          Width = 170.078850000000000000
          Height = 18.897650000000000000
          ShowHint = False
          DataSet = frxDBDataset1
          DataSetName = 'master'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -13
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          HAlign = haCenter
          Memo.UTF8W = (
            '[master."manageroperasional1"]')
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupHeader2: TfrxGroupHeader
        Height = 26.456710000000000000
        Top = 132.283550000000000000
        Width = 733.228820000000000000
        Condition = 'master."group1"'
        Stretched = True
        object Memo3: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 188.976500000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[master."group1"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo14: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 188.976500000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo15: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo16: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo17: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 578.268090000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo18: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo19: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 472.441250000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = 16750796
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupFooter2: TfrxGroupFooter
        Height = 26.456710000000000000
        Top = 302.362400000000000000
        Width = 733.228820000000000000
        object Memo34: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 26.456710000000000000
          Width = 162.519790000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            'TOTAL')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo35: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 188.976500000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."ideal">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo36: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."existing">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo37: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo38: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 578.268090000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo39: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[SUM(<master."gap">,MasterData1)]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo40: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 472.441250000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo41: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Width = 26.456710000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Color = clAqua
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          ParentFont = False
          VAlign = vaCenter
        end
      end
      object GroupFooter3: TfrxGroupFooter
        Top = 279.685220000000000000
        Visible = False
        Width = 733.228820000000000000
      end
      object GroupHeader3: TfrxGroupHeader
        Height = 26.456692910000000000
        Top = 181.417440000000000000
        Width = 733.228820000000000000
        Condition = 'master."group2"'
        object Memo6: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 26.456710000000000000
          Width = 162.519790000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          Memo.UTF8W = (
            '[master."group2"]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo7: TfrxMemoView
          Width = 26.456710000000000000
          Height = 26.456710000000000000
          ShowHint = False
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -9
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          Memo.UTF8W = (
            '[Line]')
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo20: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 188.976500000000000000
          Width = 79.370130000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo21: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 268.346630000000000000
          Width = 68.031540000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo22: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 336.378170000000000000
          Width = 136.063080000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo23: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 578.268090000000000000
          Width = 154.960730000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo24: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 544.252320000000000000
          Width = 34.015770000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
        object Memo25: TfrxMemoView
          ShiftMode = smWhenOverlapped
          Left = 472.441250000000000000
          Width = 71.811070000000000000
          Height = 26.456710000000000000
          ShowHint = False
          StretchMode = smMaxHeight
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clBlack
          Font.Height = -12
          Font.Name = 'Arial'
          Font.Style = [fsBold]
          Frame.Typ = [ftLeft, ftRight, ftTop, ftBottom]
          HAlign = haCenter
          ParentFont = False
          VAlign = vaCenter
        end
      end
    end
  end
  object dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList
    Left = 200
    object dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel
      LookAndFeel.SkinName = 'UserSkin'
    end
  end
  object cxGridPopupMenu2: TcxGridPopupMenu
    Grid = GRID_DETAIL1
    PopupMenus = <>
    Left = 168
    Top = 88
  end
  object DS_DETAIL1: TDataSource
    DataSet = Q_DETAIL1
    Left = 136
    Top = 88
  end
  object Q_DETAIL1: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 88
  end
  object Q_DETAIL2: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 136
  end
  object DS_DETAIL2: TDataSource
    DataSet = Q_DETAIL2
    Left = 136
    Top = 136
  end
  object cxGridPopupMenu3: TcxGridPopupMenu
    Grid = GRID_DETAIL2
    PopupMenus = <>
    Left = 168
    Top = 136
  end
  object Q_DETAIL3: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 104
    Top = 184
  end
  object DS_DETAIL3: TDataSource
    DataSet = Q_DETAIL3
    Left = 136
    Top = 184
  end
  object cxGridPopupMenu4: TcxGridPopupMenu
    Grid = GRID_DETAIL3
    PopupMenus = <>
    Left = 168
    Top = 184
  end
  object Q_DETAIL4: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 96
    Top = 328
  end
  object DS_DETAIL4: TDataSource
    DataSet = Q_DETAIL4
    Left = 128
    Top = 320
  end
  object cxGridPopupMenu5: TcxGridPopupMenu
    Grid = GRID_DETAIL4
    PopupMenus = <>
    Left = 160
    Top = 320
  end
  object Q_DETAIL5: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 88
  end
  object DS_DETAIL5: TDataSource
    DataSet = Q_DETAIL5
    Left = 304
    Top = 88
  end
  object cxGridPopupMenu6: TcxGridPopupMenu
    Grid = GRID_DETAIL5
    PopupMenus = <>
    Left = 336
    Top = 88
  end
  object Q_DETAIL6: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 136
  end
  object DS_DETAIL6: TDataSource
    DataSet = Q_DETAIL6
    Left = 304
    Top = 136
  end
  object cxGridPopupMenu7: TcxGridPopupMenu
    Grid = GRID_DETAIL6
    PopupMenus = <>
    Left = 336
    Top = 136
  end
  object Q_DETAIL7: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 184
  end
  object DS_DETAIL7: TDataSource
    DataSet = Q_DETAIL7
    Left = 304
    Top = 184
  end
  object cxGridPopupMenu8: TcxGridPopupMenu
    Grid = GRID_DETAIL7
    PopupMenus = <>
    Left = 336
    Top = 184
  end
  object Q_Laporan: TZQuery
    Connection = MenuLogin.ZConnection
    Active = True
    SQL.Strings = (
      'select * from tmp_mpp'
      'order by workarea_id, _order')
    Params = <>
    Left = 536
    Top = 96
  end
  object DS_Laporan: TDataSource
    DataSet = Q_Laporan
    Left = 568
    Top = 96
  end
  object frxDBDataset1: TfrxDBDataset
    UserName = 'master'
    CloseDataSource = False
    DataSet = Q_Laporan
    BCDToCurrency = False
    Left = 600
    Top = 96
  end
  object Q_DETAIL8: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 232
  end
  object DS_DETAIL8: TDataSource
    DataSet = Q_DETAIL8
    Left = 304
    Top = 232
  end
  object cxGridPopupMenu9: TcxGridPopupMenu
    Grid = GRID_DETAIL8
    PopupMenus = <>
    Left = 336
    Top = 232
  end
  object Q_DETAIL9: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 312
  end
  object DS_DETAIL9: TDataSource
    DataSet = Q_DETAIL9
    Left = 304
    Top = 312
  end
  object cxGridPopupMenu10: TcxGridPopupMenu
    Grid = GRID_DETAIL9
    PopupMenus = <>
    Left = 336
    Top = 312
  end
  object Q_DETAIL10: TZQuery
    Connection = MenuLogin.ZConnection
    BeforeEdit = Q_MASTERBeforeEdit
    BeforePost = Q_MASTERBeforePost
    AfterPost = Q_MASTERAfterPost
    AfterCancel = Q_MASTERAfterCancel
    BeforeDelete = Q_MASTERBeforeDelete
    AfterDelete = Q_MASTERAfterDelete
    OnNewRecord = Q_MASTERNewRecord
    SQL.Strings = (
      'select * from m_employee')
    Params = <>
    Left = 272
    Top = 360
  end
  object DS_DETAIL10: TDataSource
    DataSet = Q_DETAIL10
    Left = 304
    Top = 360
  end
  object cxGridPopupMenu11: TcxGridPopupMenu
    Grid = GRID_DETAIL10
    PopupMenus = <>
    Left = 336
    Top = 360
  end
  object ApplicationEvents1: TApplicationEvents
    OnException = ApplicationEvents1Exception
    Left = 408
    Top = 152
  end
  object ZQuery1: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      
        'select p.*, po.name as positionname, pd.employee_id, pd.nip, pd.' +
        'name as employeename, '
      'w.name as workareaname, pd.note,'
      
        '( select name from s_reportparam where reportname='#39'report mpp'#39' a' +
        'nd paramname='#39'param1'#39' ) as managerhrd1,'
      
        '( select value from s_reportparam where reportname='#39'report mpp'#39' ' +
        'and paramname='#39'param1'#39' ) as managerhrd2,'
      
        '( select name from s_reportparam where reportname='#39'report mpp'#39' a' +
        'nd paramname='#39'param2'#39' ) as managerdirektur1,'
      
        '( select value from s_reportparam where reportname='#39'report mpp'#39' ' +
        'and paramname='#39'param2'#39' ) as managerdirektur2,'
      
        '( select name from s_reportparam where reportname='#39'report mpp'#39' a' +
        'nd paramname='#39'param3'#39' ) as seniorhrd1,'
      
        '( select value from s_reportparam where reportname='#39'report mpp'#39' ' +
        'and paramname='#39'param3'#39' ) as seniorhrd2,'
      
        '( select name from s_reportparam where reportname='#39'report mpp'#39' a' +
        'nd paramname='#39'param4'#39' ) as manageroperasional1,'
      
        '( select value from s_reportparam where reportname='#39'report mpp'#39' ' +
        'and paramname='#39'param4'#39' ) as manageroperasional2'
      'from t_mpp p'
      'left join t_mpp_detail pd on p.tmpp_id = pd.tmpp_id'
      'left join m_workarea w on p.workarea_id = w.workarea_id'
      'left join m_position po on p.position_id = po.position_id'
      'where tdate >= '#39'2016-02-01'#39' and tdate <='#39'2016-02-29'#39
      'order by w.name, _order')
    Params = <>
    Left = 528
    Top = 160
  end
end
