object FrmProcessImport: TFrmProcessImport
  Left = 0
  Top = 0
  Caption = 'CaptionForm'
  ClientHeight = 655
  ClientWidth = 1483
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -14
  Font.Name = 'Tahoma'
  Font.Style = []
  FormStyle = fsMDIChild
  OldCreateOrder = False
  Visible = True
  WindowState = wsMaximized
  OnClose = FormClose
  OnCreate = FormCreate
  PixelsPerInch = 120
  TextHeight = 17
  object PageControll1: TcxPageControl
    Left = 0
    Top = 53
    Width = 1483
    Height = 602
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    Align = alClient
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -18
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Properties.ActivePage = Tab1
    Properties.CustomButtons.Buttons = <>
    ClientRectBottom = 598
    ClientRectLeft = 4
    ClientRectRight = 1479
    ClientRectTop = 34
    object Tab1: TcxTabSheet
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Caption = 'Tab1'
      ImageIndex = 1
      object GRID_DATA1: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA1: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA1
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA1Level1: TcxGridLevel
          GridView = DATA1
        end
      end
    end
    object Tab2: TcxTabSheet
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Caption = 'Tab2'
      ImageIndex = 1
      object GRID_DATA2: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA2: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA2
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsSelection.MultiSelect = True
          OptionsSelection.CellMultiSelect = True
          OptionsSelection.InvertSelect = False
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA2Level1: TcxGridLevel
          GridView = DATA2
        end
      end
    end
    object Tab3: TcxTabSheet
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Caption = 'Tab3'
      ImageIndex = 2
      object GRID_DATA3: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA3: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA3Level1: TcxGridLevel
          GridView = DATA3
        end
      end
    end
    object Tab4: TcxTabSheet
      Caption = 'Tab4'
      ImageIndex = 3
      object GRID_DATA4: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA4: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA4Level1: TcxGridLevel
          GridView = DATA4
        end
      end
    end
    object Tab5: TcxTabSheet
      Caption = 'Tab5'
      ImageIndex = 4
      object GRID_DATA5: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA5: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA5Level1: TcxGridLevel
          GridView = DATA5
        end
      end
    end
    object Tab6: TcxTabSheet
      Caption = 'Tab6'
      ImageIndex = 5
      object GRID_DATA6: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA6: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA6Level1: TcxGridLevel
          GridView = DATA6
        end
      end
    end
    object Tab7: TcxTabSheet
      Caption = 'Tab7'
      ImageIndex = 6
      object GRID_DATA7: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA7: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA7Level1: TcxGridLevel
          GridView = DATA7
        end
      end
    end
    object Tab8: TcxTabSheet
      Caption = 'Tab8'
      ImageIndex = 7
      object GRID_DATA8: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA8: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA8Level1: TcxGridLevel
          GridView = DATA8
        end
      end
    end
    object Tab9: TcxTabSheet
      Caption = 'Tab9'
      ImageIndex = 8
      object GRID_DATA9: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA9: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA9Level1: TcxGridLevel
          GridView = DATA9
        end
      end
    end
    object Tab10: TcxTabSheet
      Caption = 'Tab10'
      ImageIndex = 9
      object GRID_DATA10: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA10: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA10Level1: TcxGridLevel
          GridView = DATA10
        end
      end
    end
    object Tab11: TcxTabSheet
      Caption = 'Tab11'
      ImageIndex = 10
      object GRID_DATA11: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA11: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA11Level1: TcxGridLevel
          GridView = DATA11
        end
      end
    end
    object Tab12: TcxTabSheet
      Caption = 'Tab12'
      ImageIndex = 11
      object GRID_DATA12: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA12: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA12Level1: TcxGridLevel
          GridView = DATA12
        end
      end
    end
    object Tab13: TcxTabSheet
      Caption = 'Tab13'
      ImageIndex = 12
      object GRID_DATA13: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA13: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA13Level1: TcxGridLevel
          GridView = DATA13
        end
      end
    end
    object Tab14: TcxTabSheet
      Caption = 'Tab14'
      ImageIndex = 13
      object GRID_DATA14: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA14: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA14Level1: TcxGridLevel
          GridView = DATA14
        end
      end
    end
    object Tab15: TcxTabSheet
      Caption = 'Tab15'
      ImageIndex = 14
      object GRID_DATA15: TcxGrid
        Left = 0
        Top = 0
        Width = 1475
        Height = 564
        Margins.Left = 4
        Margins.Top = 4
        Margins.Right = 4
        Margins.Bottom = 4
        Align = alClient
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -18
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        PopupMenu = PopupMenu
        TabOrder = 0
        object DATA15: TcxGridDBBandedTableView
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
          DataController.DataSource = DS_DATA3
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
          FilterRow.SeparatorWidth = 8
          FixedDataRows.SeparatorWidth = 8
          NewItemRow.SeparatorWidth = 8
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
          OptionsView.NavigatorOffset = 66
          OptionsView.Footer = True
          OptionsView.GroupByBox = False
          OptionsView.GroupFooters = gfAlwaysVisible
          OptionsView.IndicatorWidth = 15
          OptionsView.BandHeaders = False
          OptionsView.FixedBandSeparatorWidth = 3
          Preview.LeftIndent = 26
          Preview.RightIndent = 6
          Bands = <
            item
              VisibleForCustomization = False
            end
            item
              Visible = False
              VisibleForCustomization = False
            end>
        end
        object GRID_DATA15Level1: TcxGridLevel
          GridView = DATA15
        end
      end
    end
  end
  object txtID: TEdit
    Left = 461
    Top = 2
    Width = 157
    Height = 25
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    TabOrder = 1
    Text = 'txtID'
    Visible = False
  end
  object txtModuleName: TEdit
    Left = 648
    Top = 2
    Width = 159
    Height = 25
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    TabOrder = 2
    Text = 'Edit1'
    Visible = False
  end
  object Panel2: TPanel
    Left = 0
    Top = 0
    Width = 1483
    Height = 53
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
    Align = alTop
    BevelOuter = bvNone
    Color = 65021
    ParentBackground = False
    TabOrder = 3
    object LblJudul: TLabel
      AlignWithMargins = True
      Left = 13
      Top = 9
      Width = 367
      Height = 40
      Margins.Left = 13
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alLeft
      AutoSize = False
      Caption = 'LblJudul'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -25
      Font.Name = 'Tahoma'
      Font.Style = [fsBold]
      ParentFont = False
      Visible = False
      ExplicitLeft = -11
      ExplicitTop = 5
    end
    object LblEnddate: TLabel
      AlignWithMargins = True
      Left = 695
      Top = 17
      Width = 51
      Height = 32
      Margins.Left = 4
      Margins.Top = 17
      Margins.Right = 0
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Enddate'
      ExplicitHeight = 17
    end
    object LblStartdate: TLabel
      AlignWithMargins = True
      Left = 430
      Top = 17
      Width = 57
      Height = 32
      Margins.Left = 4
      Margins.Top = 17
      Margins.Right = 0
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Startdate'
      ExplicitHeight = 17
    end
    object BtnClose: TcxButton
      AlignWithMargins = True
      Left = 1386
      Top = 4
      Width = 93
      Height = 45
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = 'C&lose'
      DropDownMenu = ItemMenu
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
        00D9000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000F10000006F0000
        006D00000067000000650000006D0000006D0000006D0000006D0000006D0000
        006D0000006D0000006B000000630000006B0000006D000000AC000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E50000000000000000000000110000
        0016000000000000000000000000000000000000000000000000000000000000
        00000000002B000000000000000000000063000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E70000000000000026000000D5000000E2000000300000
        000000000000000000000000000000000000000000000000007E000000F90000
        007F000000040000006B000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E600000000000000A6000000FF000000FF000000DC0000002F000000000000
        000000000000000000000000007D000000FF000000FF000000FF0000002E0000
        0063000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000000000
        002B000000D3000000FF000000FF000000DC0000003000000000000000000000
        007D000000FF000000FF000000FF0000008A000000040000006A000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E70000000200000000000000270000
        00D4000000FF000000FF000000DC0000003100000076000000FF000000FF0000
        00FF0000008800000000000000000000006D000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E700000002000000000000000000000027000000D30000
        00FF000000FF000000ED000000FA000000FF000000FF00000088000000020000
        0000000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E70000000200000000000000000000000000000025000000CA000000FF0000
        00FF000000FF000000F800000081000000000000000000000000000000000000
        006D000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000020000
        000000000000000000000000000000000091000000FF000000FF000000FF0000
        00EF00000033000000000000000000000000000000000000006D000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E70000000200000000000000000000
        00000000007D000000FC000000FF000000FF000000FF000000FF000000DA0000
        002D0000000000000000000000000000006D000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E70000000200000000000000000000007C000000FE0000
        00FF000000FF00000099000000CA000000FF000000FF000000DB000000310000
        0000000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E700000001000000000000007C000000FF000000FF000000FF000000880000
        000000000023000000D6000000FF000000FF000000DD0000002D000000000000
        006D000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000E7000000000000
        007C000000FF000000FF000000FF000000880000000100000000000000000000
        0029000000D3000000FF000000FF000000E20000001C00000065000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000D1000000FF000000E60000000000000077000000FF0000
        00FF000000890000000000000000000000000000000000000000000000240000
        00D5000000FF000000DA0000001F00000066000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00D1000000FF000000E700000000000000000000007800000088000000000000
        000000000000000000000000000000000000000000000000002A000000A90000
        0029000000000000006D000000FF000000FF0000000000000000000000000000
        00000000000000000000000000000000000000000000000000D1000000FF0000
        00E7000000040000000100000000000000000000000000000002000000020000
        0002000000020000000200000002000000000000000000000000000000020000
        006E000000FF000000FF00000000000000000000000000000000000000000000
        0000000000000000000000000000000000D1000000FF000000FD000000E70000
        00E7000000E6000000E7000000E7000000E7000000E7000000E7000000E70000
        00E7000000E7000000E7000000E6000000E7000000E7000000F1000000FF0000
        00FF000000000000000000000000000000000000000000000000000000000000
        000000000000000000DE000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00AC000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D1000000D1000000D1000000D10000
        00D1000000D1000000D1000000D1000000D10000000000000000000000000000
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
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 0
      OnClick = BtnCloseClick
    end
    object BtnPrint: TcxButton
      AlignWithMargins = True
      Left = 1266
      Top = 4
      Width = 112
      Height = 45
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Print'
      DropDownMenu = ItemPrint
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
        00000000000000000000000000000000004D000000F3000000F3000000F30000
        00F3000000F3000000F3000000F3000000F3000000F3000000F3000000F30000
        00C4000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000052000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000D1000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0051000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000CE0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004D000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000CD00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0097000000CE000000CE000000CE000000DE000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00F6000000CE000000CE000000CE000000C50000000000000000000000000000
        00000000000000000000000000000000000000000000000000C2000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FC00000000000000000000000000000000000000000000
        0000000000000000000000000000000000BB000000FF000000E6000000830000
        007E000000710000007100000071000000710000007100000071000000710000
        00710000007100000071000000710000007500000083000000AA000000FF0000
        00F3000000000000000000000000000000000000000000000000000000000000
        000000000000000000BB000000FF000000C8000000000000001B0000007B0000
        007B0000007B0000007B0000007B0000007B0000007B0000007B0000007B0000
        007B0000007B000000600000000000000042000000FF000000F3000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00BB000000FF000000CC000000000000005A000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00E5000000000000004E000000FF000000F30000000000000000000000000000
        00000000000000000000000000000000000000000000000000BB000000FF0000
        00CC000000000000003F000000C7000000C7000000C7000000C7000000C70000
        00C7000000C7000000C7000000C7000000C7000000C7000000A0000000000000
        004E000000FF000000F300000000000000000000000000000000000000000000
        0000000000000000000000000000000000BB000000FF000000CC000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004F000000FF0000
        00F3000000000000000000000000000000000000000000000000000000000000
        000000000000000000BB000000FF000000C90000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000044000000FF000000F3000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00BB000000FF000000E100000069000000690000006900000069000000690000
        0069000000690000006900000069000000690000006900000069000000690000
        00690000006900000098000000FF000000F30000000000000000000000000000
        00000000000000000000000000000000000000000000000000C0000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FA00000000000000000000000000000000000000000000
        0000000000000000000000000000000000A6000000E2000000E2000000E20000
        00DC000000D1000000D8000000E2000000E2000000E2000000E2000000E20000
        00E2000000E2000000E0000000D1000000D4000000E2000000E2000000E20000
        00D7000000000000000000000000000000000000000000000000000000000000
        0000000000000000000300000005000000050000000500000037000000A20000
        005B000000050000000500000005000000050000000500000005000000050000
        0013000000A20000008600000005000000050000000500000004000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000053000000FF00000092000000000000
        0000000000000000000000000000000000000000000000000015000000FF0000
        00DC000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000051000000FF000000890000000000000000000000000000
        000000000000000000000000000000000011000000FF000000D2000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0052000000FF000000EB000000CF000000CF000000CF000000CF000000CF0000
        00CF000000CF000000D4000000FF000000D10000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000000000004F000000F80000
        00FC000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000F8000000C800000000000000000000000000000000000000000000
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
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 1
    end
    object BtnMenu: TcxButton
      AlignWithMargins = True
      Left = 1141
      Top = 4
      Width = 117
      Height = 45
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Menu'
      DropDownMenu = ItemMenu
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
        00000000000000000000000000000000000000000000000000000000006E0000
        0077000000760000007600000076000000760000007600000076000000760000
        0076000000760000007600000076000000760000007600000076000000770000
        006E000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000F1000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000F1000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000FB000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FB0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000B2000000BF000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BF000000B200000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000B2000000BF000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BF000000B2000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000FB000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FB0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000F1000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000F100000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000370000
        003C0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003C0000
        0037000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000000000000000000000370000003C0000003B0000
        003B0000003B0000003B0000003B0000003B0000003B0000003B0000003B0000
        003B0000003B0000003B0000003B0000003B0000003C00000037000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000F1000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000F10000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000FB000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FB00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000B20000
        00BF000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BF0000
        00B2000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000000B2000000BF000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BD000000BD000000BD000000BD000000BD0000
        00BD000000BD000000BD000000BF000000B20000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000FB000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FB00000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000F10000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00F1000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000006E00000077000000760000
        0076000000760000007600000076000000760000007600000076000000760000
        007600000076000000760000007600000076000000770000006E000000000000
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
        000000000000}
      OptionsImage.Spacing = 0
      SpeedButtonOptions.Flat = True
      TabOrder = 2
    end
    object BtnDateTemplate: TcxButton
      AlignWithMargins = True
      Left = 955
      Top = 4
      Width = 178
      Height = 45
      Margins.Left = 4
      Margins.Top = 4
      Margins.Right = 4
      Margins.Bottom = 4
      Align = alRight
      Caption = '&Date Template'
      DropDownMenu = ItemDate
      Kind = cxbkOfficeDropDown
      OptionsImage.Glyph.SourceDPI = 96
      OptionsImage.Glyph.Data = {
        424D460E00000000000036000000280000001E0000001E000000010020000000
        0000000000007412000074120000000000000000000000000000000000000000
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
        0000000000000000000000000000000000000000000000000000000000D30000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000D30000000000000000000000000000
        000000000000000000000000000000000000000000CF000000E90000005B0000
        004A0000004A0000004A0000005A0000004F0000004A0000004A000000550000
        00550000004A0000004A0000004F0000005A0000004A0000004A0000004A0000
        005B000000E9000000CF00000000000000000000000000000000000000000000
        00000000000000000000000000D4000000D6000000000000007C0000007E0000
        007E00000001000000590000007E0000007E00000028000000280000007E0000
        007E00000059000000010000007E0000007E0000007C00000000000000D60000
        00D4000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000D50000001A000000FF000000FF000000FF0000001F0000
        00CA000000FF000000FF0000006B0000006B000000FF000000FF000000CA0000
        001F000000FF000000FF000000FF0000001A000000D5000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00D500000018000000FF000000FF000000FF0000001D000000C0000000FF0000
        00FF0000006500000065000000FF000000FF000000C00000001D000000FF0000
        00FF000000FF00000018000000D5000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D3000000DB000000030000
        001D0000001D0000001D00000003000000160000001D0000001D0000000C0000
        000C0000001D0000001D00000016000000030000001D0000001D0000001D0000
        0003000000DB000000D300000000000000000000000000000000000000000000
        00000000000000000000000000D3000000D700000012000000BB000000BD0000
        00BD000000160000008C000000BD000000BD0000004A0000004A000000BD0000
        00BD0000008C00000016000000BD000000BD000000BB00000012000000D70000
        00D3000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000D40000001A000000FF000000FF000000FF0000001F0000
        00CB000000FF000000FF0000006B0000006B000000FF000000FF000000CB0000
        001F000000FF000000FF000000FF0000001A000000D4000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00D600000015000000E0000000E3000000E30000001A000000A5000000DF0000
        00DF0000005700000057000000DF000000DF000000A500000019000000DF0000
        00DF000000DC00000015000000D6000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D3000000DC000000000000
        00040000000400000004000000010000000F0000001400000014000000080000
        000800000014000000140000000E000000020000001400000014000000130000
        0002000000DB000000D300000000000000000000000000000000000000000000
        00000000000000000000000000D3000000DC0000000000000000000000000000
        000000000000000000B9000000EE000000EE0000005D0000005D000000EE0000
        00EE000000B00000001B000000EE000000EE000000EB00000016000000D50000
        00D3000000000000000000000000000000000000000000000000000000000000
        0000000000D3000000DC00000000000000000000000000000000000000000000
        00D4000000FF000000FF0000006B0000006B000000FF000000FF000000CA0000
        001F000000FF000000FF000000FF0000001A000000D5000000D3000000000000
        0000000000000000000000000000000000000000000000000000000000D30000
        00DA000000000000000000000000000000000000000000000080000000A80000
        00A80000003B0000003B000000A8000000A80000007A00000009000000A80000
        00A8000000A600000005000000D5000000D30000000000000000000000000000
        000000000000000000000000000000000000000000D1000000E4000000390000
        00390000003900000039000000390000002C0000002900000029000000320000
        003200000029000000290000002D000000370000002900000029000000290000
        0037000000E4000000D100000000000000000000000000000000000000000000
        00000000000000000000000000C9000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00C9000000000000000000000000000000000000000000000000000000000000
        0000000000C9000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000C9000000000000
        0000000000000000000000000000000000000000000000000000000000CA0000
        00FF000000FF000000FD0000009900000086000000F4000000FF000000FF0000
        00FF000000FF000000FF000000FF000000FF000000FF000000F60000008C0000
        0094000000FC000000FF000000FF000000CA0000000000000000000000000000
        000000000000000000000000000000000000000000C7000000FC000000FD0000
        00EF0000000300000000000000D7000000FD000000FC000000FC000000FC0000
        00FC000000FC000000FC000000FD000000D70000000000000003000000EF0000
        00FD000000FC000000C700000000000000000000000000000000000000000000
        00000000000000000000000000180000001E0000003E000000EB000000020000
        0000000000E0000000590000001E0000001E0000001E0000001E0000001E0000
        001E00000059000000DF0000000000000002000000EC0000003E0000001E0000
        0018000000000000000000000000000000000000000000000000000000000000
        000000000000000000000000001A000000FF0000007D00000064000000FF0000
        0038000000000000000000000000000000000000000000000000000000380000
        00FF0000006B00000076000000FF0000001A0000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        0000000000060000008E000000D6000000D8000000A90000000E000000000000
        0000000000000000000000000000000000000000000E000000A1000000D80000
        00D7000000950000000600000000000000000000000000000000000000000000
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
        000000000000}
      OptionsImage.Spacing = 5
      TabOrder = 3
    end
    object BtnEnddate: TcxDateEdit
      AlignWithMargins = True
      Left = 750
      Top = 9
      Hint = 'Enddate'
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
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
      Style.Font.Height = -18
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 4
      OnKeyDown = BtnEnddateKeyDown
      Width = 197
    end
    object BtnStartdate: TcxDateEdit
      AlignWithMargins = True
      Left = 491
      Top = 9
      Hint = 'Startdate'
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
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
      Style.Font.Height = -18
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 5
      OnKeyDown = BtnStartdateKeyDown
      Width = 196
    end
    object cboTipe: TcxComboBox
      AlignWithMargins = True
      Left = 215
      Top = 9
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
      Align = alRight
      ParentFont = False
      Properties.Items.Strings = (
        'Mingguan'
        'Bulanan')
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -18
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      TabOrder = 6
      Text = 'cboTipe'
      Width = 207
    end
    object cxDBLabel1: TcxDBLabel
      AlignWithMargins = True
      Left = 56
      Top = 9
      Margins.Left = 4
      Margins.Top = 9
      Margins.Right = 4
      Margins.Bottom = 9
      Align = alRight
      DataBinding.DataField = 'name'
      DataBinding.DataSource = DS_Cek
      ParentFont = False
      Properties.Alignment.Horz = taRightJustify
      Style.Font.Charset = DEFAULT_CHARSET
      Style.Font.Color = clWindowText
      Style.Font.Height = -18
      Style.Font.Name = 'Tahoma'
      Style.Font.Style = []
      Style.IsFontAssigned = True
      Height = 35
      Width = 151
      AnchorX = 207
    end
  end
  object Layout: TdxLayoutControl
    Left = 719
    Top = 270
    Width = 54
    Height = 34
    Margins.Left = 4
    Margins.Top = 4
    Margins.Right = 4
    Margins.Bottom = 4
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
  object Q_MASTER: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from t_summary limit 0')
    Params = <>
    Left = 96
    Top = 288
  end
  object DS_MASTER: TDataSource
    DataSet = Q_MASTER
    Left = 128
    Top = 288
  end
  object cxGridPopupMenu1: TcxGridPopupMenu
    Grid = GRID_DATA1
    PopupMenus = <>
    Left = 160
    Top = 288
  end
  object ActionList1: TActionList
    Left = 304
    Top = 192
    object actRefresh: TAction
      Caption = '&Refresh Data'
      ShortCut = 116
    end
    object actAdd: TAction
      Caption = '&Add Record'
      ShortCut = 16462
    end
    object actEdit: TAction
      Caption = 'E&dit Record'
      ShortCut = 16453
    end
    object actSave: TAction
      Caption = 'actSave'
      ShortCut = 16467
    end
    object actDelete: TAction
      Caption = 'De&lete Record'
      ShortCut = 16452
    end
    object actcancel: TAction
      Caption = 'actcancel'
      ShortCut = 16474
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
    end
    object actLookup: TAction
      Caption = 'actLookup'
      ShortCut = 118
      OnExecute = actLookupExecute
    end
    object actDBG: TAction
      Caption = 'actDBG'
      ShortCut = 122
      OnExecute = actDBGExecute
    end
  end
  object PopupMenu: TPopupMenu
    Images = MenuLogin.SmallImage
    MenuAnimation = [maTopToBottom]
    Left = 336
    Top = 192
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
    end
    object ImportFromExcel1: TMenuItem
      Caption = '&Import From Excel'
      ImageIndex = 6
      ShortCut = 16498
      Visible = False
      OnClick = ImportFromExcel1Click
    end
    object ppFind: TMenuItem
      Caption = '&Find'
      Hint = 'Find'
      ImageIndex = 8
      ShortCut = 16454
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
    Left = 368
    Top = 192
    object N6ExportWeekly1: TMenuItem
      Caption = '&1 Import Excel'
      OnClick = N6ExportWeekly1Click
    end
    object N2CekJoin1: TMenuItem
      Caption = '&2 Check Import'
      object N1CheckJoin1: TMenuItem
        Caption = '&1 Check Join'
        OnClick = N1CheckJoin1Click
      end
      object N2CheckStruktur1: TMenuItem
        Caption = '&2 Check Struktur'
        OnClick = N2CheckStruktur1Click
      end
      object N3CheckSalary1: TMenuItem
        Caption = '&3 Check Salary'
        OnClick = N3CheckSalary1Click
      end
      object N4CheckBPJSTK1: TMenuItem
        Caption = '&4 Check BPJS TK'
        OnClick = N4CheckBPJSTK1Click
      end
      object N5CheckBPJSKS1: TMenuItem
        Caption = '&5 Check BPJS KS'
        OnClick = N5CheckBPJSKS1Click
      end
      object N6CheckLoan1: TMenuItem
        Caption = '&6 Check Loan'
        OnClick = N6CheckLoan1Click
      end
      object N7CheckRapel1: TMenuItem
        Caption = '&7 Check Rapel'
        OnClick = N7CheckRapel1Click
      end
      object N2CheckAbsensi1: TMenuItem
        Caption = '&8 Check Absensi'
        OnClick = N2CheckAbsensi1Click
      end
      object N9CheckPajak1: TMenuItem
        Caption = '&9 Check Pajak'
        OnClick = N9CheckPajak1Click
      end
      object N0CheckNoRekening1: TMenuItem
        Caption = '&0 Check No. Rekening'
        OnClick = N0CheckNoRekening1Click
      end
      object ACheckResigndate1: TMenuItem
        Caption = '&A Check Resigndate'
        OnClick = ACheckResigndate1Click
      end
    end
    object menuOK: TMenuItem
      Caption = '&3 Process to OK'
      OnClick = menuOKClick
    end
    object menuInsert: TMenuItem
      Caption = '&4 Process Insert '
      OnClick = menuInsertClick
    end
  end
  object ItemPrint: TPopupMenu
    Left = 400
    Top = 192
  end
  object ItemDate: TPopupMenu
    Left = 432
    Top = 192
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
    object hisWeek1: TMenuItem
      Caption = 'T&his Week'
      ShortCut = 16440
      OnClick = hisWeek1Click
    end
    object hisMonth1: TMenuItem
      Caption = 'Th&is Month'
      ShortCut = 16441
      OnClick = hisMonth1Click
    end
  end
  object dxLayoutLookAndFeelList1: TdxLayoutLookAndFeelList
    Left = 192
    Top = 288
    object dxLayoutCxLookAndFeel1: TdxLayoutCxLookAndFeel
      LookAndFeel.SkinName = 'UserSkin'
      PixelsPerInch = 120
    end
  end
  object ApplicationEvents1: TApplicationEvents
    Left = 584
    Top = 256
  end
  object cxGridPopupMenu2: TcxGridPopupMenu
    Grid = GRID_DATA2
    PopupMenus = <>
    Left = 168
    Top = 120
  end
  object DS_Transer: TDataSource
    DataSet = Q_Transfer
    Left = 136
    Top = 120
  end
  object Q_Transfer: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from t_transferbank limit 10')
    Params = <>
    Left = 104
    Top = 120
  end
  object cxGridPopupMenu3: TcxGridPopupMenu
    Grid = GRID_DATA3
    PopupMenus = <>
    Left = 168
    Top = 168
  end
  object DS_Cash: TDataSource
    DataSet = Q_Cash
    Left = 136
    Top = 168
  end
  object Q_Cash: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from t_transferbank limit 10')
    Params = <>
    Left = 104
    Top = 168
  end
  object CImport: TQImport3Xlsx
    DataSet = Q_Import
    Map.Strings = (
      'nip=A2-COLFINISH'
      'name=B2-COLFINISH'
      'tipe=C2-COLFINISH'
      'idtype=D2-COLFINISH')
    Formats.DecimalSeparator = '.'
    Formats.ThousandSeparator = ','
    Formats.DateSeparator = '-'
    Formats.TimeSeparator = ':'
    Formats.BooleanTrue.Strings = (
      'True')
    Formats.BooleanFalse.Strings = (
      'False')
    Formats.NullValues.Strings = (
      'Null')
    Formats.ShortDateFormat = 'M/d/yyyy'
    Formats.LongDateFormat = 'dddd, MMMM dd, yyyy'
    Formats.ShortTimeFormat = 'h:mm AMPM'
    Formats.LongTimeFormat = 'h:mm:ss AMPM'
    FieldFormats = <>
    ErrorLogFileName = 'error.log'
    AddType = qatInsert
    FileName = 'Z:\ShareVM\Kwarto-Rajawali\Latihan\IMPORT.xlsx'
    SheetName = '0_join'
    Left = 272
    Top = 288
  end
  object Q_Import: TZQuery
    SQL.Strings = (
      'select * from 0_join')
    Params = <>
    Left = 272
    Top = 328
  end
  object DS_Import: TDataSource
    DataSet = Q_Import
    Left = 272
    Top = 376
  end
  object DS_Cek: TDataSource
    DataSet = Q_Cek
    Left = 600
    Top = 104
  end
  object Q_Cek: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_processimport_cek limit 0')
    Params = <>
    Left = 568
    Top = 104
  end
  object Q_Cek1: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_processimport_cek limit 0')
    Params = <>
    Left = 568
    Top = 152
  end
  object DS_Cek1: TDataSource
    DataSet = Q_Cek1
    Left = 600
    Top = 152
  end
  object Q_Cek2: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select * from s_processimport_insert limit 0')
    Params = <>
    Left = 568
    Top = 200
  end
  object DS_Cek2: TDataSource
    DataSet = Q_Cek2
    Left = 600
    Top = 200
  end
  object DS_DATA1: TDataSource
    DataSet = Q_DATA1
    Left = 808
    Top = 112
  end
  object Q_DATA1: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 776
    Top = 112
  end
  object cxGridPopupMenu4: TcxGridPopupMenu
    Grid = GRID_DATA1
    PopupMenus = <>
    Left = 840
    Top = 112
  end
  object Q_DATA2: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 776
    Top = 160
  end
  object DS_DATA2: TDataSource
    DataSet = Q_DATA2
    Left = 808
    Top = 160
  end
  object cxGridPopupMenu5: TcxGridPopupMenu
    Grid = GRID_DATA2
    PopupMenus = <>
    Left = 840
    Top = 160
  end
  object Q_DATA3: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 776
    Top = 208
  end
  object DS_DATA3: TDataSource
    DataSet = Q_DATA3
    Left = 808
    Top = 208
  end
  object cxGridPopupMenu6: TcxGridPopupMenu
    Grid = GRID_DATA3
    PopupMenus = <>
    Left = 840
    Top = 208
  end
  object Q_DATA4: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 776
    Top = 248
  end
  object DS_DATA4: TDataSource
    DataSet = Q_DATA4
    Left = 808
    Top = 248
  end
  object cxGridPopupMenu7: TcxGridPopupMenu
    Grid = GRID_DATA4
    PopupMenus = <>
    Left = 840
    Top = 248
  end
  object Q_DATA5: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 776
    Top = 296
  end
  object DS_DATA5: TDataSource
    DataSet = Q_DATA5
    Left = 808
    Top = 296
  end
  object cxGridPopupMenu8: TcxGridPopupMenu
    Grid = GRID_DATA5
    PopupMenus = <>
    Left = 840
    Top = 296
  end
  object cxGridPopupMenu9: TcxGridPopupMenu
    Grid = GRID_DATA10
    PopupMenus = <>
    Left = 992
    Top = 296
  end
  object DS_DATA10: TDataSource
    DataSet = Q_DATA10
    Left = 960
    Top = 296
  end
  object Q_DATA10: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 928
    Top = 296
  end
  object cxGridPopupMenu10: TcxGridPopupMenu
    Grid = GRID_DATA3
    PopupMenus = <>
    Left = 992
    Top = 248
  end
  object DS_DATA9: TDataSource
    DataSet = Q_DATA9
    Left = 960
    Top = 248
  end
  object Q_DATA9: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 928
    Top = 248
  end
  object Q_DATA8: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 928
    Top = 208
  end
  object DS_DATA8: TDataSource
    DataSet = Q_DATA8
    Left = 960
    Top = 208
  end
  object cxGridPopupMenu11: TcxGridPopupMenu
    Grid = GRID_DATA9
    PopupMenus = <>
    Left = 992
    Top = 208
  end
  object cxGridPopupMenu12: TcxGridPopupMenu
    Grid = GRID_DATA7
    PopupMenus = <>
    Left = 992
    Top = 160
  end
  object DS_DATA7: TDataSource
    DataSet = Q_DATA7
    Left = 960
    Top = 160
  end
  object Q_DATA7: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 928
    Top = 160
  end
  object Q_DATA6: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 928
    Top = 112
  end
  object DS_DATA6: TDataSource
    DataSet = Q_DATA6
    Left = 960
    Top = 112
  end
  object cxGridPopupMenu13: TcxGridPopupMenu
    Grid = GRID_DATA6
    PopupMenus = <>
    Left = 992
    Top = 112
  end
  object cxGridPopupMenu14: TcxGridPopupMenu
    Grid = GRID_DATA15
    PopupMenus = <>
    Left = 1152
    Top = 296
  end
  object DS_DATA15: TDataSource
    DataSet = Q_DATA15
    Left = 1120
    Top = 296
  end
  object Q_DATA15: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 1088
    Top = 296
  end
  object cxGridPopupMenu15: TcxGridPopupMenu
    Grid = GRID_DATA14
    PopupMenus = <>
    Left = 1152
    Top = 248
  end
  object DS_DATA14: TDataSource
    DataSet = Q_DATA14
    Left = 1120
    Top = 248
  end
  object Q_DATA14: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 1088
    Top = 248
  end
  object Q_DATA13: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 1088
    Top = 208
  end
  object DS_DATA13: TDataSource
    DataSet = Q_DATA13
    Left = 1120
    Top = 208
  end
  object cxGridPopupMenu16: TcxGridPopupMenu
    Grid = GRID_DATA13
    PopupMenus = <>
    Left = 1152
    Top = 208
  end
  object cxGridPopupMenu17: TcxGridPopupMenu
    Grid = GRID_DATA12
    PopupMenus = <>
    Left = 1152
    Top = 160
  end
  object DS_DATA12: TDataSource
    DataSet = Q_DATA12
    Left = 1120
    Top = 160
  end
  object Q_DATA12: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 1088
    Top = 160
  end
  object Q_DATA11: TZQuery
    Connection = MenuLogin.ZConnection
    SQL.Strings = (
      'select nip from m_employee limit 0')
    Params = <>
    Left = 1088
    Top = 112
  end
  object DS_DATA11: TDataSource
    DataSet = Q_DATA11
    Left = 1120
    Top = 112
  end
  object cxGridPopupMenu18: TcxGridPopupMenu
    Grid = GRID_DATA11
    PopupMenus = <>
    Left = 1152
    Top = 112
  end
end
