import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageSectionComponent } from "../../components/page-section/page-section.component";
import { PageContainerComponent } from "../../components/page-container/page-container.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, CardComponent, PageSectionComponent, PageContainerComponent]
})
export class HomeComponent {
  header = {
    id: 'solutions',
    title: 'Software Development',
    subtitle: 'Solutions',
    description:
      'At our software house, we excel in delivering tailored software solutions, available as standalone applications or comprehensive SaaS platforms. We offer a suite of individual services that can be seamlessly integrated for end-to-end delivery or selected a la carte to meet your specific needs. We Plan for the foundation of every delivery with a clear roadmap aligned with your business objectives. In Analysis, we dissect project specifics to identify essential functionalities and forecast challenges. The Design phase brings together creative and technical expertise to create engaging user experiences. Implementation transforms designs into robust, scalable software using the latest technologies. During Testing, we ensure every component meets high-quality standards and functions flawlessly. Lastly, our Maintenance service keeps your software optimal with ongoing updates and support. Partner with us to harness the power of tailored technology solutions and propel your business forward in the competitive digital landscape.',
    author: {
      title: 'Garant',
      name: 'John Doe',
      avatarScr: 'images/avatar_mock.jpg',
      position: 'Senior software engeneering',
      link: 'contact',
    },
  };
}
