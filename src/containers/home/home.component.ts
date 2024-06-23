import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageSectionComponent } from '../../components/page-section/page-section.component';
import { PageContainerComponent } from '../../components/page-container/page-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CardComponent,
    PageSectionComponent,
    PageContainerComponent,
  ],
})
export class HomeComponent {
  content = {
    solutions: {
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
    },
    software_development: {
      id: 'delivery-excellence',
      title: 'Delivery Excellence',
      subtitle: 'Software Development',
      description:
        'Morbi purus quis rhoncus rhoncus egestas mus venenatis laoreet fusce. Nisi lorem ultricies mi urna ut egestas in. Nulla sit gravida amet vitae sit est at non. Pharetra eu ullamcorper sed tellus feugiat amet felis elementum quis. Turpis aliquet urna sagittis hac. Tortor venenatis egestas at commodo orci quis. Sit dictumst amet eget mi ultrices mattis est nisl. Nisl sagittis ut volutpat vehicula tristique sed metus ullamcorper imperdiet. Purus cras sed scelerisque morbi magna nulla. Vestibulum venenatis aenean pulvinar orci.',
      author: {
        title: 'Garant',
        name: 'John Doe',
        avatarScr: 'images/avatar_mock2.jpg',
        position: 'Senior software engeneering',
        link: 'contact',
      },
    },
    analysis_design: {
      id: 'analysis-&-design',
      title: 'Analysis & Design',
      subtitle: 'Software Development',
      description:
        'Justo turpis risus libero molestie. Sed cursus mauris pulvinar non et interdum pharetra ultricies. Facilisi fringilla venenatis egestas diam eu. Enim eros a consequat non cras viverra tincidunt. Sagittis viverra nulla sit turpis. Ac nisl pellentesque sapien dictum laoreet vestibulum nulla. Arcu dictum phasellus hendrerit sed varius elit felis felis. Eu facilisi ornare egestas venenatis ut pretium diam in. Ullamcorper urna viverra tellus pellentesque sed sapien mus.',
      author: {
        title: 'Garant',
        name: 'John Doe',
        avatarScr: 'images/avatar_mock.jpg',
        position: 'Senior software engeneering',
      },
    },
    implementation: {
      id: 'implementation',
      title: 'Implementation',
      subtitle: 'Software Development',
      description:
        'Our Implementation service transforms your vision into reality with precision and efficiency. Using cutting-edge technologies, we develop robust and scalable software solutions tailored to meet your unique business needs. Trust us to deliver high-performance software that drives your success.',
      author: {
        title: 'Garant',
        name: 'John Doe',
        avatarScr: 'images/avatar_mock.jpg',
        position: 'Senior software engeneering',
      },
    },
    testing_quality_assurance: {
      id: 'testing-&-quality-assurance',
      title: 'Testing & Quality Assurance',
      subtitle: 'Software Development',
      description:
        "Software testing is the backbone of development, catching bugs early to save costs and safeguard user experience. It's a non-negotiable step that secures customer satisfaction and trust, giving products a competitive edge. Effective testing equals robust software, primed for market success.",
        author: {
          title: 'Garant',
          name: 'John Doe',
          avatarScr: 'images/avatar_mock3.jpg',
          position: 'Senior software engeneering',
        },
    },
    maintenance: {
      id: 'maintenance',
      title: 'Maintenance',
      subtitle: 'Software Development',
      description: 'Justo turpis risus libero molestie. Sed cursus mauris pulvinar non et interdum pharetra ultricies. Facilisi fringilla venenatis egestas diam eu. Enim eros a consequat non cras viverra tincidunt. Sagittis viverra nulla sit turpis. Ac nisl pellentesque sapien dictum laoreet vestibulum nulla. Arcu dictum phasellus hendrerit sed varius elit felis felis. Eu facilisi ornare egestas venenatis ut pretium diam in. Ullamcorper urna viverra tellus pellentesque sed sapien mus.',
      author: {
        title: 'Garant',
        name: 'John Doe',
        avatarScr: 'images/avatar_mock2.jpg',
        position: 'Senior software engeneering',
      },
    }
  };
}
