import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense} from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcEBAWHxLflF1VWJZdVp1flBFcDwsT3RfQF5jTHxVdEdnUX5fdnBTQw==");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
