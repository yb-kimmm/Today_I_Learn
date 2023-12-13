#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

int main(){
	
  int n , m;
	cin >> n; 

	for (int i = 0; i < n; i++) {
    int m = 0;
		cin >> m;
    vector<int> score = {};

    double result = 0;
    int max = 0;
    double avg = 0;

    for( int j = 0; j < m; j++){
      int temp = 0;
      cin >> temp;
      result += temp;
      score.push_back(temp);
    }

    avg =  result / m ;

    int count =0;
    for( int j = 0; j < m; j++){
      if( score[j] > avg) {
        count++;
      } 
    }

    cout << fixed;
    cout.precision(3);
    double avgBetterCount =  (double)count / m * 100000.0;
    avgBetterCount = round(avgBetterCount);
    cout << avgBetterCount / 1000 << "%" << endl;

  }


  return 0;
}
