import re 
import sys
import requests
import requests_cache
from bs4 import BeautifulSoup

def __main__():
    while(1):
        url = input('Digite o url do site: ')
            
        first = getResponse(url)
        links = first.find_all('a', href=re.compile(r'https?://'))

        if(len(links) == 0):
            print('Nenhum link com http ou https encontrado!')
            __main__()
        else:
            ArrayMounted = mountArray(links)    
            getLink(ArrayMounted)
            
        

        op = (int(input('Digite o numero do do link: ')))
        keyWord = input("Digite a palavra chave: ")


        selectedLink = getResponse(ArrayMounted[op - 1])
        raw = selectedLink.find_all(string=re.compile(r'(' + re.escape(keyWord) +')'))

        if(len(raw) == 0):
            print("Palavra chave não encontrada")
            __main__()
        else:
            finalResult(raw, keyWord)    

        print('\n')
        op = input("Pressione 0 para sair ou qualquer outra tecla para continuar............")
        print('\n')

        if(op == '0'):
            break


def getResponse(link):
    response = requests.get(link)
    if(response.status_code == 200):
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup
    else:
        print("Código de resposta diferente de 200!")
        __main__()

def getLink(array):
    count = 0
    for link in array:
        count += 1
        print(count, link)


def mountArray(links):
    count = 0
    array = []
    for link in links:
        if(count >= 10):
            break
        array.append(link.get('href'))
        count += 1

    return array

def finalResult(raw, keyword):
    count = 0
    while(count < len(raw)):
        print(re.search(r".{0,15}(" + re.escape(keyword) + ").{0,15}", raw[count]))
        count += 1



__main__()