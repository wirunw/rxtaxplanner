export const rules = {
  id: 'TH-WORKSHOP-2569-ILLUSTRATIVE-v1', taxYear: 2569, status: 'illustrative',
  pit: [[150000,0],[300000,.05],[500000,.10],[750000,.15],[1000000,.20],[2000000,.25],[5000000,.30],[Infinity,.35]] as [number,number][],
  pharmacyExpense: .60, vatThreshold: 1800000, dividendWht: .10,
  sme: { capitalMax: 5000000, revenueMax: 30000000, exempt: 300000, tier: 3000000 },
};
const positive = (n:number) => Math.round(Math.max(0,n));
export function pit(value:number) {
  const taxable = positive(value); let lower = 0, result = 0;
  for (const [upper,rate] of rules.pit) { result += positive((Math.min(taxable,upper)-lower)*rate); lower=upper; if(taxable<=upper) break; }
  return result;
}
export type Business = {revenue:number;cogs:number;opex:number;accounting:number;deductions:number;capital:number;retain:number};
export function simulate(x:Business) {
  const gross=x.revenue-x.cogs, operating=gross-x.opex;
  const assumed=positive(x.revenue*rules.pharmacyExpense);
  const taxablePresumptive=positive(x.revenue-assumed-x.deductions);
  const taxableActual=positive(x.revenue-x.cogs-x.opex-x.deductions);
  const taxPresumptive=pit(taxablePresumptive), taxActual=pit(taxableActual);
  const companyProfit=positive(operating-x.accounting);
  const sme=x.capital<=rules.sme.capitalMax&&x.revenue<=rules.sme.revenueMax;
  const cit=sme ? positive(Math.max(0,Math.min(companyProfit,rules.sme.tier)-rules.sme.exempt)*.15+Math.max(0,companyProfit-rules.sme.tier)*.20) : positive(companyProfit*.20);
  const afterCit=companyProfit-cit, retained=positive(afterCit*Math.min(1,Math.max(0,x.retain)));
  const dividend=afterCit-retained, wht=positive(dividend*rules.dividendWht);
  return {gross,operating,assumed,taxablePresumptive,taxableActual,taxPresumptive,taxActual,companyProfit,sme,cit,afterCit,retained,dividend,wht,companyCash:dividend-wht,ownerIndividualCash:operating-taxPresumptive, vatFlag:x.revenue>rules.vatThreshold};
}
export function salaryEstimate(annual:number) { const expense=Math.min(positive(annual*.5),100000), taxable=positive(annual-expense-60000); return {expense,taxable,tax:pit(taxable)}; }
