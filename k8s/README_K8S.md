
Tous les manifestes YAML nécessaires au déploiement de l’application se trouvent dans le dossier `k8s/`.  
Ce dossier contient au minimum :

- `backend-deployment.yaml`
- `backend-service.yaml`
- `frontend-deployment.yaml`
- `frontend-service.yaml`
- `mysql-deployment.yaml`
- `mysql-service.yaml`
- `mysql-pvc.yaml`
- `mysql-secret.yaml`
- `backend-configmap.yaml`, `frontend-configmap.yaml`

---

##  Installation

**Pré-requis :**
- 'Minikube'
- `kubectl` 

# Appliquer tous les manifestes Kubernetes
kubectl apply -f k8s/
