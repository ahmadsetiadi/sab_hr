program Sinar;

uses
  Vcl.Forms,
  UMenuLogin in 'UMenuLogin.pas' {MenuLogin},
  Unit1 in 'Unit1.pas',
  ZDataset in 'ZDataset.pas',
  ULookup in 'ULookup.pas' {FrmLookup},
  ULogin in 'ULogin.pas' {FrmLogin},
  USetSkin in 'USetSkin.pas' {FrmSetSkin},
  UChange in 'UChange.pas' {FrmChange},
  UError in 'UError.pas' {FrmError},
  UTerbilang in 'UTerbilang.pas',
  UCombo in 'UCombo.pas' {FrmCombo},
  UUseradmin in 'UUseradmin.pas' {FrmUseradmin},
  UColumn in 'UColumn.pas' {FrmColumn},
  USetting in 'USetting.pas' {FrmSetting},
  UImport in 'UImport.pas' {FrmImport},
  UTreeView in 'UTreeView.pas' {FrmTreeView},
  UProgress in 'UProgress.pas' {FrmProgressBar},
  UMSetting in 'UMSetting.pas' {FrmMSetting},
  UShiftSc in 'UShiftSc.pas' {FrmShiftSc},
  USecurity in 'USecurity.pas' {FrmSecurity},
  UTLeave in 'UTLeave.pas' {FrmTLeave},
  USPTBulanan in 'USPTBulanan.pas' {FrmSPTBulanan},
  Unit2 in 'Unit2.pas',
  UEmployee2 in 'UEmployee2.pas' {FrmEmployee2},
  UImportALL in 'UImportALL.pas' {FrmImportALL},
  USPTTahunan in 'USPTTahunan.pas' {FrmSPTTahunan},
  UPayroll in 'UPayroll.pas' {FrmPayroll},
  URMPP in 'URMPP.pas' {FrmRMPP},
  UJurnal in 'UJurnal.pas' {FrmJurnal},
  UMsg in 'UMsg.pas' {FrmMsg},
  UUserModule in 'UUserModule.pas' {FrmUserModule},
  UReminder in 'UReminder.pas' {FrmReminder},
  UTransferBank in 'UTransferBank.pas' {FrmTransferBank},
  UUserColumn in 'UUserColumn.pas' {FrmUserColumn},
  UUserDetail in 'UUserDetail.pas' {FrmUserDetail},
  UUser in 'UUser.pas' {FrmUser},
  UPayroll2 in 'UPayroll2.pas' {FrmPayroll2},
  Unit3 in 'Unit3.pas',
  UTunjangan2 in 'UTunjangan2.pas' {FrmTunjangan2},
  UTunjangan in 'UTunjangan.pas' {FrmTunjangan},
  UMaster in 'UMaster.pas' {FrmMaster},
  UPesangon in 'UPesangon.pas' {FrmPesangon},
  UAd2 in 'UAd2.pas' {FrmAd2},
  UELeave in 'UELeave.pas' {FrmELeave},
  UTHR in 'UTHR.pas' {FrmTHR},
  UEmployee in 'UEmployee.pas' {FrmEmployee},
  UExcel in 'UExcel.pas',
  UProcessImport in 'UProcessImport.pas' {FrmProcessImport},
  UPayrollSummary in 'UPayrollSummary.pas' {FrmPayrollSummary},
  UAd in 'UAd.pas' {FrmAd},
  USummary in 'USummary.pas' {FrmSummary},
  UFinger in 'UFinger.pas' {FrmFinger},
  UAbsen in 'UAbsen.pas' {FrmAbsen},
  UShift4 in 'UShift4.pas' {FrmShift4},
  UPermit in 'UPermit.pas' {FrmPermit},
  ULoan in 'ULoan.pas' {FrmLoan},
  UJadwal in 'UJadwal.pas' {FrmJadwal};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.Title := 'Human Resource Information System - CV. Sinar Antar Bintang';
  Application.CreateForm(TMenuLogin, MenuLogin);
  Application.CreateForm(TFrmSetSkin, FrmSetSkin);
  Application.CreateForm(TFrmLookup, FrmLookup);
  Application.CreateForm(TFrmChange, FrmChange);
  Application.CreateForm(TFrmError, FrmError);
  Application.CreateForm(TFrmCombo, FrmCombo);
  Application.CreateForm(TFrmSetting, FrmSetting);
  Application.CreateForm(TFrmImport, FrmImport);
  Application.CreateForm(TFrmTreeView, FrmTreeView);
  Application.CreateForm(TFrmProgressBar, FrmProgressBar);
  Application.CreateForm(TFrmMsg, FrmMsg);
  Application.CreateForm(TFrmReminder, FrmReminder);
  Application.Run;
end.
