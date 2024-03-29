
//*** convert D1,W3 to coordinates
function parseCFHTLS (t) {
  var t;
  t=t.toUpperCase();
  t=t.replace(/\s*/g,'');
  t=t.replace(/CFHTL*S*/g,'');
  var mra,mdec;
  var r=0;
  var d=0;
       if (t == 'D1') {r=  36.510; d=  -4.489;}
  else if (t == 'D2') {r= 150.113; d=   2.209;}
  else if (t == 'D3') {r= 214.861; d=  52.683;}
  else if (t == 'D4') {r= 333.884; d= -17.733;}
  else if (t == 'W1') {r=  34.450; d=  -7.000;}
  else if (t == 'W2') {r= 133.500; d=  -4.250;}
  else if (t == 'W3') {r= 214.475; d=  54.500;}
  else if (t == 'W4') {r= 333.325; d=   1.316;}
  else if (t == 'W1-4-4') {r=  30.67145833; d= -10.73333333;}
  else if (t == 'W1-4-3') {r=  30.67145833; d=  -9.80000000;}
  else if (t == 'W1-4-2') {r=  30.67145833; d=  -8.86666667;}
  else if (t == 'W1-4-1') {r=  30.67145833; d=  -7.93333333;}
  else if (t == 'W1-4+0') {r=  30.67145833; d=  -7.00000000;}
  else if (t == 'W1-4+1') {r=  30.67145833; d=  -6.06666667;}
  else if (t == 'W1-4+2') {r=  30.67145833; d=  -5.13333333;}
  else if (t == 'W1-4+3') {r=  30.67145833; d=  -4.20000000;}
  else if (t == 'W1-3-4') {r=  31.62858333; d= -10.73333333;}
  else if (t == 'W1-3-3') {r=  31.62858333; d=  -9.80000000;}
  else if (t == 'W1-3-2') {r=  31.62858333; d=  -8.86666667;}
  else if (t == 'W1-3-1') {r=  31.62858333; d=  -7.93333333;}
  else if (t == 'W1-3+0') {r=  31.62858333; d=  -7.00000000;}
  else if (t == 'W1-3+1') {r=  31.62858333; d=  -6.06666667;}
  else if (t == 'W1-3+2') {r=  31.62858333; d=  -5.13333333;}
  else if (t == 'W1-3+3') {r=  31.62858333; d=  -4.20000000;}
  else if (t == 'W1-2-4') {r=  32.58575000; d= -10.73333333;}
  else if (t == 'W1-2-3') {r=  32.58575000; d=  -9.80000000;}
  else if (t == 'W1-2-2') {r=  32.58575000; d=  -8.86666667;}
  else if (t == 'W1-2-1') {r=  32.58575000; d=  -7.93333333;}
  else if (t == 'W1-2+0') {r=  32.58575000; d=  -7.00000000;}
  else if (t == 'W1-2+1') {r=  32.58575000; d=  -6.06666667;}
  else if (t == 'W1-2+2') {r=  32.58575000; d=  -5.13333333;}
  else if (t == 'W1-2+3') {r=  32.58575000; d=  -4.20000000;}
  else if (t == 'W1-1-4') {r=  33.54287500; d= -10.73333333;}
  else if (t == 'W1-1-3') {r=  33.54287500; d=  -9.80000000;}
  else if (t == 'W1-1-2') {r=  33.54287500; d=  -8.86666667;}
  else if (t == 'W1-1-1') {r=  33.54287500; d=  -7.93333333;}
  else if (t == 'W1-1+0') {r=  33.54287500; d=  -7.00000000;}
  else if (t == 'W1-1+1') {r=  33.54287500; d=  -6.06666667;}
  else if (t == 'W1-1+2') {r=  33.54287500; d=  -5.13333333;}
  else if (t == 'W1-1+3') {r=  33.54287500; d=  -4.20000000;}
  else if (t == 'W1+0-4') {r=  34.50000000; d= -10.73333333;}
  else if (t == 'W1+0-3') {r=  34.50000000; d=  -9.80000000;}
  else if (t == 'W1+0-2') {r=  34.50000000; d=  -8.86666667;}
  else if (t == 'W1+0-1') {r=  34.50000000; d=  -7.93333333;}
  else if (t == 'W1+0+0') {r=  34.50000000; d=  -7.00000000;}
  else if (t == 'W1+0+1') {r=  34.50000000; d=  -6.06666667;}
  else if (t == 'W1+0+2') {r=  34.50000000; d=  -5.13333333;}
  else if (t == 'W1+0+3') {r=  34.50000000; d=  -4.20000000;}
  else if (t == 'W1+1-4') {r=  35.45712500; d= -10.73333333;}
  else if (t == 'W1+1-3') {r=  35.45712500; d=  -9.80000000;}
  else if (t == 'W1+1-2') {r=  35.45712500; d=  -8.86666667;}
  else if (t == 'W1+1-1') {r=  35.45712500; d=  -7.93333333;}
  else if (t == 'W1+1+0') {r=  35.45712500; d=  -7.00000000;}
  else if (t == 'W1+1+1') {r=  35.45712500; d=  -6.06666667;}
  else if (t == 'W1+1+2') {r=  35.45712500; d=  -5.13333333;}
  else if (t == 'W1+1+3') {r=  35.45712500; d=  -4.20000000;}
  else if (t == 'W1+2-4') {r=  36.41425000; d= -10.73333333;}
  else if (t == 'W1+2-3') {r=  36.41425000; d=  -9.80000000;}
  else if (t == 'W1+2-2') {r=  36.41425000; d=  -8.86666667;}
  else if (t == 'W1+2-1') {r=  36.41425000; d=  -7.93333333;}
  else if (t == 'W1+2+0') {r=  36.41425000; d=  -7.00000000;}
  else if (t == 'W1+2+1') {r=  36.41425000; d=  -6.06666667;}
  else if (t == 'W1+2+2') {r=  36.41425000; d=  -5.13333333;}
  else if (t == 'W1+2+3') {r=  36.41425000; d=  -4.20000000;}
  else if (t == 'W1+3-4') {r=  37.37141667; d= -10.73333333;}
  else if (t == 'W1+3-3') {r=  37.37141667; d=  -9.80000000;}
  else if (t == 'W1+3-2') {r=  37.37141667; d=  -8.86666667;}
  else if (t == 'W1+3-1') {r=  37.37141667; d=  -7.93333333;}
  else if (t == 'W1+3+0') {r=  37.37141667; d=  -7.00000000;}
  else if (t == 'W1+3+1') {r=  37.37141667; d=  -6.06666667;}
  else if (t == 'W1+3+2') {r=  37.37141667; d=  -5.13333333;}
  else if (t == 'W1+3+3') {r=  37.37141667; d=  -4.20000000;}
  else if (t == 'W1+4-4') {r=  38.32854167; d= -10.73333333;}
  else if (t == 'W1+4-3') {r=  38.32854167; d=  -9.80000000;}
  else if (t == 'W1+4-2') {r=  38.32854167; d=  -8.86666667;}
  else if (t == 'W1+4-1') {r=  38.32854167; d=  -7.93333333;}
  else if (t == 'W1+4+0') {r=  38.32854167; d=  -7.00000000;}
  else if (t == 'W1+4+1') {r=  38.32854167; d=  -6.06666667;}
  else if (t == 'W1+4+2') {r=  38.32854167; d=  -5.13333333;}
  else if (t == 'W1+4+3') {r=  38.32854167; d=  -4.20000000;}
  else if (t == 'W2-1-1') {r= 132.54737500; d=  -5.18333333;}
  else if (t == 'W2-1+0') {r= 132.54737500; d=  -4.25000000;}
  else if (t == 'W2-1+1') {r= 132.54737500; d=  -3.31666667;}
  else if (t == 'W2-1+2') {r= 132.54737500; d=  -2.38333333;}
  else if (t == 'W2-1+3') {r= 132.54737500; d=  -1.45000000;}
  else if (t == 'W2+0-1') {r= 133.50000000; d=  -5.18333333;}
  else if (t == 'W2+0+0') {r= 133.50000000; d=  -4.25000000;}
  else if (t == 'W2+0+1') {r= 133.50000000; d=  -3.31666667;}
  else if (t == 'W2+0+2') {r= 133.50000000; d=  -2.38333333;}
  else if (t == 'W2+0+3') {r= 133.50000000; d=  -1.45000000;}
  else if (t == 'W2+1-1') {r= 134.45262500; d=  -5.18333333;}
  else if (t == 'W2+1+0') {r= 134.45262500; d=  -4.25000000;}
  else if (t == 'W2+1+1') {r= 134.45262500; d=  -3.31666667;}
  else if (t == 'W2+1+2') {r= 134.45262500; d=  -2.38333333;}
  else if (t == 'W2+1+3') {r= 134.45262500; d=  -1.45000000;}
  else if (t == 'W2+2-1') {r= 135.40525000; d=  -5.18333333;}
  else if (t == 'W2+2+0') {r= 135.40525000; d=  -4.25000000;}
  else if (t == 'W2+2+1') {r= 135.40525000; d=  -3.31666667;}
  else if (t == 'W2+2+2') {r= 135.40525000; d=  -2.38333333;}
  else if (t == 'W2+2+3') {r= 135.40525000; d=  -1.45000000;}
  else if (t == 'W2+3-1') {r= 136.35787500; d=  -5.18333333;}
  else if (t == 'W2+3+0') {r= 136.35787500; d=  -4.25000000;}
  else if (t == 'W2+3+1') {r= 136.35787500; d=  -3.31666667;}
  else if (t == 'W2+3+2') {r= 136.35787500; d=  -2.38333333;}
  else if (t == 'W2+3+3') {r= 136.35787500; d=  -1.45000000;}
  else if (t == 'W3-3-3') {r= 210.06783333; d=  51.70861111;}
  else if (t == 'W3-3-2') {r= 209.98091667; d=  52.64194444;}
  else if (t == 'W3-3-1') {r= 209.88920833; d=  53.57527778;}
  else if (t == 'W3-3+0') {r= 209.79245833; d=  54.50861111;}
  else if (t == 'W3-3+1') {r= 209.69020833; d=  55.44194444;}
  else if (t == 'W3-3+2') {r= 209.58208333; d=  56.37527778;}
  else if (t == 'W3-3+3') {r= 209.46758333; d=  57.30861111;}
  else if (t == 'W3-2-3') {r= 211.53687500; d=  51.70861111;}
  else if (t == 'W3-2-2') {r= 211.47895833; d=  52.64194444;}
  else if (t == 'W3-2-1') {r= 211.41779167; d=  53.57527778;}
  else if (t == 'W3-2+0') {r= 211.35329167; d=  54.50861111;}
  else if (t == 'W3-2+1') {r= 211.28512500; d=  55.44194444;}
  else if (t == 'W3-2+2') {r= 211.21304167; d=  56.37527778;}
  else if (t == 'W3-2+3') {r= 211.13675000; d=  57.30861111;}
  else if (t == 'W3-1-3') {r= 213.00595833; d=  51.70861111;}
  else if (t == 'W3-1-2') {r= 212.97695833; d=  52.64194444;}
  else if (t == 'W3-1-1') {r= 212.94641667; d=  53.57527778;}
  else if (t == 'W3-1+0') {r= 212.91416667; d=  54.50861111;}
  else if (t == 'W3-1+1') {r= 212.88008333; d=  55.44194444;}
  else if (t == 'W3-1+2') {r= 212.84400000; d=  56.37527778;}
  else if (t == 'W3-1+3') {r= 212.80587500; d=  57.30861111;}
  else if (t == 'W3+0-3') {r= 214.47500000; d=  51.70861111;}
  else if (t == 'W3+0-2') {r= 214.47500000; d=  52.64194444;}
  else if (t == 'W3+0-1') {r= 214.47500000; d=  53.57527778;}
  else if (t == 'W3+0+0') {r= 214.47500000; d=  54.50861111;}
  else if (t == 'W3+0+1') {r= 214.47500000; d=  55.44194444;}
  else if (t == 'W3+0+2') {r= 214.47500000; d=  56.37527778;}
  else if (t == 'W3+0+3') {r= 214.47500000; d=  57.30861111;}
  else if (t == 'W3+1-3') {r= 215.94404167; d=  51.70861111;}
  else if (t == 'W3+1-2') {r= 215.97304167; d=  52.64194444;}
  else if (t == 'W3+1-1') {r= 216.00358333; d=  53.57527778;}
  else if (t == 'W3+1+0') {r= 216.03587500; d=  54.50861111;}
  else if (t == 'W3+1+1') {r= 216.06995833; d=  55.44194444;}
  else if (t == 'W3+1+2') {r= 216.10600000; d=  56.37527778;}
  else if (t == 'W3+1+3') {r= 216.14412500; d=  57.30861111;}
  else if (t == 'W3+2-3') {r= 217.41312500; d=  51.70861111;}
  else if (t == 'W3+2-2') {r= 217.47104167; d=  52.64194444;}
  else if (t == 'W3+2-1') {r= 217.53216667; d=  53.57527778;}
  else if (t == 'W3+2+0') {r= 217.59670833; d=  54.50861111;}
  else if (t == 'W3+2+1') {r= 217.66487500; d=  55.44194444;}
  else if (t == 'W3+2+2') {r= 217.73695833; d=  56.37527778;}
  else if (t == 'W3+2+3') {r= 217.81325000; d=  57.30861111;}
  else if (t == 'W3+3-3') {r= 218.88220833; d=  51.70861111;}
  else if (t == 'W3+3-2') {r= 218.96912500; d=  52.64194444;}
  else if (t == 'W3+3-1') {r= 219.06079167; d=  53.57527778;}
  else if (t == 'W3+3+0') {r= 219.15754167; d=  54.50861111;}
  else if (t == 'W3+3+1') {r= 219.25979167; d=  55.44194444;}
  else if (t == 'W3+3+2') {r= 219.36791667; d=  56.37527778;}
  else if (t == 'W3+3+3') {r= 219.48241667; d=  57.30861111;}
  else if (t == 'W4+2-2') {r= 335.22408333; d=  -0.51666667;}
  else if (t == 'W4+2-1') {r= 335.22404167; d=   0.38333333;}
  else if (t == 'W4+2+0') {r= 335.22450000; d=   1.31666667;}
  else if (t == 'W4+1-2') {r= 334.27404167; d=  -0.51666667;}
  else if (t == 'W4+1-1') {r= 334.27404167; d=   0.38333333;}
  else if (t == 'W4+1+0') {r= 334.27425000; d=   1.31666667;}
  else if (t == 'W4+1+1') {r= 334.27475000; d=   2.25000000;}
  else if (t == 'W4+0-2') {r= 333.32400000; d=  -0.51666667;}
  else if (t == 'W4+0-1') {r= 333.32400000; d=   0.38333333;}
  else if (t == 'W4+0+0') {r= 333.32400000; d=   1.31666667;}
  else if (t == 'W4+0+1') {r= 333.32400000; d=   2.25000000;}
  else if (t == 'W4-1-2') {r= 332.37395833; d=  -0.51666667;}
  else if (t == 'W4-1-1') {r= 332.37400000; d=   0.38333333;}
  else if (t == 'W4-1+0') {r= 332.37375000; d=   1.31666667;}
  else if (t == 'W4-1+1') {r= 332.37329167; d=   2.25000000;}
  else if (t == 'W4-1+2') {r= 332.37254167; d=   3.18333333;}
  else if (t == 'W4-1+3') {r= 332.37154167; d=   4.11666667;}
  else if (t == 'W4-2+0') {r= 331.42350000; d=   1.31666667;}
  else if (t == 'W4-2+1') {r= 331.42254167; d=   2.25000000;}
  else if (t == 'W4-2+2') {r= 331.42108333; d=   3.18333333;}
  else if (t == 'W4-2+3') {r= 331.41908333; d=   4.11666667;}
  else if (t == 'W4-3+0') {r= 330.47325000; d=   1.31666667;}
  else if (t == 'W4-3+1') {r= 330.47179167; d=   2.25000000;}
  else if (t == 'W4-3+2') {r= 330.46958333; d=   3.18333333;}
  else if (t == 'W4-3+3') {r= 330.46662500; d=   4.11666667;}


  var a=new Array(r,d,t);
  return a;
}