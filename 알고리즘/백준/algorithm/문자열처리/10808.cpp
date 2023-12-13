#include <iostream>
#include <string>

using namespace std;

int main(){
	

	string t;
	cin >> t;
	
	//97 122
	
	int arr[26] = { 0 ,};
	int length =  sizeof(arr) / sizeof(int);
	
	
	for (int a = 0; a < t.length(); a++){
		for (int i = (int)'a'; i <= (int)'z'; i++){
			if( i == (int)t[a] ){
				arr[i - 97]++;
			}
		}	
	}
	
	for (int i = 0; i < length; i++){
		cout << arr[i] << " ";
	}
	return 0;
	
}

