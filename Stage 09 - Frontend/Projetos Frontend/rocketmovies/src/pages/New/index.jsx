
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

import { Container, Content, Form } from './styles';

export function New(){
    return(
      <Container>
        <Header />

        <main>
          <Content>
            <ButtonText to="/" title="Voltar"/>

            <Form>
              <h1>Novo Filme</h1>

              <div>
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
              </div>

              <Textarea placeholder="Observações"/>

              <Section title="Marcadores">
                <div className="tags">
                  <NoteItem value="Drama" />
                  <NoteItem placeholder="Novo marcador" isNew/>
                </div>
              </Section>

              <div>
                <Button title="Excluir filme" className="btn-delete"/>
                <Button title="Salvar alterações" />
              </div>
            </Form>
            
          </Content>
        </main>
        
      </Container>
    )
}