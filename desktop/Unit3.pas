unit Unit3;

interface
uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, System.StrUtils, System.DateUtils,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls, System.IniFiles,
  Vcl.Imaging.pngimage, System.Actions, Vcl.ActnList, Vcl.Touch.GestureMgr,
  Vcl.Menus, Winapi.Activex, System.Win.ComObj,
  cxGraphics, cxControls, cxLookAndFeels,
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
  cxGridDBBandedTableView, cxClasses, cxGridCustomView, cxGrid,
  cxGridDBLayoutView, cxgridexportlink, dxBarExtItems, dxBar,
  cxDBEditRepository, cxEditRepositoryItems;

procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
procedure HapusPayrollExist(eid : string; payrolldate:tdatetime);
procedure SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery; tipe:string='ST');
procedure operTmpDetail;
function settingBulangPengali(eid:string; PayrollDate:tdatetime) : Integer;
procedure settingJamsostek(q_emp,qh_payroll:tzquery);
function getValueJamsostek(kolom, jid:string; dt:tdatetime):double;
procedure SetSalaryAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery);

implementation

uses unit1, UPayroll;
procedure createPayroll(payrolldate: tDatetime;q_date,q_emp: tzQuery;Pparam: String);
var
  intQ1, intQ2, intQ3,q_tarif, q3, qh_payroll,qd_payroll : TZQuery;
  taxType,cnt, k, bulanPengali, taxIrregular, taxFinal : integer;
  selesai : boolean;
  bjab_pct, bjab_max,jhtYtd, bksYTD, bpsYTD, nettosebelum_m_employee,
  totalgross,totalgross2,bonusthr,bjab,bjab2, tax, pkp, thp,thp2,
  grossUp, jkm,jkk, jpk, ins, pph21sudahdibayar_m_employee,
  totalGrossTanpaTHR, totalGrossTHR, pajakTanpaTHR, pajakDenganTHR, pajakTHR,
  taxALImport, taxImport, bjab_bln, jpsYtd, taxYearly, taxIRImport   : double;
  isTaxALAD, isTaxAD, isTaxIR : Boolean;
  {Q,q1,qry,, q_ptkp,  qz,q_pengali,q_nettosblm, q_bjab: tzQuery;
  ,bulanPengali,thn,bln,tgl,blnbjab: integer;
  sql,hf,employee_id,name: String;
  ,grossYearly,grossytd, jhtYtd,
  ,  ro, : double;
  ,,jhte,jhtc,,,baseJamsostek: double;
  selesai,debug: boolean;
  nettosebelum_m_employee,nettosebelum,pph21sudahdibayar_m_employee:double;
  d1,month1,y1,d2,month2,y2:integer;}
  function getTHP( qh : tzquery) : double;
  var
    d, c : double;
    qt : tzquery;
  begin
    result := 0;
    qt     := createquery;
    qt.Query('select * from m_thp where acc=''D'' ');
    d := 0;
    while not qt.Eof do
    begin
      d := d + qh.getFieldDouble(qt.getFieldString('payrollheaderfield'));
      qt.Next;
    end;

    qt.Query('select * from m_thp where acc=''C'' ');
    c := 0;
    while not qt.Eof do
    begin
      c := c + qh.getFieldDouble(qt.getFieldString('payrollheaderfield'));
      qt.Next;
    end;
    qt.Free;
    result := d - c;
  end;
  procedure SetBulanBjab;
  begin
    bjab_bln := 12;

    if formatdatetime('yyyy-MM', qh_payroll.getFieldDateTime('joindate') ) >
       formatdatetime('yyyy-01', payrolldate )  then
    begin
      //join di tahun ini
      if qh_payroll.isNotNull('resigndate') then
      begin
        //resigndate sudah diisi
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := 1+MonthsBetween(qh_payroll.getFieldDateTime('joindate'), qh_payroll.getFieldDateTime('resigndate'));
        end;
      end else
      begin
        //resigndate kosong
        bjab_bln := 13 - strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('joindate') ) );
      end;
    end else
    begin
      if qh_payroll.isNotNull('resigndate') then
      begin
        //resigndate sudah diisi
        if formatdatetime('yyyy', qh_payroll.getFieldDateTime('resigndate') ) =
           formatdatetime('yyyy', payrolldate ) then
        begin
          bjab_bln := strtoint( formatdatetime('MM', qh_payroll.getFieldDateTime('resigndate') ) );
        end;
      end
    end;
  end;
  function getBiayaJabatan(amount: double): double;
  var
    a: double;
  begin
    a := amount * bjab_pct / 100;
    //if a > (bjab_max * 12 ) then a := bjab_max * 12;
    if a > (bjab_max * bjab_bln ) then a := bjab_max * bjab_bln;
    a := RoundUp(a, 0);
    result := a;
  end;
  function getPPh21(amount: double): double;
  var
    pph21setahun, mulai,sampai,jumlahnilaipajak: double;
    tarif: string;
  begin
      mulai:=0;
      sampai:=0;
      jumlahnilaipajak:=0;
      tarif := 'tarif';
      if qh_payroll.getfieldstring('npwpemployee') = '' then tarif := 'tarifnonnpwp';
      jumlahnilaipajak := amount;
      q3.query('select tdate from m_ptkp where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc');
      q_tarif.query('select * from m_tarif where tdate = '''+q3.date2sql('tdate')+''' and final=0 order by start');

      q_tarif.first;
      pph21setahun := 0;
      while not q_tarif.eof do
      begin
        mulai := q_tarif.getFieldDouble('start');
        sampai := q_tarif.getFieldDouble('finish');
        if jumlahnilaipajak > q_tarif.getFieldDouble('finish') then begin
           pph21setahun := pph21setahun + ((q_tarif.getFieldDouble('finish') - q_tarif.getFieldDouble('start') + 0) * q_tarif.getFieldDouble(tarif) / 100);
        end else
        begin
           pph21setahun := pph21setahun + ((jumlahnilaipajak - (q_tarif.getFieldDouble('start') -1)) * q_tarif.getFieldDouble(tarif) / 100);
           break;
        end;
        q_tarif.next;
      end;
      result := int(pph21setahun);
  end;
  function HitungPajakTHR( totalGross3, totalJHTEmployee3, ptkp3 : double) : double;// totalGrossTanpaTHR, qh_payroll.getfield('totaljhtemployee'), qh_payroll.getfield('nontaxableincome') );
  var
    bjab3, totaltaxdeduct3, netto3, pkp3   : double;
  begin
    result          := 0;
    bjab3           := getBiayaJabatan(totalgross3);
    intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
    if intQ1.recordcount > 0 then
    begin
      if intQ1.getFieldInteger('tidakpotongbjab') > 0 then bjab3 := 0;
    end;
    totaltaxdeduct3 := bjab3 + totalJHTEmployee3;
    netto3          := totalGross3 - totaltaxdeduct3;
    if netto3 > ptkp3 then
    begin
      pkp3            := netto3 - ptkp3;
      pkp3            := pkp3 / 1000;
      pkp3            := int(pkp3) * 1000;
      dbg('pkp3 : '+floattostr(pkp3));
      result          := getPPh21(pkp3);
    end;
  end;
  procedure processHitungPajak;
  begin
    //proses hitung tax
    repeat
      if taxType = 1 then
      begin
        qh_payroll.setfield('taxallowance', (-1) * getQvaluedouble(
          'select sum(taxallowance) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+qh_payroll.getFieldString('employee_id')+''' group by employee_id'));
      end;
      if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
      qh_payroll.setfield('gross',qh_payroll.getfield('totalincome')+
                                  qh_payroll.getfield('taxallowance')+
                                  qh_payroll.getfield('jkm')+
                                  qh_payroll.getfield('jkk')+
                                  qh_payroll.getfield('jkn')+
                                  qh_payroll.getfield('jpk')+
                                  qh_payroll.getfield('ins')
                                  );
      qh_payroll.setfield('gross_mtd', nettosebelum_m_employee + getQvaluedouble(
        'select sum(gross+grossmonthly+thrbonus+thrbonus2+thrbonustaxallowance) from t_payroll2 '+
        'where tdate >= '''+Formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
        'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
        'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id')+
        qh_payroll.getfield('gross')+qh_payroll.getfield('grossmonthly')+qh_payroll.getfield('thrbonus'));
      qh_payroll.setfield('gross_yearly', (qh_payroll.getfield('gross_mtd') * bulanPengali)+
                                           qh_payroll.getfield('grossmonthly')+
                                           qh_payroll.getfield('thrbonus'));
      qh_payroll.setfield('grossdeduct_yearly', qh_payroll.getfield('grossdeduct') * bulanPengali);
      totalGross := (qh_payroll.getfield('thrbonus2')+
                     qh_payroll.getfield('thrbonustaxallowance')+
                     qh_payroll.getfield('gross_yearly')+
                     qh_payroll.getfield('gross_ytd')) -
                       ( qh_payroll.getfield('grossdeduct_yearly')+
                         qh_payroll.getfield('grossdeduct_ytd'));
      totalgross2:= totalgross;
      totalGross := totalGross;
      bonusthr   := qh_payroll.getfield('thrbonus');
      qh_payroll.setfield('totalgross', totalGross);

      totalGrossTHR       := totalgross;
      totalGrossTanpaTHR  := totalGrossTHR - qh_payroll.getfield('thrbonus');
      bjab := getBiayajabatan(totalgrosstanpathr);
      bjab2 := getBiayajabatan(bonusthr);
      intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
      if intQ1.recordcount > 0 then
      begin
        if intQ1.getFieldInteger('tidakpotongbjab') > 0 then
        begin
          bjab := 0;
          bjab2:= 0;
       end;
      end;
      qh_payroll.setfield('bjab', bjab);
      qh_payroll.setfield('bjab2', bjab2);
      if ((bjab+bjab2)<(bjab_max*bjab_bln)) then
      begin
         qh_payroll.setfield('bjab2', bjab2);
      end else
      begin
         qh_payroll.setfield('bjab2', (bjab_max*bjab_bln)-bjab);
      end;
      qh_payroll.setfield('totaltaxdeduct', qh_payroll.getfield('bjab') +
                                            qh_payroll.getfield('bjab2') +
                                            qh_payroll.getfield('totaljhtemployee') +
                                            qh_payroll.getfield('totalbpsemployee') ) ;

      pajakTanpaTHR       := HitungPajakTHR( totalGrossTanpaTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totaljpsemployee'),
                                              qh_payroll.getfield('nontaxableincome') );
      pajakDenganTHR      := HitungPajakTHR( totalGrossTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totaljpsemployee'),
                                             qh_payroll.getfield('nontaxableincome') );
      pajakTHR            := pajakDenganTHR - pajakTanpaTHR;

      qh_payroll.setfield('nett', qh_payroll.getfield('totalgross') - qh_payroll.getfield('totaltaxdeduct'));
      if qh_payroll.getfield('totalgross') <= roundup(qh_payroll.getfield('nontaxableincome_yearly')/12,0) then
      begin
        qh_payroll.setfield('taxableincome', '0');
      end else
      begin
        qh_payroll.setfield('taxableincome', qh_payroll.getfield('nett') - qh_payroll.getfield('nontaxableincome'));
        if qh_payroll.getfield('taxableincome') <= 0 then qh_payroll.setfield('taxableincome', '0');
      end;
        pkp := qh_payroll.getfield('taxableincome');
        pkp := pkp / 1000;
        pkp := int(pkp) * 1000;
        qh_payroll.setfield('roundtaxableincome', pkp);
        if qh_payroll.getfieldstring('npwpemployee') = '' then
        begin
          tax := pkp * (6/100);
        end else
        begin
          tax := pkp * (5/100);
        end;
        qh_payroll.setfield('tax21_yearly', tax);
        tax := tax;

        qh_payroll.setfield('tax21_mtd', nettosebelum_m_employee + getQvaluedouble(
          'select sum(tax21_monthly+thrbonustax) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id')+
          pph21sudahdibayar_m_employee);

        qh_payroll.setfield('tax21_ytd', getQvaluedouble(
          'select sum(tax21_monthly) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );

        tax := tax - qh_payroll.getfield('tax21_ytd');
        tax := int(tax / bulanPengali) + pajakTHR ;
        tax := tax - qh_payroll.getfield('tax21_mtd');
        qh_payroll.setfield('tax21_irregular', pajakTHR);
        qh_payroll.setfield('tax21_monthly', tax);
        if taxIrregular = 2 then qh_payroll.setfield('tax21_monthly', tax + pajakTHR);// kalo gross up
        if isTaxAD then qh_payroll.setfield('tax21_monthly', taxImport);
      thp := getTHP(qh_payroll);
      qh_payroll.setfield('grandtotal',thp);
      if taxtype = 1 then selesai := true;
      if taxtype = 2 then
      begin
        if grossUp = tax then
        begin
          qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
          selesai := true;
        end else
        begin
          qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
          if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
          grossUp := tax;
        end;
      end;
       cnt := cnt + 1;
       thp := getTHP(qh_payroll);
    until (selesai = true) or (cnt >= 100);
    if taxIrregular = 2 then
    begin
      qh_payroll.setfield('tax21_monthly', qh_payroll.getfield('tax21_monthly')-
                                           qh_payroll.getfield('tax21_irregular') );
    end;

     // selesai proses hitung tax
    qh_payroll.setfield('takehomepay', thp );
  end; //selesai prosess hitung pajak 1 yang dibawah 7jt
  procedure processHitungPajak2;
  begin
    //proses hitung tax
    bulanPengali := settingBulangPengali(q_emp.getFieldString('employee_id'), payrolldate);
    repeat
      if taxType = 1 then
      begin
        qh_payroll.setfield('taxallowance', (-1) * getQvaluedouble(
          'select sum(taxallowance) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+qh_payroll.getFieldString('employee_id')+''' group by employee_id'));
      end;
      if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
      qh_payroll.setfield('gross',qh_payroll.getfield('totalincome')+
                                  qh_payroll.getfield('taxallowance')+
                                  qh_payroll.getfield('jkm')+
                                  qh_payroll.getfield('jkk')+
                                  qh_payroll.getfield('jkn')+
                                  qh_payroll.getfield('jpk')+
                                  qh_payroll.getfield('ins')
                                  );
      qh_payroll.setfield('gross_mtd', nettosebelum_m_employee + getQvaluedouble(
        'select sum(gross+grossmonthly+thrbonus+thrbonus2+thrbonustaxallowance) from t_payroll2 '+
        'where tdate >= '''+Formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
        'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
        'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id')+
        qh_payroll.getfield('gross')+qh_payroll.getfield('grossmonthly')+qh_payroll.getfield('thrbonus'));
      qh_payroll.setfield('gross_yearly', (qh_payroll.getfield('gross_mtd') * bulanPengali)+
                                           qh_payroll.getfield('grossmonthly')+
                                           qh_payroll.getfield('thrbonus'));
      qh_payroll.setfield('grossdeduct_yearly', qh_payroll.getfield('grossdeduct') * bulanPengali);
      dbg('taxallowance : '+qh_payroll.getfieldstring('taxallowance')+es+
          'gross : '+qh_payroll.getfieldstring('gross')+es+
          'grossmonthly : '+qh_payroll.getfieldstring('grossmonthly')+es+
          'thrbonus : '+qh_payroll.getfieldstring('thrbonus')+es+
          'thrbonus2 : '+qh_payroll.getfieldstring('thrbonus2')+es+
          'thrbonustaxallowance : '+qh_payroll.getfieldstring('thrbonustaxallowance')+es+
          'gross_mtd : '+qh_payroll.getfieldstring('gross_mtd')+es+
          'bulanpengali : '+inttostr(bulanpengali)+es+
          'gross_yearly : '+qh_payroll.getfieldstring('gross_yearly')+es+
          'gross_ytd : '+qh_payroll.getfieldstring('gross_ytd')+es+
          'grossdeduct_yearly : '+qh_payroll.getfieldstring('grossdeduct_yearly')+es+
          'grossdeduct_ytd : '+qh_payroll.getfieldstring('thrbonus2'));
      totalGross := (qh_payroll.getfield('thrbonus2')+
                     qh_payroll.getfield('thrbonustaxallowance')+
                     qh_payroll.getfield('gross_yearly')+
                     qh_payroll.getfield('gross_ytd')) -
                       ( qh_payroll.getfield('grossdeduct_yearly')+
                         qh_payroll.getfield('grossdeduct_ytd'));
      totalgross2:= totalgross;
      totalGross := totalGross;
      bonusthr   := qh_payroll.getfield('thrbonus');
      //dbg('totalgross : '+floattostr(totalgross) );
      qh_payroll.setfield('totalgross', totalGross);

      { tambah 20 agustus 2014}
      totalGrossTHR       := totalgross;
      totalGrossTanpaTHR  := totalGrossTHR - qh_payroll.getfield('thrbonus');
      pajakTanpaTHR       := HitungPajakTHR( totalGrossTanpaTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totalbpsemployee'),
                                              qh_payroll.getfield('nontaxableincome_yearly') );
      pajakDenganTHR      := HitungPajakTHR( totalGrossTHR,
                                                  qh_payroll.getfield('totaljhtemployee')+
                                                  qh_payroll.getfield('totalbpsemployee'),
                                             qh_payroll.getfield('nontaxableincome_yearly') );
      pajakTHR            := pajakDenganTHR - pajakTanpaTHR;
      dbg('totalgrossTHR : '+floattostr(totalGrossTHR)+#13+#10+
          'totalGrossTanpaTHR : '+floattostr(totalGrosstanpaTHR)+#13+#10+
          'PajakTanpaTHR : '+floattostr(pajaktanpaTHR)+#13+#10+
          'pajakdenganTHR : '+floattostr(pajakdenganTHR)+#13+#10+
          'pajakTHR : '+floattostr(pajakTHR) );
      { tambah 20 agustus 2014}

      bjab := getBiayajabatan(totalgrosstanpathr);
      bjab2 := getBiayajabatan(bonusthr);
      intQ1.query('SELECT * FROM m_employeestatus WHERE employeestatus_id ='''+qh_payroll.getFieldString('employeestatus_id')+''' ');
      if intQ1.recordcount > 0 then
      begin
        if intQ1.getFieldInteger('tidakpotongbjab') > 0 then
        begin
          bjab := 0;
          bjab2:= 0;
       end;
      end;
      qh_payroll.setfield('bjab', bjab);
      qh_payroll.setfield('bjab2', bjab2);
      if ((bjab+bjab2)<(bjab_max*bjab_bln)) then
      begin
         qh_payroll.setfield('bjab2', bjab2);
      end else
      begin
         qh_payroll.setfield('bjab2', (bjab_max*bjab_bln)-bjab);
      end;
      qh_payroll.setfield('totaltaxdeduct', qh_payroll.getfield('bjab') +
                                            qh_payroll.getfield('bjab2') +
                                            qh_payroll.getfield('totaljhtemployee') +
                                            qh_payroll.getfield('totalbpsemployee') ) ;
      qh_payroll.setfield('nett', qh_payroll.getfield('totalgross') - qh_payroll.getfield('totaltaxdeduct'));

        qh_payroll.setfield('taxableincome', qh_payroll.getfield('nett') - qh_payroll.getfield('nontaxableincome_yearly'));
        if qh_payroll.getfield('taxableincome') <= 0 then qh_payroll.setfield('taxableincome', '0');

        pkp := qh_payroll.getfield('taxableincome');
        pkp := pkp / 1000;
        pkp := int(pkp) * 1000;
        qh_payroll.setfield('roundtaxableincome', pkp);
        taxYearly := getPPh21(pkp);
        qh_payroll.setfield('tax21_yearly', taxYearly);
        qh_payroll.setfield('tax21_irregular', pajakTHR);
        if isTaxIR then qh_payroll.setfield('tax21_irregular', taxIRImport);

        qh_payroll.setfield('tax21_mtd', nettosebelum_m_employee + getQvaluedouble(
          'select sum(tax21_monthly) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id')+
          pph21sudahdibayar_m_employee);
        dbg('tax21_mtd : '+qh_payroll.getFieldString('tax21_mtd'));

        qh_payroll.setfield('tax21_ytd', getQvaluedouble(
          'select sum(pph21sebelum+thrbonustax+tax21_monthly) from t_payroll2 '+
          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
          'tdate < '''+formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );
        dbg('tax21_ytd : '+qh_payroll.getFieldString('tax21_ytd'));

        tax := roundUp( (taxYearly - qh_payroll.getfield('tax21_ytd')) / bulanPengali, 0); //ini kalo pajak lebih nya di bagi tiap bulan
      if tax < 0 then
      begin
        //ini kalo tax nya minus dan bukan bulan desember, maka pajak nol
        if formatdatetime('mm', qh_payroll.getfield('tdate')) < '12' then tax := 0;

        intQ1.query('select resigndate from m_employee where employee_id = '+qh_payroll.getQ('employee_id'));
        if intQ1.RecordCount > 0 then
        begin
          //ini kalo tax nya minus dan belum resign, maka pajak nol
          if intQ1.isNull('resigndate') then tax := 0 else
          begin
            //ini kalo tax nya minus dan sudah resign dan resign dibulan setelah payroll, maka pajak nol
            if intQ1.date2sql('resigndate') > qh_payroll.date2sql('tdate') then tax := 0;
          end;
        end;
      end;

      if (bulanPengali = 1) or (qh_payroll.isNotNull('resigndate')) then
      begin  //ini kalo pengali satu ataupun sudah resign tapi pengali >=1, harus hitung sisa pajakny
        intQ1.query('select sum(tax21_irregular+tax21_monthly+pph21sebelum+thrbonustax) as pphsdhdibayar from t_payroll where employee_id = '''+qh_payroll.getfieldstring('employee_id')+''' and year(tdate) = '+formatdatetime('yyyy', payrolldate)+' and  month(tdate) <> 12 group by employee_id');
        if intQ1.recordcount>0 then tax :=  taxYearly - intQ1.getfielddouble('pphsdhdibayar');
      end;

      qh_payroll.setfield('tax21_monthly', tax);
      if taxIrregular = 2 then qh_payroll.setfield('tax21_monthly', tax + pajakTHR);// kalo gross up
      if isTaxAD then qh_payroll.setfield('tax21_monthly', taxImport);

      if taxtype = 1 then selesai := true;
      if taxtype = 2 then
      begin
        if grossUp = tax then
        begin
          qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
          selesai := true;
        end else
        begin
          qh_payroll.setfield('taxallowance', qh_payroll.getfield('tax21_monthly'));
          if isTaxALAD then qh_payroll.setfield('taxallowance', taxALImport);
          grossUp := tax;
        end;
      end;
       cnt := cnt + 1;
       thp := getTHP(qh_payroll);
    until (selesai = true) or (cnt >= 100);
    if taxIrregular = 2 then
    begin
      qh_payroll.setfield('tax21_monthly', qh_payroll.getfield('tax21_monthly')-
                                           qh_payroll.getfield('tax21_irregular') );
    end;
    thp := getTHP(qh_payroll);
    qh_payroll.setfield('grandtotal',thp);
    qh_payroll.setfield('takehomepay', thp );
  end; //selesai hitung pajak 2 diatas 7jt

begin
  //frmpayroll.ShowProgressbar;
  qh_payroll  := createQuery;
  qd_payroll  := createQuery;
  intQ1       := createQuery;
  intQ2       := createQuery;
  intQ3       := createQuery;
  q_tarif     := createQuery;
  q3          := createQuery;
  if q3.query('select * from m_biayajabatan where tdate <= '''+date2sql(payrolldate)+''' order by tdate desc limit 1') > 0 then
  begin
    bjab_pct := q3.getfielddouble('biayajabatan');
    bjab_max := q3.getfielddouble('maxbiayajabatan');
  end;
  executeSQL('truncate tmp_payroll_detail2');
  qh_payroll.query('select * from t_payroll2 limit 0 ');
  qd_payroll.query('select * from tmp_payroll_detail2 limit 0');

    HapusPayrollExist(q_emp.getFieldString('employee_id'), payrolldate);
    //dbg('hapus payroll exist');
    qh_payroll.Append;
    q_date.first;
    while not q_date.eof do
    begin
      if qh_payroll.isfieldexist(q_date.getField('payrollfield')) = true then
      begin
        qh_payroll.setField(q_date.getField('payrollfield'), q_date.getField('tdate'));
      end;
      q_date.next;
    end;
    //dbg('set payrolldate');
    for k := 0 to q_emp.fieldcount - 1 do
    begin
      if qh_payroll.isfieldexist(q_emp.fieldname(k)) = true then
      begin
        qh_payroll.setField(q_emp.fieldname(k), q_emp.getField(q_emp.fieldname(k)));
      end;
    end;
    //dbg('set default from m_employee');
    intQ1.Query('select * from m_employee_mutation where '+es+
                ' '+gets('employee_id', qh_payroll)+' and '+es+
                'tdate <='''+date2sql(payrolldate)+''' '+es+
                'order by tdate desc limit 1');
    pesan(intQ1.SQL.Text);
    if intQ1.RecordCount > 0 then
    begin
      for k := 0 to intQ1.fieldcount - 1 do
      begin
        if (intQ1.fieldName(k) = 'employee_mutation_id') or (intQ1.fieldName(k) = 'tdate') or
           (intQ1.fieldName(k) = 'sknumber') or (intQ1.fieldName(k) = 'useradded') or (intQ1.fieldName(k) = 'dateadded') or
           (intQ1.fieldName(k) = 'useredited') or (intQ1.fieldName(k) = 'dateedited') then
        begin
        end else
        begin
          if qh_payroll.isfieldexist(intQ1.fieldname(k)) = true then
          begin
            qh_payroll.setField(intQ1.fieldname(k), intQ1.getField(intQ1.fieldname(k)));
            dbg(intQ1.fieldName(k) + ' : ' +qh_payroll.getFieldString(intQ1.fieldname(k)));
          end;
        end;
      end;
    end;
    //dbg('set default from m_employee_mutation');
    qh_payroll.SetMultiField('taxallowance,totalincome,basejamsostek,'+
                'jkm,jkk,jkn,jpk,ins,gross,grossmonthly,'+
                'thrbonus,gross_mtd,gross_yearly,gross_ytd,nettosebelum,'+
                'grossdeduct,grossdeduct_yearly,grossdeduct_ytd,'+
                'thrbonus2,thrbonustaxallowance,thrbonustax,'+
                'totalgross,bjab,bjab2,'+
                'jhtemployee,jhtemployee_ytd,jhtemployee_yearly,totaljhtemployee,'+
                'jpsemployee,jpsemployee_ytd,jpsemployee_yearly,totaljpsemployee,'+
                'othertaxdeduct,totaltaxdeduct,nett,workday,workday_ytd,totalworkday,'+
                'nontaxableincome_yearly,nontaxableincome,taxableincome,roundtaxableincome,'+
                'tax21_yearly,tax21_mtd,tax21_ytd,pph21sebelum,tax21_irregular,tax21_monthly,'+
                'jhtcompany,jpscompany,otherincome,jknemployee,otherdeduction,grandtotal,rounding,takehomepay',0);
    if ( qh_payroll.date2sql('resigndate') < qh_payroll.date2sql('startdate') ) or
       ( qh_payroll.date2sql('resigndate') > qh_payroll.date2sql('enddate') ) then
    begin
      //dbg('ok1');
      qh_payroll.setField('resigndate', null);
    end;

    qh_payroll.setField('npwpdate', null);
    qh_payroll.setField('npwpemployee', '');
    if q_emp.isNull('npwp') then
    begin
      //dbg('npwp null');
      qh_payroll.setField('npwpemployee', '')
    end else
    begin
      if q_emp.isNotNull('npwpdate') then
      begin
        //dbg('npwp date is not null');
        if Lastday(qh_payroll.getFieldDateTime('enddate')) >= Lastday(q_emp.getFieldDateTime('npwpdate')) then
        begin
          qh_payroll.setField('npwpdate', q_emp.getField('npwpdate'));
          qh_payroll.setField('npwpemployee', q_emp.getField('npwp'));
        end;
      end else
      begin
        //dbg('npwp date is null');
        qh_payroll.setField('npwpemployee', q_emp.getField('npwp'));
      end;
    end;
    qh_payroll.Post;
    qh_payroll.Edit;

    SetBulanBjab;
    //dbg('default 0');
    SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll);
    //dbg('set salary non at');
    qh_payroll.Post;
      //bulanPengali := settingBulangPengali(q_emp.getFieldString('employee_id'), payrolldate);
    bulanPengali := 1;
    //dbg('set bulan pengali');
    settingJamsostek(q_emp, qh_payroll);
    //dbg('set bulan jamsostek');
    selesai := false;
    taxType := qh_payroll.getfield('taxtype');
    taxIrregular := qh_payroll.getfield('taxirregular');
    taxFinal     := qh_payroll.getfield('taxfinal');
    qh_payroll.edit;

    //process THR not joingaji
    intQ1.query('select sum(amount) as thrbonus2, sum(taxallowance) as thrbonustaxallowance,'+es+
                   'sum(pph21) as thrbonustax from t_thr where '+es+
                   'joingaji = 0 and '+es+
                   'year(tdate) = '''+qh_payroll.getYearSQL('tdate')+''' and '+
                   'month(tdate) = '''+qh_payroll.getMonthSQL('tdate')+''' and '+es+
                   'employee_id = '+qh_payroll.getQ('employee_id')+ ' group by employee_id');
    if intQ1.RecordCount > 0 then qh_payroll.SetMultiFieldQ('thrbonus2,thrbonustaxallowance,thrbonustax', intQ1);
    //end process THR not joingaji

    /// cari netto sebelum di m_employee, setelah diambil, diisi 0
    nettosebelum_m_employee := getQValuedouble('select nettosebelum from m_employee where employee_id = '+q_emp.getQ('employee_id'));
    ExecuteSQL('update m_employee set nettosebelum=0 where employee_id = '+q_emp.getQ('employee_id'));
    qh_payroll.setfield('nettosebelum',nettosebelum_m_employee);
    //dbg('set nettosebelum');

    pph21sudahdibayar_m_employee := getQValuedouble('select pph21sebelum from m_employee where employee_id = '+q_emp.getQ('employee_id'));
    ExecuteSQL('update m_employee set pph21sebelum=0 where employee_id = '+q_emp.getQ('employee_id'));
    qh_payroll.setfield('pph21sebelum', pph21sudahdibayar_m_employee);
    //dbg('set pph21sebelum');

    //tambahin disini 2015-07-05
    qh_payroll.setfield('gross_ytd', nettosebelum_m_employee + getQvaluedouble(
      'select sum(gross+grossmonthly+thrbonus+thrbonus2+thrbonustaxallowance) from t_payroll2 '+
      'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );

    //dbg('set gross ytd');

    qh_payroll.setfield('grossdeduct_ytd', getQValueDouble('select sum(grossdeduct) from t_payroll2 '+
      'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );
    //dbg('set gross deduct ytd');

    qh_payroll.setfield('workday_ytd', getQvaluedouble('select sum(workday) from t_payroll2 '+
      'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id') );
    qh_payroll.setfield('totalworkday', qh_payroll.getfield('workday_ytd')+qh_payroll.getfield('workday'));

    jhtYtd := getQvaluedouble('select sum(jhtemployee) from t_payroll2 '+
      'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('jhtemployee_ytd', jhtytd);
    qh_payroll.setfield('jhtemployee_yearly', qh_payroll.getfield('jhtemployee') * bulanPengali);
    qh_payroll.setfield('totaljhtemployee', qh_payroll.getfield('jhtemployee_yearly')+jhtytd);
    //dbg('set jht employee');

    {
    bks bukan pengurang pajak kaya jht
    bksYtd := getQvaluedouble('select sum(bksemployee) from t_payroll2 '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('bksemployee_ytd', bksytd);
    qh_payroll.setfield('bksemployee_yearly', qh_payroll.getfield('bksemployee') * bulanPengali);
    qh_payroll.setfield('totalbksemployee', qh_payroll.getfield('bksemployee_yearly')+bksytd);}
    //dbg('set bks employee');

    jpsYtd := getQvaluedouble('select sum(jpsemployee) from t_payroll2 '+
                          'where tdate >= '''+Formatdatetime('yyyy-01-01', payrolldate)+''' and '+
                          'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
                          'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id');
    qh_payroll.setfield('jpsemployee_ytd', jpsytd);
    qh_payroll.setfield('jpsemployee_yearly', qh_payroll.getfield('jpsemployee') * bulanPengali);
    qh_payroll.setfield('totaljpsemployee', qh_payroll.getfield('jpsemployee_yearly')+jpsytd);
    //dbg('set jps employee');

    qh_payroll.setfield('nontaxableincome_yearly', getqvaluedouble('select ptkp from m_ptkp '+
                        'where name='''+q_emp.getFieldString('ptkp')+''' '+
                        'and tdate <='''+formatdatetime('yyyy-mm-dd', payrolldate)+''' '+
                        'order by tdate desc limit 1') );
    qh_payroll.setfield('nontaxableincome', (qh_payroll.getfield('nontaxableincome_yearly')/360)*qh_payroll.getfield('totalworkday'));
    qh_payroll.setfield('nontaxableincome', RoundUp( qh_payroll.getfield('nontaxableincome'), 0) );
    //pajak diimport di t_ad
    taxALImport := 0;
    taxImport   := 0;
    isTaxALAD   := False;
    isTaxAD     := False;
    isTaxIR     := False;
    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 90 group by employee_id'); //T. Pajak
    if intQ1.recordcount>0 then
    begin
      isTaxALAD   := True;
      taxALImport := intQ1.getFieldDouble('amount');
    end;

    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 91 group by employee_id'); //P. Pajak
    if intQ1.recordcount>0 then
    begin
      isTaxAD   := True;
      taxImport := intQ1.getFieldDouble('amount');
    end;

    intQ1.query('select coalesce(sum(t_ad.amount),0)  as amount from t_ad '+es+
                'where employee_id = '''+q_emp.getFieldString('employee_id')+''' and '+es+
                'tdate >= '''+qh_payroll.date2sql('startdate')+''' and '+es+
                'tdate <= '''+qh_payroll.date2sql('enddate')+'''  and '+es+
                'salary_id = 313 group by employee_id'); //P. Pajak irregular
    if intQ1.recordcount>0 then
    begin
      isTaxIR     := True;
      taxIRImport := intQ1.getFieldDouble('amount');
    end;
    //pajak diimport di t_ad

    qh_payroll.setfield('gross',qh_payroll.getfield('totalincome')+
                                qh_payroll.getfield('taxallowance')+
                                qh_payroll.getfield('jkm')+
                                qh_payroll.getfield('jkk')+
                                qh_payroll.getfield('jkn')+
                                qh_payroll.getfield('jpk')+
                                qh_payroll.getfield('ins')
                                );
    qh_payroll.setfield('gross_mtd', nettosebelum_m_employee + getQvaluedouble(
      'select sum(gross+grossmonthly+thrbonus+thrbonus2+thrbonustaxallowance) from t_payroll2 '+
      'where tdate >= '''+Formatdatetime('yyyy-mm-01', payrolldate)+''' and '+
      'tdate < '''+formatdatetime('yyyy-mm-dd', payrolldate)+''' and '+
      'employee_id = '''+q_emp.getFieldString('employee_id')+''' group by employee_id')+
      qh_payroll.getfield('gross')+qh_payroll.getfield('grossmonthly')+qh_payroll.getfield('thrbonus'));
    dbg('gross_mtd : '+qh_payroll.getFieldString('gross_mtd'));
    if qh_payroll.getField('gross_mtd') >= 7000000 then
    begin
      dbg('hitung pajak 2');
      processHitungPajak2;
    end else
    begin
      dbg('hitung pajak 1');
      processHitungPajak;
    end;
    //dbg('set proses hitung pajak');
    qh_payroll.Post;
    SetSalaryAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll);
    //dbg('set salary AT');
    qh_payroll.Edit;
    SetSalaryNonAT(payrolldate,q_date,q_emp, qh_payroll, qd_payroll, 'ST2');
    //dbg('set salary non AT 2');
    isiKolomUser(True, qh_payroll);
    qh_payroll.Post;
    operTmpDetail;
    //dbg('set oper tmp detail');
  qh_payroll.Free;
  qd_payroll.Free;
  intQ1.Free;
  intQ2.Free;
  intQ3.Free;
  Q3.Free;
  q_tarif.Free;
end;

procedure HapusPayrollExist(eid : string; payrolldate:tdatetime);
var
  xx : tzquery;
begin
  xx := createquery;
  xx.query('select payroll_id from t_payroll2 where employee_id = '''+eid+''' and tdate = '''+date2sql(payrolldate)+'''');
  if xx.recordcount > 0 then
  begin
    ExecuteSQL('delete from t_payroll_detail2 where payroll_id = '+xx.getQ('payroll_id'));
    ExecuteSQL('delete from t_payroll2 where payroll_id = '+xx.getQ('payroll_id'));
  end;

  xx.Free;
end;
procedure SetSalaryNonAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery; tipe:string='ST');
var
  Q, qry : TZQuery;
  sql, hf : string;
  k : integer;
begin
  Q   := createQuery;
  qry := createQuery;
  Q.query('select * from m_salary where txtlap = '''+tipe+''' order by procorder');
  q.First;
  while not q.Eof do
  begin
    sql := q.getField('param');
    hf  := q.getField('payrollheaderfield');
    sql := trim(sql);
    if trim(Sql) <> '' then
    begin
      sql := Replace(sql,'$EMPLOYEE_ID', q_emp.getFieldString('employee_id'));
      sql := Replace(sql,'$SALARY_ID', q.getFieldString('salary_id'));
      q_date.first;
      while not q_date.eof do
      begin
        sql := Replace(sql, '$'+q_date.getFieldString('payrollfield'), q_date.date2sql('tdate'));
        q_date.next;
      end;
      {pesan('name : '+q.getFieldString('name')+es+
          'slipname : '+q.getFieldString('slipname')+es+
          'sql : '+sql);}
      if qry.query(sql) > 0 then
      begin
         //dbg('salary : '+q.getFieldString('name'));
         if qry.isfieldexist('amount') then
         begin
           if hf <> '' then
           begin
             qh_payroll.setfield(hf, qh_payroll.getfield(hf) + int(qry.getFieldDouble('amount'))); //disini hilangin koma
           end;
           qd_payroll.Append;
           qd_payroll.Setfield('payroll_id', qh_payroll.getField('payroll_id'));
           qd_payroll.copyData(q);
           qd_payroll.setfield('amount', qry.getFieldDouble('amount'));
           qd_payroll.setfield('debugamount', 0);
           qd_payroll.setfield('diff', 0);
           qd_payroll.post;
         end;
         for k := 0 to qry.fieldcount - 1 do
         begin
           if uppercase(qry.fieldname(k)) <> 'AMOUNT' then
           begin
             if qh_payroll.isfieldexist(qry.fieldname(k)) = true then
             begin
                qh_payroll.setfield(qry.fieldName(k), qry.getfield(qry.fieldName(k)));
                qh_payroll.post;
             end;
           end;
         end;
      end;
    end;
    q.Next;
  end;
  Q.Free;
  qry.free;
end;
procedure operTmpDetail;
begin
  ExecuteSQL('insert into t_payroll_detail2 (payroll_id,salary_id,amount,debugamount,diff,salarycode,name,slipname,acc,sliporder,summaryorder) '+
              'select payroll_id,salary_id,amount,debugamount,diff,salarycode,name,slipname,acc,sliporder,summaryorder from tmp_payroll_detail2 ');
  ExecuteSQL('truncate tmp_payroll_detail2');
end;
function settingBulangPengali(eid:string; PayrollDate:tdatetime) : Integer;
var
  q : tzquery;
  sthn, y1,month1,d1,y2,month2,d2, thn,bln,tgl : word;
begin
  decodedate(payrolldate,thn,bln,tgl);
  result := 13-bln;
  q := createquery;
  q.query('select resigndate from m_employee where employee_id='''+eid+ '''');
  if not q.isNull('resigndate') then
  begin
    sthn := getQValueInteger('select yearly from m_resigntype where '+gets('resigntype_id', q)+' ');
    decodedate(payrolldate,y1,month1,d1);
    decodedate(q.getfield('resigndate'),y2,month2,d2);
    if (y1=y2) and (month1=month2) then
    begin
     if sthn = 1 then result := 13-bln else result :=1; //liat disetahunkan atau tidak di m_resigntype nya
    end else
    begin
     result := 13-bln;
    end;
  end  else
  begin
    result := 13-bln;
  end;
  q.Free;
end;
function getValueJamsostek(kolom, jid:string; dt:tdatetime):double;
begin
  result := 0;
  kolom  := lowercase(kolom);
  result := getQValueDouble('select base from m_jamsostekrate '+es+
                'where jamsostek_id='''+jid+''' and name='''+kolom+''' '+es+
                'and tdate <='''+date2sql(dt)+''' order by tdate desc limit 1 ');
end;
procedure settingJamsostek(q_emp,qh_payroll:tzquery) ;
var
  q1 : tzquery;
  minBase, maxBaseJKN, maxBaseJPS, baseJamsostek,
  jkm, jkk, jhtc, jhte, jknc, jkne , jpsc, jpse,
  jkmr, jkkr, jhtcr, jhter, jkncr, jkner , jpscr, jpser : double;
begin
  qh_payroll.Edit;
  jkm  := 0;    jkmr  := 0;
  jkk  := 0;    jkkr  := 0;
  jhtc := 0;    jhtcr := 0;
  jhte := 0;    jhter := 0;
  jknc := 0;    jkncr := 0;
  jkne := 0;    jkner := 0;
  jpsc := 0;    jpscr := 0;
  jpse := 0;    jpser := 0;

  q1   := createquery;
  {q1.query(' select  e.employee_id, j.* '+
           ' from m_employee e '+
           ' left join m_jamsostek j on j.jamsostek_id = e.jamsostek_id '+
           ' where e.employee_id = '''+q_emp.getfieldstring('employee_id')+'''');}
  q1.query(' select * from m_jamsostek where '+gets('jamsostek_id', qh_payroll)+' ');
  //pesan(q1.SQL.Text);
  if q1.recordcount > 0 then
  begin
    //dbg(uppercase(q1.getfieldstring('type')));
    baseJamsostek := 0;
    if uppercase(q1.getfieldstring('type')) = 'RATE' then
    begin
      minbase       := getValueJamsostek('Min Base',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
      basejamsostek := getQvaluedouble('select sum(amount)  from tmp_payroll_detail '+
                                 ' inner join m_salary on '+
                                 ' m_salary.salary_id = tmp_payroll_detail.salary_id '+
                                 ' where m_salary.slipname in '+
                                 ' (select slipname from m_jamsostek_base '+
                                 ' where jamsostek_id = '''+q1.getfieldstring('jamsostek_id')+''') '+
                                 ' group by payroll_id ');
      if baseJamsostek <= minBase then baseJamsostek := minBase;
    end else
    if uppercase(q1.getfieldstring('type')) = 'FIX BASE' then
    begin
      baseJamsostek := getValueJamsostek('Fix Base',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    end;

    jkmr        := getValueJamsostek('JKM Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkkr        := getValueJamsostek('JKK Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jhtcr       := getValueJamsostek('JHTComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jhter       := getValueJamsostek('JHTEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkncr       := getValueJamsostek('JKNComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jkner       := getValueJamsostek('JKNEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jpscr       := getValueJamsostek('JPSComp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    jpser       := getValueJamsostek('JPSEmp Rate',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    maxBaseJKN  := getValueJamsostek('Max Base BPJS Kesehatan',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));
    maxBaseJPS  := getValueJamsostek('Max Base BPJS Pensiun',  q1.getFieldString('jamsostek_id') ,qh_payroll.getFieldDateTime('tdate'));

    if baseJamsostek > 0 then
    begin
      jkm       := round( (jkmr *baseJamsostek)  / 100 );
      jkk       := round( (jkkr *baseJamsostek)  / 100 );
      jhte      := round( (jhter*baseJamsostek)  / 100 );
      jhtc      := round( (jhtcr*baseJamsostek)  / 100 );
      jknc      := round( (jkncr*basejamsostek)  / 100 );
      jkne      := round( (jkner*basejamsostek)  / 100 );
      jpsc      := round( (jpscr*basejamsostek)  / 100 );
      jpse      := round( (jpser*basejamsostek)  / 100 );
      if basejamsostek >= maxBaseJKN then
      begin
        jknc    := round( (jkncr*maxBaseJKN) / 100 );
        jkne    := round( (jkner*maxBaseJKN) / 100 );
      end;
      if basejamsostek >= maxBaseJPS then
      begin
        jpsc    := round( (jpscr*maxBaseJPS) / 100 );
        jpse    := round( (jpser*maxBaseJPS) / 100 );
      end;
    end;
    if uppercase(q1.getfieldstring('type')) = 'FIX VALUE' then
    begin
      jkm       := round( (jkmr *baseJamsostek)  / 100 );
      jkk       := round( (jkkr *baseJamsostek)  / 100 );
      jhte      := round( (jhter*baseJamsostek)  / 100 );
      jhtc      := round( (jhtcr*baseJamsostek)  / 100 );
      jknc      := round( (jkncr*basejamsostek)  / 100 );
      jkne      := round( (jkner*basejamsostek)  / 100 );
      jpsc      := round( (jpscr*basejamsostek)  / 100 );
      jpse      := round( (jpser*basejamsostek)  / 100 );
    end;
    qh_payroll.setfield('typejamsostek', q1.getfieldstring('type'));
    qh_payroll.setfield('basejamsostek', basejamsostek);
    qh_payroll.setfield('jkm', jkm);
    qh_payroll.setfield('jkk', jkk);
    qh_payroll.setfield('jhtcompany', jhtc);
    qh_payroll.setfield('jhtemployee', jhte);
    qh_payroll.setfield('jkn', jknc);
    qh_payroll.setfield('jknemployee', jkne);
    qh_payroll.setfield('jpsemployee', jpsc);
    qh_payroll.setfield('jpsemployee', jpse);
  end;  // q1 > 0
  qh_payroll.Post;
  q1.Free;
end;
procedure SetSalaryAT(payrolldate: tDatetime;q_date,q_emp, qh_payroll, qd_payroll: tzQuery);
var
  q2 : tzquery;
begin
  q2 := createquery;
  Q2.query('select * from m_salary where txtlap=''AT'' order by acc, procorder ');
  while not Q2.eof do
  begin
    //dbg(q2.getFieldString('name'));
    if qh_payroll.isfieldexist(Q2.getfield('payrollheaderfield')) then
    begin
      qd_payroll.append;
      qd_payroll.SetMultiField('debugamount,diff',0);
      qd_payroll.setfield('payroll_id', qh_payroll.getFieldString('payroll_id'));
      qd_payroll.copydata(Q2);
      qd_payroll.setfield('amount', qh_payroll.getfielddouble(Q2.getfield('payrollheaderfield')));
      if qd_payroll.getfield('debugamount') > 0 then
      begin
        qd_payroll.setfield('diff', qd_payroll.getfielddouble('amount') - qd_payroll.getfielddouble('debugamount'));
      end;
      qd_payroll.post;
    end;
    Q2.next;
  end;
  Q2.free;
end;
end.
