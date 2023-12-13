#include <iostream>
#include <vector>

using namespace std;

int main()
{
  int n =  0;
  cin >> n ;
  int count = 0;

  vector<int> dp = vector<int>(1000001);
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 3;
  
  for( int i = 5; i <=n; i++){
    if (i % 2 != 0 && i % 3 != 0)
        dp[i] = dp[i - 1] + 1;
    else if (i % 2 == 0 && i % 3 == 0)
        dp[i] = min(dp[i / 2] + 1, dp[i / 3] + 1);
    else if (i % 2 == 0)
        dp[i] = min(dp[i / 2] + 1, dp[i - 1] + 1);
    else if (i % 3 == 0)
        dp[i] = min(dp[i / 3] + 1, dp[i - 1] + 1);
  }
  

  cout << dp[n];

  return 0;
}
