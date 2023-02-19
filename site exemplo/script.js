const botao = document.getElementById('btn')
const ra = document.getElementById('ra')
const senha = document.getElementById('senha')

const imagem = document.getElementById('foto_perfil_carteirinha')
const qr = document.getElementById('qr_code')
const curso_aluno = document.getElementById('curso_aluno')
const nome_aluno = document.getElementById('nome_aluno')

const nome = document.getElementById('nome_li')
const matricula = document.getElementById('matricula_li')
const curso = document.getElementById('curso_li')
const cpf = document.getElementById('cpf_li')
const data_nasc = document.getElementById('data_nasc_li')
const validade = document.getElementById('validade_li')
const verificacao = document.getElementById('verificacao_li')

botao.addEventListener('click', gerar)

function gerar(){

    if(ra.value == '202220050' && senha.value == '0050'){

    /*Luciano*/
    imagem.src = '/imagens/luciano.jpg'
    qr.src = '/imagens/qrcode.png'
    qr.style.visibility = 'visible'
    curso_aluno.innerText = 'Administração'
    nome_aluno.innerText = 'Luciano Silva Santos'

    nome.innerText = 'Luciano Silva Santos'
    matricula.innerText = '202220050'
    curso.innerText = 'Administração'
    cpf.innerText = '682.532.753-12'
    data_nasc.innerText = '30/05/1980'
    validade.innerText = '30/06/2026'
    verificacao.innerText = '924993033690043298'

    } else if (ra.value == '202220051' && senha.value == '0051'){

    /*Yuri*/
    imagem.src = '/imagens/Yuri.jpg'
    qr.src = '/imagens/qrcode.png'
    qr.style.visibility = 'visible'
    curso_aluno.innerText = 'Análise e Desenvolvimento de Sistemas'
    nome_aluno.innerText = 'Yuri Lucka Carriel Rodrigues'

    nome.innerText = 'Yuri Lucka Carriel Rodrigues'
    matricula.innerText = '202220051'
    curso.innerText = 'Análise e Desenvolvimento de Sistemas'
    cpf.innerText = '345.405.798-11'
    data_nasc.innerText = '16/07/1997'
    validade.innerText = '31/12/2025'
    verificacao.innerText = '85993825469271570'

    }else if (ra.value == '202220052' && senha.value == '0052'){

    /*Naldo*/
    imagem.src = '/imagens/Naldo.jpg'
    qr.src = '/imagens/qrcode.png'
    qr.style.visibility = 'visible'
    curso_aluno.innerText = 'Arquitetura e Urbanismo'
    nome_aluno.innerText = 'Evonaldo Grigório da Silva'

    nome.innerText = 'Evonaldo Grigório da Silva'
    matricula.innerText = '202220052'
    curso.innerText = 'Arquitetura'
    cpf.innerText = '428.658.948-51'
    data_nasc.innerText = '15/03/1995'
    validade.innerText = '31/12/2027'
    verificacao.innerText = '122568324567564352'

    }else if (ra.value == '' && senha.value == '') {
    imagem.src = '/imagens/perfil.png'
    qr.src = '/imagens/qr_perfil.png'
    qr.style.visibility = 'hidden'
    curso_aluno.innerText = 'XXXXXXXX'
    nome_aluno.innerText = 'XXXX XXXX XXXX XXXX'

    nome.innerText = 'XXXX XXXX XXXX XXXX'
    matricula.innerText = 'XXXXXXXXXXXX'
    curso.innerText = 'XXXXXXXX'
    cpf.innerText = 'XXX.XXX.XXX-XX'
    data_nasc.innerText = 'XX/XX/XXXX'
    validade.innerText = 'XX/XX/XXXX'
    verificacao.innerText = 'XXXXXXXXXXXXXXXXXX'



    }else if (ra.value != '' || senha.value != '') {
        ra.value = ''
        senha.value = ''

        imagem.src = '/imagens/perfil.png'
        qr.src = '/imagens/qr_perfil.png'
        qr.style.visibility = 'hidden'
        curso_aluno.innerText = 'XXXXXXXX'
        nome_aluno.innerText = 'XXXX XXXX XXXX XXXX'
    
        nome.innerText = 'XXXX XXXX XXXX XXXX'
        matricula.innerText = 'XXXXXXXXXXXX'
        curso.innerText = 'XXXXXXXX'
        cpf.innerText = 'XXX.XXX.XXX-XX'
        data_nasc.innerText = 'XX/XX/XXXX'
        validade.innerText = 'XX/XX/XXXX'
        verificacao.innerText = 'XXXXXXXXXXXXXXXXXX'
    }

}
