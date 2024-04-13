num1 = int(input('input a number '))
num2 = int(input('input a number '))
op = input('Input an opt ')

if op == '+':
  print (num1+num2)
elif op == '-':
  print (num1-num2)
elif op == '*':
  print (num1 * num2)
elif op == '/':
  print (num1 / num2)
else:
  print('invalid operator')