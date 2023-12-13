#include <iostream>
#include <string>

using namespace std;


int gcd(int a, int b){
	if (b == 0)
		return a;
	else
		return gcd(b, a % b);
}


int main(){
	

	int t;
	cin >> t;
	
	for (int i = 0; i < t; i++){
		int n;
		long arr[101] = { 0 , };
		long result =  0;
		cin >> n;
		
		for ( int j = 0; j < n; j++){
			int temp = 0;
			cin >> temp;
			arr[j] = temp;
		}
	
		
		for  ( int j = 0; j < n ; j++){
			for  ( int u = j+1; u < n ; u++){
				
				long i1 = arr[j]; 
				long i2 = arr[u];
				
				if( i1 < i2){
					long temp = i1;
					i1 = i2;
					i2 = temp;
				}
				
				result = result +  gcd(i1 , i2);
			}
		}
		
		cout << result << endl;
		
	}
	
	return 0;
	
}

