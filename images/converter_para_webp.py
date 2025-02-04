import os
from PIL import Image

def converter_imagens_para_webp(pasta_origem, pasta_destino):
    # Cria a pasta de destino se ela não existir
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)

    # Percorre de forma recursiva todos os diretórios e arquivos a partir da pasta de origem
    for raiz, diretorios, arquivos in os.walk(pasta_origem):
        for nome_arquivo in arquivos:
            nome_arquivo_lower = nome_arquivo.lower()

            # Verifica se o arquivo é PNG, JPG ou JPEG
            if nome_arquivo_lower.endswith(('.png', '.jpg', '.jpeg')):
                caminho_completo = os.path.join(raiz, nome_arquivo)

                # Abre a imagem
                with Image.open(caminho_completo) as img:
                    # Define o novo nome do arquivo (extensão .webp)
                    nome_sem_extensao, _ = os.path.splitext(nome_arquivo)
                    novo_nome = nome_sem_extensao + '.webp'

                    # Para não misturar subpastas na mesma pasta de destino,
                    # você pode recriar a estrutura de diretórios. Mas se quiser
                    # apenas jogar tudo em uma única pasta, basta usar 'pasta_destino' diretamente.
                    #
                    # Exemplo de recriar subpastas (opcional):
                    subdiretorio_relativo = os.path.relpath(raiz, pasta_origem)
                    caminho_subdiretorio_dest = os.path.join(pasta_destino, subdiretorio_relativo)
                    if not os.path.exists(caminho_subdiretorio_dest):
                        os.makedirs(caminho_subdiretorio_dest)

                    # Caminho final para salvar a imagem convertida
                    caminho_final = os.path.join(caminho_subdiretorio_dest, novo_nome)

                    # Salva em formato WEBP (pode ajustar a qualidade se desejar)
                    img.save(caminho_final, format='webp')

def main():
    # A pasta de origem será a pasta atual ('.')
    # Você pode mudar para outro diretório se quiser.
    pasta_origem = '.'

    # A pasta de destino onde as imagens convertidas vão ficar
    pasta_destino = './imagens_convertidas'

    converter_imagens_para_webp(pasta_origem, pasta_destino)
    print(f'Todas as imagens foram convertidas e salvas em {pasta_destino}')

if __name__ == '__main__':
    main()
