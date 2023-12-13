#include <iostream>
#include <string>

using namespace std;

int main(){
	
	string t;
	while(getline(cin , t)){
		
	
		int arr[4] = { };
		int length =  sizeof(arr) / sizeof(int);
		
		for (int i = 0; i <  t.length(); i++){	
			int temp = (int)t[i];
			if ( temp == 32 ){
				arr[3]++;
			}else if( 97 <= temp && temp <= 122){
				arr[0]++;
			}else if ( 65 <= temp && temp <= 90 ){
				arr[1]++;
			}else if ( 48 <= temp && temp <= 57) {
				arr[2]++;	
			}
		}
		
		for (int i = 0; i < length; i++){
			cout << arr[i] << " " ;
		}
		
		cout << endl;
			
	}
	
	return 0;
	
}

