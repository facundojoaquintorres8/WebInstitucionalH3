import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IProduct {
  name: string,
  descriptions: { text: string, check: boolean }[],
  image: string,
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products: IProduct[] = [
    {
      name: 'Coadyuvante Adherente H3',
      descriptions: [
        {
          text: 'Coadyuvante no iónico que mejora la eficiencia de los productos fitosanitarios, optimizando la cobertura y el aprovechamiento de cada aplicación.',
          check: false
        },
        {
          text: 'Mejora el mojado de la superficie vegetal',
          check: true
        },
        {
          text: 'Aumenta la adherencia de las gotas, reduciendo goteo y lavado por lluvia',
          check: true
        },
        {
          text: 'Favorece la penetración del producto a través de la capa cerosa',
          check: true
        },
        {
          text: 'Compatible con plaguicidas y fertilizantes foliares',
          check: true
        },
        {
          text: 'Más eficiencia, mejor cobertura y mejores resultados en cada aplicación.',
          check: false
        }
      ],
      image: './products/1.svg',
    },
    {
      name: 'Coadyuvante Siliconado',
      descriptions: [
        {
          text: 'Coadyuvante no iónico de última generación que logra super humectación (spreading), asegurando una cobertura rápida y uniforme sobre la superficie foliar.',
          check: false
        },
        {
          text: 'Optimiza aplicaciones de herbicidas, fungicidas, insecticidas y fertilizantes foliares',
          check: true
        },
        {
          text: 'Mejora el contacto del producto con la hoja',
          check: true
        },
        {
          text: 'Potencia la penetración a través de la superficie vegetal',
          check: true
        },
        {
          text: 'Aumenta la eficiencia y el aprovechamiento del tratamiento',
          check: true
        },
        {
          text: 'Mayor cobertura, mejor penetración y resultados más eficientes en cada aplicación.',
          check: false
        }
      ],
      image: './products/2.svg',
    },
    {
      name: 'Acondicionador de Agua H3',
      descriptions: [
        {
          text: 'Mejora la calidad del agua utilizada en las aplicaciones, optimizando el rendimiento de los agroquímicos desde el inicio del tratamiento.',
          check: false
        },
        {
          text: 'Reduce el pH del agua',
          check: true
        },
        {
          text: 'Secuestra cationes responsables de la dureza',
          check: true
        },
        {
          text: 'Evita interferencias que afectan la eficacia de los productos',
          check: true
        },
        {
          text: 'Asegura una mezcla más estable, compatible y eficiente',
          check: true
        },
        {
          text: 'Mejor agua, mejor mezcla y mejores resultados en cada aplicación.',
          check: false
        }
      ],
      image: './products/3.svg',
    },
    {
      name: 'Aceite Oil Plus (MSO)',
      descriptions: [
        {
          text: 'Coadyuvante premium a base de aceite metilado (MSO), formulado para potenciar al máximo la eficacia de herbicidas, insecticidas, fungicidas y fertilizantes foliares.',
          check: false
        },
        {
          text: 'Mejora la penetración y el desempeño de los tratamientos',
          check: true
        },
        {
          text: 'Su emulsión de alta calidad evita el corte de caldo',
          check: true
        },
        {
          text: 'Optimiza la estabilidad de la mezcla',
          check: true
        },
        {
          text: 'Garantiza una aplicación más eficiente, segura y uniforme',
          check: true
        },
        {
          text: 'Más impacto, mayor persistencia y mejores resultados por hectárea.',
          check: false
        }
      ],
      image: './products/4.svg',
    },
    {
      name: 'Desengrasante',
      descriptions: [
        {
          text: 'Diseñado para la eliminación eficaz de restos de agroquímicos, grasas y suciedad adherida, asegurando una limpieza profunda y segura.',
          check: false
        },
        {
          text: 'Ideal para la limpieza de tanques y pulverizadoras',
          check: true
        },
        {
          text: 'Eficaz en utensilios y equipos de aplicación',
          check: true
        },
        {
          text: 'Elimina residuos que pueden afectar futuras mezclas',
          check: true
        },
        {
          text: 'Facilita el mantenimiento y la seguridad operativa',
          check: true
        },
        {
          text: 'Limpieza eficiente, equipos protegidos y aplicaciones más seguras.',
          check: false
        }
      ],
      image: './products/5.svg',
    },
    {
      name: 'Antideriva',
      descriptions: [
        {
          text: 'Diseñado para reducir la formación de microgotas y minimizar el desplazamiento del caldo por efecto del viento, mejorando la calidad de aplicación.',
          check: false
        },
        {
          text: 'Disminuye la deriva durante la pulverización',
          check: true
        },
        {
          text: 'Aumenta la precisión del tratamiento',
          check: true
        },
        {
          text: 'Compatible con plaguicidas, reguladores del crecimiento y fertilizantes foliares',
          check: true
        },
        {
          text: 'Contribuye a aplicaciones más seguras y eficientes',
          check: true
        },
        {
          text: 'Mayor control, más seguridad y mejores resultados en cada aplicación.',
          check: false
        }
      ],
      image: './products/6.svg',
    },
    {
      name: 'Antiespumante H3',
      descriptions: [
        {
          text: 'Formulado para eliminar la formación de espuma durante la preparación y carga de mezclas agroquímicas, facilitando el llenado del tanque y mejorando la eficiencia operativa.',
          check: false
        },
        {
          text: 'Evita derrames y desperdicio de producto',
          check: true
        },
        {
          text: 'Acelera la preparación de la mezcla',
          check: true
        },
        {
          text: 'Mejora el control durante la carga del tanque',
          check: true
        },
        {
          text: 'Compatible con formulaciones de uso habitual',
          check: true
        },
        {
          text: 'Menos espuma, más control y aplicaciones más eficientes.',
          check: false
        }
      ],
      image: './products/7.svg',
    },
    {
      name: 'Recuperador de Caldo H3',
      descriptions: [
        {
          text: 'Formulado para restablecer la homogeneidad del caldo fitosanitario, mejorando la estabilidad y eficiencia de la mezcla en aplicaciones terrestres y aéreas.',
          check: false
        },
        {
          text: 'Favorece una correcta emulsión',
          check: true
        },
        {
          text: 'Evita problemas de separación durante la aplicación',
          check: true
        },
        {
          text: 'Optimiza el rendimiento de fitosanitarios y coadyuvantes',
          check: true
        },
        {
          text: 'Asegura mezclas más uniformes, seguras y efectivas',
          check: true
        },
        {
          text: 'Mayor estabilidad, mejor mezcla y aplicaciones más confiables.',
          check: false
        }
      ],
      image: './products/8.svg',
    }
  ];

  public whatsappLink(productName: string): string {
    const phone = '5493424064362';
    const message = `Hola, quiero más información sobre el producto: ${productName}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

}
