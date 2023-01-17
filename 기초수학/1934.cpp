#include <iostream>

using namespace std;

int gbc(int a , int b);

int main(){
	
	int c ;
	
	cin >> c;
	
	for ( int i =0 ; i< c; i++){
		int A , B ;
	
		cin >> A >> B;
		
		if ( A < B){
			int temp = A;
			A = B;
			B = temp;	
		}
		
		
		cout << gbc(A , B) << endl;
		
	}

	
	return 0;
}

int gbc(int a , int b){
	
	int result = 1;
	
	int c = a;
	int d = b;
	
	for( int i = a; i > 0; i--){
		if( c % i == 0 && d % i == 0 ){
			c = c / i;
			d = d / i;
			
			result = result * i;
		}
	}
	
	return a * b / result;
}
