num1 = int(input('input a number '))
num2 = int(input('input a number '))
ops = input('Input an opst ')

if ops == '+':
  print (num1+num2)
elif ops == '-':
  print (num1-num2)
elif ops == '*':
  print (num1 * num2)
elif ops == '/':
  print (num1 / num2)
else:
  print('invalid operator')