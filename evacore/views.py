from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializer import ProfileSerializer



@ensure_csrf_cookie
def get_csrf_token(request):
    return render(request, 'index.html', {'csrfToken': get_token(request)}) 
    #return JsonResponse({'csrfToken': get_token(request)})


class FormView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        # Aquí puedes manejar la lógica del formulario POST
        # Accede a los datos del formulario utilizando request.POST
        data = self.request.data

        numero = data['numero']
        texto = data['texto']
        opcion = data['opcion']
        
        # Realiza las operaciones necesarias y devuelve una respuesta
        response_data = {
            'message': 'Formulario enviado con éxito',
            'numero': numero,
            'texto': texto,
            'opcion': opcion,
        }
        
        print(response_data)
        return JsonResponse(response_data)


class SelectItemsDDA(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        data=[
           {
    "Fecha": "2023-09-28",
    "Referencia": "12345",
    "Nombre del Comercio": "Comercio A",
    "D/C": "Débito",
    "Monto": "$100.00",
    
  },
  
    
  {
    "Fecha": "2023-09-30",
    "Referencia": "98765",
    "Nombre del Comercio": "Comercio C",
    "D/C": "Débito",
    "Monto": "$75.00",
    
  },
  {
    "Fecha": "2023-10-01",
    "Referencia": "56789",
    "Nombre del Comercio": "Comercio D",
    "D/C": "Crédito",
    "Monto": "$120.00",
    
  },
  {
    "Fecha": "2023-10-02",
    "Referencia": "24680",
    "Nombre del Comercio": "Comercio E",
    "D/C": "Débito",
    "Monto": "$95.00",
    
  },
  {
    "Fecha": "2023-10-03",
    "Referencia": "13579",
    "Nombre del Comercio": "Comercio F",
    "D/C": "Crédito",
    "Monto": "$60.00",
    
  },
  {
    "Fecha": "2023-10-04",
    "Referencia": "11223",
    "Nombre del Comercio": "Comercio G",
    "D/C": "Débito",
    "Monto": "$85.00",
    
  },
  {
    "Fecha": "2023-10-05",
    "Referencia": "998877",
    "Nombre del Comercio": "Comercio H",
    "D/C": "Crédito",
    "Monto": "$150.00",
    
  },
  {
    "Fecha": "2023-10-06",
    "Referencia": "445566",
    "Nombre del Comercio": "Comercio I",
    "D/C": "Débito",
    "Monto": "$70.00",
    
  },
  {
    "Fecha": "2023-10-07",
    "Referencia": "112233",
    "Nombre del Comercio": "Comercio J",
    "D/C": "Crédito",
    "Monto": "$200.00",
    
  },
  {
    "Fecha": "2023-10-08",
    "Referencia": "543210",
    "Nombre del Comercio": "Comercio K",
    "D/C": "Débito",
    "Monto": "$170.00",
    
  },
  {
    "Fecha": "2023-10-09",
    "Referencia": "987654",
    "Nombre del Comercio": "Comercio L",
    "D/C": "Crédito",
    "Monto": "$170.00",
    
  },
  {
    "Fecha": "2023-10-10",
    "Referencia": "135792",
    "Nombre del Comercio": "Comercio M",
    "D/C": "Débito",
    "Monto": "$75.00",
    
  },
  {
    "Fecha": "2023-10-11",
    "Referencia": "112233",
    "Nombre del Comercio": "Comercio N",
    "D/C": "Crédito",
    "Monto": "$140.00",
    
  },
  {
    "Fecha": "2023-10-12",
    "Referencia": "998877",
    "Nombre del Comercio": "Comercio O",
    "D/C": "Débito",
    "Monto": "$95.00",
    
  },
       
        ]

        return JsonResponse({"data": data})

    def post(self, request):
        # Aquí puedes manejar la lógica del formulario POST
        # Accede a los datos del formulario utilizando request.POST
        data = self.request.data

        numero = data['numero']
        texto = data['texto']
        opcion = data['opcion']
        
        # Realiza las operaciones necesarias y devuelve una respuesta
        response_data = {
            'message': 'Formulario enviado con éxito',
            'numero': numero,
            'texto': texto,
            'opcion': opcion,
        }
        
        print(response_data)
        return JsonResponse(response_data)


class SelectItemsTDC(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(request):
        return render(request, 'index.html')

    def post(self, request):
        # Aquí puedes manejar la lógica del formulario POST
        # Accede a los datos del formulario utilizando request.POST
        data = self.request.data

        numero = data['numero']
        texto = data['texto']
        opcion = data['opcion']
        
        # Realiza las operaciones necesarias y devuelve una respuesta
        response_data = {
            'message': 'Formulario enviado con éxito',
            'numero': numero,
            'texto': texto,
            'opcion': opcion,
        }
        
        print(response_data)
        return JsonResponse(response_data)




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    user = request.user
    profile = user.profile
    serializer = ProfileSerializer(profile, many=False)
    return Response(serializer.data)
