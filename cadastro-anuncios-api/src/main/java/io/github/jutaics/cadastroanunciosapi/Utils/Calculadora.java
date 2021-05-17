package io.github.jutaics.cadastroanunciosapi.Utils;

/**
 * Classe que representa a Calculadora de visualizações de anúncios
 @since
  * @author Jutaí de Carvalho Santos
 * @version 1.0
 */
public class Calculadora {

    public double Calculo(double valor) {
        double totalInvestido = 0;
        int totalAproximadoVisualizacao;

        System.out.print("Valor Investido R$(0.00):\n");



        // converte o valor do objeto instanciado para o tipo double
        totalInvestido = valor;

        // total de visualizações geral, obtido pelo retorno do método calcularVisualizacoesAnuncio();
        totalAproximadoVisualizacao = calcularVisualizacoesAnuncio(totalInvestido);

        System.out.println("Total aproximado de visualizações:\n" + totalAproximadoVisualizacao);

        return totalInvestido;
    }

    /**
     * Método que recebe o total em R$ investido e retorna a quantidade aproximada de visualizações do anuncio
     *
     * @param totalInvestido Valor em real investido
     * @return Total aproximado de visualizações do anúncio por real investido
     */
    public static int calcularVisualizacoesAnuncio(double totalInvestido) {

        double visualizacaoPorRealInvestido = (double) 30;
        double compartilhamentoNaSequencia = 4;
        double mediaDeCliques = (double) 12 / 100;
        double mediaCompartilhamentoRedeSocial = (double) 3 / 20;
        double novasVisualizacoes = 40;
        Double totalVisualizacao;

        // 1º total de pessoas que visualizam o anúncio original (não compartilhado), a cada R$1,00 investido
        visualizacaoPorRealInvestido = (totalInvestido * visualizacaoPorRealInvestido);

        // 2º o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
        compartilhamentoNaSequencia = (visualizacaoPorRealInvestido * compartilhamentoNaSequencia);

        // 3º a cada 100 pessoas que visualizam o anúncio 12 clicam nele
        mediaDeCliques = (compartilhamentoNaSequencia * mediaDeCliques);

        // 4º a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais
        mediaCompartilhamentoRedeSocial = (mediaDeCliques * mediaCompartilhamentoRedeSocial);

        // 5º a cada compartilhamento nas redes sociais gera 40 novas visualizações.
        totalVisualizacao = (mediaCompartilhamentoRedeSocial * novasVisualizacoes);

        return totalVisualizacao.intValue();

    }

}
