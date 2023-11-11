# StyleBoots
StyleBoots

                                        

                                            <div class="tabls001-container">
                                                <table id="minha-tabls001" class="minha-tabls001">
                                                    <thead>
                                                        <tr>
                                                            <th>Nome</th>
                                                            <th>Email</th>
                                                            <th>Telefone</th>
                                                            <th>Endereço</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Toji</td>
                                                            <td>toji@exemplo.com</td>
                                                            <td>(11) 1234-5678</td>
                                                            <td>Rua A, 456</td>
                                                        </tr>
                                                        <!-- Adiciona mais linhas conforme necessário -->
                                                    </tbody>
                                                </table>
                                            </div>
                                            <script>
                                                var tabls002Cor = document.getElementById("minha-tabls002");
                                            var linhaTabls002 = tabls002Cor.getElementsByTagName("td");
                                            
                                            for (var i = 0; i < linhaTabls002.length; i++) {
                                                if(i % 2 === 1) {
                                                    linhaTabls002[i].classList.add('tabls-cor2');
                                                }
                                            };
                                               </script>
                                        

                                     