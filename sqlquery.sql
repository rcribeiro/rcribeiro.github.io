select a.prioridade, a.descricao descr_prioridade, b.responsavel, nvl(b.horas_previstas,0) horas_previstas,
       nvl(b.horas_realizadas,0) horas_realizadas, 
       nvl(b.data_inicial,to_date('1900-01-01','yyyy-mm-dd')) data_inicial, nvl(b.data_final,to_date('1900-01-01','yyyy-mm-dd')) data_final,
       b.id_tipotarefa, b.usuario_inclusao, nvl(b.data_inclusao,'nula') data_inclusao, b.ordem
from ssjr.csi_ocorfase a, ssjr.csi_ocortarefa b      
where a.num_sprint = 394
    and a.id_ocorfase = b.id_ocorfase
    and a.prioridade in (5.9, 5.91, 5.92)
    and b.descricao not like 'Correção de bugs%'
    and b.descricao not like 'Correção de erros encontrados pela qualidade na v12%'
    and b.descricao not like '[V11 ou V12][MODELO - CADASTRO BUG]%'
    and b.descricao not like 'Depende de correção da TOTVS%'
    and b.descricao not like '%DGF%'
order by a.prioridade, b.data_inicial